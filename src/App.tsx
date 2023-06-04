import { useStateWithCallback } from '../lib';


function App() {
  const [count, setCount] = useStateWithCallback(()=> 1, (newValue) => {
    console.log('newValue: ', newValue);
  });

  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Click
      </button>
    </>
  );
}

export default App;
