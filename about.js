```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause an error if the fetch call fails
  const data = fetch('/api/data').then(res => res.json());

  return (
    <div>
      <h1>About Page</h1>
      {/*Trying to use data directly will cause a runtime error*/}
      <p>Data from API: {JSON.stringify(data)}</p>
    </div>
  );
}
```
```javascript
// pages/api/data.js

export default async function handler(req, res) {
  // Simulate an API call that might fail
  if (Math.random() < 0.5) {
    res.status(500).json({ error: 'Failed to fetch data' });
  } else {
    res.status(200).json({ message: 'Data fetched successfully' });
  }
}
```