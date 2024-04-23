export const clickOutside = (el, callback) => {
    document.addEventListener('click', e => {
        if (!el.contains(e.target)) callback()
    });
};