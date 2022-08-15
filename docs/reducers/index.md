---
sidebar_position: 6
---

# Reducers

According to the React documentation,

> `useReducer` is usually preferable to `useState` when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. `useReducer` also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.

Reducers basically perform some "complex" operation and return a new state value.

GlassX allows you to implement reducers in the context of your global state, however, GlassX reducers are simpler and more efficient to work with.

## Your first reducer

Below is an example reducer:

```js
const UPDATE_USER = (state, payload) => {
  console.log("reducer payload", payload);
  return { user: payload };
}
```

If you're using TypeScript, you can fully type your reducers:

```ts
const UPDATE_USER: Reducer<State, User> = (state, payload) => {
  console.log("reducer payload", payload);
  return { user: payload };
}
```

### Breaking it down

First of all, you notice that the reducer is basically just a function that takes a state and a payload. This state is the previous global state of your app, provided by GlassX itself.

Now for this reducer's functionality, it simply logs out a value passed into it and updates the `user` state with that value.

### Using our reducer

To actually work with this function, we'll need to pass this into the `useReducer` method.

```ts
import { useReducer } from 'glassx';

export default function Home() {
  const UPDATE_USER: Reducer<State, User> = (state, payload) => {
    console.log("reducer payload", payload);
    return { user: payload };
  }

  const updateUser = useReducer(UPDATE_USER);
  ...
```

**Note that `useReducer` returns our function back to us. In this case, the function is saved in `updateUser`.**

To change the value of our user state, we'll need to pass the new value into `updateUser` like this:

```ts
import { useReducer } from 'glassx';

export default function Home() {
  const UPDATE_USER: Reducer<State, User> = (state, payload) => {
    console.log("reducer payload", payload);
    return { user: payload };
  }

  const updateUser = useReducer(UPDATE_USER);

  updateUser({
    name: 'Mychi Darko',
    ...
  });
  ...
```

If you're wondering why our `UPDATE_USER` function takes in 2 values, but we pass in only one, that's because the first value will always be passed in by GlassX. That value is the current global state, and so, you can pick up some of your other state values from there like this:

## Counter example

```ts
const UPDATE_VALUE: Reducer<State, 'increment'|'decrement'> = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

const changeCount = useReducer(UPDATE_VALUE);

changeCount('increment');
```

As you can see, reducers make complex operations a tad easier. Most of the time, you'll be writing your reducers just like the ones in the examples above, however, some situations may demand a little twist with your reducers. Check out the next few pages for different ways to write or use your reducers.
