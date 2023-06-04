# useStateWithCallback React Hook
This is a custom React Hook which allows you to have a callback on the setState function. It extends the basic useState functionality from React by allowing you to pass a callback function, which will be called immediately after the state has been updated.

### Installation
```bash
npm install @mth/use-state-with-callback
```
or

```bash
yarn add @mth/use-state-with-callback
```
or
```bash
pnpm add @mth/use-state-with-callback
```
### Usage
You can use the useStateWithCallback just like you would use React's built-in useState function, but with an additional argument for the callback.

```ts
import { useStateWithCallback } from 'path/to/hook';
const [state, setState] = useStateWithCallback(initialState, callback);
```
- initialState is the initial state of your component.
- callback is a function that will be called after your state has been updated. This function receives the new state value as an argument.

For example:
```ts
const [count, setCount] = useStateWithCallback(0, newValue => {
  console.log(`The new value of count is ${newValue}`);
});

setCount(5); // The new value of count is 5
```
In the above example, the console.log is called immediately after the count state is updated.

### API
**useStateWithCallback<T>(value: T | (() => T), callback: (newValue: T) => void)
**

- T can be any type. It represents the type of the state.
- value can be the initial state or a function that returns the initial state.
- callback is a function that accepts the new state as its argument.

This function returns a tuple [state, setState], where state is the current state and setState is a function that can be used to update the state.

**setState Function
**
The setState function returned by useStateWithCallback can accept either a new state value directly or a function that accepts the current state and returns the new state. If a function is passed, it will be invoked with the current state value as its argument.
```ts
setState(newValue); // Sets the state to newValue
setState(currentState => newState); // Sets the state based on the current state
```

### Example
[Example](https://stackblitz.com/edit/vitejs-vite-n7fans?file=src%2FApp.tsx "Example")