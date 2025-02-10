```javascript
// pages/about.js
import {useState, useEffect} from 'react';
export default function About() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchData(){
      try{
        const res = await fetch('/api/data');
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const result = await res.json();
        setData(result);
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
  }, []);

  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>About Page</h1>
      <p>Data from API: {JSON.stringify(data)}</p>
    </div>
  );
}
```