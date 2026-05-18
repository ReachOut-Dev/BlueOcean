window.culture = {
    storageKey: 'blazorCulture',
    get: () => localStorage.getItem('blazorCulture'),
    set: (value) => localStorage.setItem('blazorCulture', value),
    getStartupCulture: () => localStorage.getItem('blazorCulture') || 'en-US',
    setDocumentLang: (cultureName) => {
        const lang = cultureName && cultureName.startsWith('ko') ? 'ko' : 'en';
        document.documentElement.lang = lang;
    }
};
