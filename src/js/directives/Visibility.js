const OPTIONS = {
    threshold: 0.01
  }
  
  class Visibility {
      constructor(selectors, options = null) {
          this.selectors = selectors
          this.options = options ?? OPTIONS
          this._init()
      }
  
      _init() {
            let Observer = new IntersectionObserver((entries, observer) => {
              entries.forEach((entry) => {
                const target = entry.target
                if (entry.isIntersecting) {
                  target.dataset.visibility = true
                  observer.unobserve(target)
                  return
                } 
              });
            }, this.options);
  
            this.selectors.forEach((selector) => {
              Observer.observe(selector)
            });
      }
  }
  
  export default Visibility