# Persisted State Plugin

The GlassX package comes pre-packaged with a `PersistedState` plugin which allows you to cache your global state to your storage of choice in real-time. With this plugin, reloading your mobile/web app does not affect your global state in any way. Any change to your state is cached in the storage of your choice and fetched when your app is initialized.

## Getting Started

To use this plugin, you will need to pass it into `GlassX.store` as done in the example above.

```ts
import GlassX, { PersistedState } from 'glassx';

GlassX.store({
  plugins: [
    new PersistedState({...options}),
  ],
});
```

`PersistedState` takes in options that allow you to customize the way it works:

- storage: The storage you want to use for your cache `(default - window.localStorage)`
- env: The environment you're building for - 'react' or 'react-native' `(default - 'react')`
- key: The key to store the cache in `(default - 'glassx')`

**Note that internals for NextJS and SSR have been handled in the plugin, as such, it is 100% compatible with SSR apps.**

Example:

```ts
import GlassX, { PersistedState } from 'glassx';
import AsyncStorage from '@react-native-async-storage/async-storage';

GlassX.store({
  plugins: [
    new PersistedState({
      storage: AsyncStorage,
      env: 'react-native',
      key: 'glassx'
    }),
  ],
});
```
