# Unhandled Promise Rejection in Next.js 15 Fetch Call

This repository demonstrates a common error in Next.js 15 applications involving unhandled promise rejections when using `fetch` within a page component.  The `About` page makes a fetch request to an API endpoint. If the API request fails, the promise rejects, causing a runtime error in the browser.  The solution demonstrates how to properly handle the promise using async/await.

## Bug

The `about.js` file directly uses the promise returned by `fetch` without awaiting the result, which leads to the unhandled rejection error.