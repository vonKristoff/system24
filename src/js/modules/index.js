const loadModule = async (name, element, options = {}) => {
    // name of module must match filename
    const Module = await import(`../modules/${name}.js`)
    if (Module.default.toString().startsWith('class')) return Module.default
    Module.default(element, options)
}

export const createComponents = async (selector) => {
    // target all elements
    const elements = document.querySelectorAll(selector)
    for (const element of elements) {
        try { await loadModule(element.dataset.module, element) }
        catch(err) { console.error(err) }
    }
}

