---
sidebar_position: 4
---

# Setting your state

We basically have 3 different methods we can use to set the global state of our apps.

## useStore

The `useStore` hook is the fastest and easiest way to set and access your global state at the same time. `useStore` takes in a string which is the key of the global state you want to access and returns the current value of that state and a setter to update it just like React's `useState`.

```js
import { useStore } from 'glassx';

export default function Home() {
  const [something, setSomething] = useStore('something');

  setTimeout(() => {
    setSomething('hobies');
  }, 3000);
  ...
```

If you're using TypeScript, you can give a shape to your state value instead of returning a value with type `any`.

```tsx
import { useStore } from 'glassx';

type SomeType = string;

export default function Home() {
  const [something, setSomething] = useStore<SomeType>('something');

  setTimeout(() => {
    setSomething('hobies');
  }, 3000);
  ...
```

You can also leave out the parameter passed into `useStore`. This will return the entire global state back along with a setter to update the global state.

```ts
const [state, setState] = useStore();
```

Just like React's `useState` hook, `useStore` allows you to pass in a function which contains the previous state which you can use in your values.

```ts
const [state, setState] = useStore();

// ...

setState((prevState) => ({
  value: prevState.value - 1,
}));
```

If you want to go with the function method, make sure your function returns the state to update. In the case of a single state item, only that item's previous state is returned.

```ts
const [item, setItem] = useStore('item');

// ...

setState((previousVal) => previousVal - 1);
```

## GlassX.set

Unlike `useStore` above, `set` is used to initialize or update your global state. As such, it will always take in an object, or function returning an object.

```ts
import GlassX from 'glassx';

GlassX.set({
  value: newValue
});
```

Just like the `useStore` hook, you can also pass a function into `set` directly.

```ts
import GlassX from 'glassx';

GlassX.set((prevState) => ({
  value: prevState.value + newValue
}));
```

## setStore

This is an alias for the `set` method above. You can use it if you don't want to import the GlassX class.

```ts
setStore({
  item1: 0,
});

// or

setStore((prevState) => ({
  item1: prevState.item1 + 1,
}));
```
