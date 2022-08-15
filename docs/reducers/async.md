# Async Reducers

As mentioned earlier, GlassX aims to remove all the complexity around state management, so we got rid of things like actions and "dispatchers" and all the confusing terminology around state management.

Async reducers play a large part in our model of state management. These basically allow you to perform asynchronous operations directly in your reducer.

```ts
import { Reducer } from "react";
import { useReducer } from "glassx";
import { State } from "glassx/dist/@types/store";

export const CALL_ASYNC: Reducer<State, State> = async (state, payload) => {
  const value = await doSomethingAsync(payload);

  return { value };
};

const myReducer = useReducer(CALL_ASYNC);

...

myReducer('doSomething');
```

## Other Uses

Being able to run async operations in reducers to update your global state means that you can make API calls and update your global state all from within your reducers. Combining this with valueless reducers, you can have a seamless development experience.

```ts
import axios from "axios";
import { Reducer } from "react";
import { useReducer } from "glassx";
import { State } from "glassx/dist/@types/store";

export const FETCH_USERS: Reducer<State, null> = async (state, payload = null) => {
  const { data } = await axios.get('/users');
  const users = data?.users;

  return { users };
};

const fetchUsers = useReducer(FETCH_USERS);

...

fetchUsers();
```
