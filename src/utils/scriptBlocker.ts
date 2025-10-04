import { hasConsent } from './cookieConsent';

export type ScriptCategory = 'analytics' | 'marketing';

interface BlockedScript {
  src?: string;
  innerHTML?: string;
  attributes: Record<string, string>;
  category: ScriptCategory;
}

const blockedScripts: BlockedScript[] = [];

export const blockScript = (script: HTMLScriptElement): void => {
  const category = script.getAttribute('data-cookie-category') as ScriptCategory;

  if (!category || hasConsent(category)) {
    return;
  }

  const blockedScript: BlockedScript = {
    src: script.src || undefined,
    innerHTML: script.innerHTML || undefined,
    attributes: {},
    category,
  };

  Array.from(script.attributes).forEach(attr => {
    if (attr.name !== 'type' && attr.name !== 'src') {
      blockedScript.attributes[attr.name] = attr.value;
    }
  });

  blockedScripts.push(blockedScript);

  script.type = 'text/plain';
  script.setAttribute('data-blocked', 'true');
};

export const loadBlockedScripts = (category: ScriptCategory): void => {
  if (!hasConsent(category)) return;

  const scriptsToLoad = blockedScripts.filter(s => s.category === category);

  scriptsToLoad.forEach(blocked => {
    const script = document.createElement('script');
    script.type = 'text/javascript';

    if (blocked.src) {
      script.src = blocked.src;
    }

    if (blocked.innerHTML) {
      script.innerHTML = blocked.innerHTML;
    }

    Object.entries(blocked.attributes).forEach(([key, value]) => {
      script.setAttribute(key, value);
    });

    document.head.appendChild(script);
  });

  const blockedElements = document.querySelectorAll(`script[data-blocked="true"][data-cookie-category="${category}"]`);
  blockedElements.forEach(el => {
    const script = el as HTMLScriptElement;
    const newScript = document.createElement('script');
    newScript.type = 'text/javascript';

    if (script.src) {
      newScript.src = script.src;
    }

    if (script.innerHTML) {
      newScript.innerHTML = script.innerHTML;
    }

    Array.from(script.attributes).forEach(attr => {
      if (attr.name !== 'type' && attr.name !== 'data-blocked') {
        newScript.setAttribute(attr.name, attr.value);
      }
    });

    script.parentNode?.replaceChild(newScript, script);
  });
};

export const initScriptBlocker = (): void => {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeName === 'SCRIPT') {
          const script = node as HTMLScriptElement;
          const category = script.getAttribute('data-cookie-category');
          if (category && (category === 'analytics' || category === 'marketing')) {
            blockScript(script);
          }
        }
      });
    });
  });

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
  });

  window.addEventListener('cookieConsentChanged', (e: Event) => {
    const customEvent = e as CustomEvent;
    const consent = customEvent.detail;

    if (consent?.analytics) {
      loadBlockedScripts('analytics');
    }
    if (consent?.marketing) {
      loadBlockedScripts('marketing');
    }
  });
};
