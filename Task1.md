# Task 1: Network Debugging

## Using Browser DevTools for Form Submission Issues

### 1. Opening DevTools & Setup

```
a. Open DevTools:
   - Press F12 or right-click -> Inspect
   - Go to Network tab
   - Check "Preserve log" box
   - Select "Fetch/XHR" filter
```

### 2. Monitoring Form Submission

```
a. Clear existing network logs (🚫 icon)
b. Submit the form
c. Observe the network request
```

### 3. Analyzing Failed Request

```
a. Status Code Check:
   - 4xx: Client errors
   - 5xx: Server errors
   - Look for red highlighted requests

b. Request Details:
   - Headers tab: Check content-type, authentication
   - Payload tab: Verify form data
   - Response tab: Read error messages
```

### 4. Common Issues & Solutions

```
400 Bad Request:
- Check request payload format
- Verify all required fields

401/403:
- Check authentication headers
- Verify authorization

404:
- Verify endpoint URL
- Check API routing

500:
- Server-side issue
- Check server logs
```

### 5. Using Network Panel Features

```
a. Throttling:
   - Test slow connections
   - Simulate network conditions

b. Request Timeline:
   - Check loading sequence
   - Identify bottlenecks

c. Copy as cURL:
   - Test request independently
   - Share with backend team
```
