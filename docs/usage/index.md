---
sidebar_position: 3
---

# Basic Usage

Right after installing GlassX, you can start setting and getting your global state without doing any configuration.

## Example Usage

```js
import { useStore } from 'glassx';

export default function Home() {
  const [something, setSomething] = useStore('something');

  setTimeout(() => {
    setSomething('hobies');
  }, 3000);
  ...
```

This example reads a global state value named `something` and sets a new value to `something` after 3 seconds.

## Optional Setup

As mentioned earlier, GlassX requires absolute no setup or boilerplate. You only need to do this if you want extra options, plugins, just want to set a default state for your application or want to scope your state using modules.

To get started with this, you simply need to call the `store` method on the GlassX class.

```ts
const store = GlassX.store({
  // default State
  state: {
    key: 'value'
  },

  // register reducers to call by name
  reducers: {
    reducer_name: (state, payload) => ({
      stateKey: payload,
    }),
  },

  // to use modules
  modules: [layoutModule],

  // compare state to previous state before updating
  compareState: true,

  // glassx plugins
  plugins: [PersistedState],
});
```

Throughout the docs, we'll explain what reducers, modules and plugins are.
