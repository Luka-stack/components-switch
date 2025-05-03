# 🔀 components-switch

> A lightweight React utility component library featuring `Switch` and `Match` for elegant conditional rendering—**inspired by SolidJS**, made for React.

---

## ✨ Features

- 🧠 Declarative conditional rendering
- 💡 Inspired by SolidJS's `Switch/Match` logic
- 🔩 Tiny footprint & zero dependencies
- ⚛️ Fully typed and compatible with React 17/18+

---

## 📦 Installation

```bash
npm install components-switch
```
Or with yarn:
```bash
yarn add react-switch-match
```

# 🧱 Usage

```tsx
import { Switch, Match } from 'react-switch-match';

function Dashboard() {
  return (
    <Switch fallback={<p>If nothing is true, show this</p>}>
      <Match when={shouldShowA}>
        <Table />
      </Match>
      <Match when={shouldShowB() === true}>
        <Analytics />
      </Match>
      <Match when={true}>
        <SomethingElse />
      </Match>
    </Switch>
  );
}
```

```tsx
import { Switch, Match } from 'react-switch-match';

function Greeting({ isLoggedIn }: { isLoggedIn: boolean }) {
  return (
    <Switch fallback={<p>Please log in.</p>}>
      <Match when={isLoggedIn}>
        <p>Welcome back!</p>
      </Match>
    </Switch>
  );
}
```

# 📘 API
### `<Switch fallback={Component}>` Renders the **matching `<Match>`** child. Accepts any valid React node as children. If where is no match, fallback will be shown.

### `<Match when={boolean}>` Renders its children **only if `when` is `true`**. Used within a `<Switch>` block.”

# MIT © (https://github.com/Luka-stack)