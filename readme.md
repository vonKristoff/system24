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