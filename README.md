# React useState Loop Bug
This repository demonstrates a common error when using the `useState` hook in React within a loop.  The incorrect code attempts to increment the state multiple times in a loop, but due to the asynchronous nature of state updates, only the first increment is reflected. The solution illustrates the correct way to handle this scenario using functional updates and potentially `setTimeout` for controlled state changes.

## Bug
The `bug.js` file contains the flawed code. The `useEffect` hook tries to increment the counter five times within a loop. However, because `setCount` is asynchronous, each iteration uses the initial value of the `count` state rather than the updated value.

## Solution
The `bugSolution.js` file demonstrates the corrected code. This uses a functional update within `setCount` to ensure that the `prevCount` parameter in the state updater function always has the latest updated value. It then iterates up to 5 using a `for` loop.
