---
sidebar_position: 10
---

# Modules (docs WIP)

When your state is initialized, a react context is created in your app, however, this context is not tied to any providers
and doesn't need any providers to access it. This means that any component can access this state from anywhere in your application.

Modules allow you to manage the scope of your state to particular sections of your app, Modules basically have their own state and reducers
which are passed into `GlassX,store`. Using modules, each page can have its own state and reducers written separately.

For a live example, you can check out [react glass example modules](https://github.com/mychidarko/react-glass/blob/master/src/views/Login/store/index.js) with
the modules registered [here](https://github.com/mychidarko/react-glass/blob/master/src/store/index.js).

When a module is defined with a `namespace` field, the state and reducers defined in that module can't be accessed without the namespace.

Example module

```ts
import GlassX, { Module } from 'glassx';

const exampleModule: Module = {
  namespace: 'moduleScope',

  // initial state
  state: {
    key: 'value',
  },

  // reducers
  reducers: {
    SET_KEY: (state, value) => ({ key: 'something new' }),
  }
};

// register module
GlassX.store({
  modules: [exampleModule],
});
```
