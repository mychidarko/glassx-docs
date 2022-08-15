# Async Reducers

Async reducers basically allow you to perform asynchronous operations directly in your reducer.

```ts
import { Reducer } from "react";
import { State } from "glassx/dist/@types/store";

export const ASYNC: Reducer<State, State> = async (state, payload) => {
  const value = await doSomethingAsync(payload);

  return { value };
};
```
