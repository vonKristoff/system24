The Vanilla Experience.

Mixing a new frontier of standard systems, and clearing away the gumf of the past.



## SVG

`requires:build`
Keep all single assets as Symbols in one directory and concatinate them together to a single spritesheet.svg access them with the `use`

```
<svg><use xlms:href="/assets/spritesheet.svg#target" /></svg>
```

## Global store

Create a Custom browser `watch` event to trigger DOM updates to data attributes.

How? By using **JS Proxies** (the fundamental native built in way to listen to state changes and trigger a side-effect)

`/js/store`

```
// useage
const store = createStore({ appReady: false })
    
store.watch('appReady', (value) => {
  console.log('update DOM data-attribute with', value)
})

// trigger state change with side effect
store.state.appReady = true
```

## Vanilla JS Modules | Directives

Use data-attributes to define all kinds of behaviours on the targeted DOM element. 

* Visibility (Once element is within the viewport)
* Lazy loading
* Click outside
* General web component like functionality ie: Carousel 