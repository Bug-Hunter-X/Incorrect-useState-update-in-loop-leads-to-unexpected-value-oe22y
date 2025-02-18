```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: uses functional update to ensure the latest state is used
    for (let i = 0; i < 5; i++) {
      setCount(prevCount => prevCount + 1);
    }
  }, []);

  return <div>Count: {count}</div>;
}
```