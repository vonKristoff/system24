const WATCHEVENT = 'watch'
function dispatchEvent(detail) {
    document.dispatchEvent(new CustomEvent(WATCHEVENT, {
        bubbles: true,
        cancelable: true,
        detail
    }))
}
// setup proxy on state object
const proxyState = (state) => new Proxy(state, {
    get: (state, key) => {
        // console.log('getting', state, key)
        return state[key]
    },
    // when state is changed, trigger a side-effect
    set: (state, key, value) => {
        // console.log('update', state, key, value)
        state[key] = value
        dispatchEvent({ key, value });
        return true
    }
}) 

export default (state) => {
    return {
        state: proxyState(state),
        watch: (key, callback) => {
            // initialise watcher
            document.addEventListener(WATCHEVENT, ({ detail }) => {
                if(detail.key === key) callback(detail.value)
            })
        }
    }
}