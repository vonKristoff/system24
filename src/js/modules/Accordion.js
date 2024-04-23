const Accordion = (el) => {
    // :scope is particularly useful when selecting direct descendants of the current element that match some criteria!
    const items = el.querySelectorAll(':scope > *');
    items.forEach((item) => {
      let isActive = false;
      let timeout = null;
      const head = item.querySelector(':scope > *:first-child');
      const body = item.querySelector(':scope > *:last-child');
  
      const toggle = () => {
        isActive = !isActive;
        item.classList[isActive ? 'add' : 'remove']('is-active');
  
        if (isActive) {
          slideDown(body);
        } else {
          slideUp(body);
        }
      };
  
      const slideUp = (item) => {
        clearTimeout(timeout);
        const height = item.clientHeight;
        // Set the initial point
        item.style.height = `${height}px`;
        // Set consicuance order / empty delay
        timeout = setTimeout(() => {
          item.style.height = 0;
        });
      };
  
      const slideDown = (item, customTimeout) => {
        clearTimeout(timeout);
        const height = item.scrollHeight;
        item.style.height = `${height}px`;
        timeout = setTimeout(() => {
          item.style.height = 'auto';
        }, customTimeout || 520);
      };
  
      head.addEventListener('click', toggle);

    });
  };
  
  export default Accordion;
  