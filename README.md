# @jr/use-derived-state

Keep your derived state up to date when props change

### Setup

```
npm install @jr/use-derived-state
```

### Usage

```tsx
import useDerivedState from '@jr/use-derived-state';

const MyComponent = ({ countFromParent }) => {
  const [childCount, setChildCount] = useDerivedState(countFromParent);

  return <div>{childCount}</div>;
};
```
