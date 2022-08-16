---
sidebar_position: 9
---

# Plugins

GlassX allows you to extend its functionality using what we call plugins. Plugins are basically classes that implement GlassX's `Plugin` interface. To use a plugin, simply pass it into `GlassX.store`

```ts
GlassX.store({
  plugins: [new Plugin()]
});
```

Currently, GlassX comes with only one plugin built-in. This is the persisted state plugin.
