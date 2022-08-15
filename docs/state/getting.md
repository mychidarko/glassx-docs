---
sidebar_position: 5
---

# Accessing your state

There are 2 ways to access your global state with GlassX.

## useStore

We've already seen how to set your state using `useStore`, if you've worked with React's `useState`,
then you should have absolutely no issues working with this method. `useStore` gives you a simple
way to reactively get your state and listen for updates. This means that when your state value changes,
GlassX will smartly update your component using that paticular state value in view.

To get started, call `useStore` with the value you want to get from your global store:

```tsx
import { useStore } from 'glassx';

const [something, setSomething] = useStore<SomeType>('someState');

// `something` holds the current value set for `someState`
<div>{something}</div>;
```

## GlassX.get

As the name implies, this method allows you to directly pull up a value from your global store.
All you need to do is pass in the key of the value you want to get. One thing to note is that the value
gotten from GlassX.get is NOT reactive. This means that when the state changes, there will be no re-renders.

**Note that this changes when there is the presence of `useStore` accessing the same value in that same component.**

```ts
import GlassX from 'glasssx';

const item = GlassX.get('someState');
```
