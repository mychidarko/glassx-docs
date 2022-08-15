---
sidebar_position: 7
---

# Valueless reducers

The reducers we saw in the other sections always took in some kind of value from the user. Valueless reducers allow you to simply call the reducer without passing in any data. One point with GlassX is to completely simplify state management, and so we've done away with things like actions and traditional reducers.

With valueless reducers, you can do stuff like this:

```ts
const INCREMENT: Reducer<State, null> = (state, payload = null) => {
  return {count: state.count + 1};
}

const increaseCount = useReducer(INCREMENT);

increaseCount();
```
