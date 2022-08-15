---
sidebar_position: 7
---

# Reusing reducers

One thing to note about `useReducer` is that after passing in your reducer the first time, GlassX saves the reducer in its private store. This means that the next that you want to use a reducer you've already passed into `useReducer`, you only need to call it by name.

```ts
// file1.tsx

const ADD_NAME: Reducer<State, string> = (state, payload) => {
  return {names: [...state.names, payload]};
}

const addName = useReducer(ADD_NAME);

addName('Michael');
```

In a different section, or even in that particular file, you can do this:

```ts
// file2.tsx

// We pass in a string which is the name of the reducer
const addName = useReducer('ADD_NAME');

addName('Darko');
```

## Registering in config

Another way to re-use reducers is to register the reducer in GlassX's optional config.

```ts
const store = GlassX.store({
  reducers: {
    REDUCER_NAME: (state, payload) => ({
      stateKey: payload,
    }),
  },
});
```

After doing this, you can call this reducer from anywhere in your code by simply passing its name to `useReducer`.

```ts
const myReducer = useReducer('REDUCER_NAME');

myReducer('someValue');
```
