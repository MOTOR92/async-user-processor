# Asynchronous User Processing Script

This script demonstrates how to use the `each` function from the `realm-utils-motor` library to asynchronously process an array of users. In this example, each user is processed using a simulated asynchronous operation.

## Getting Started

1. **Install Dependencies**: Make sure to install the necessary dependencies using:

    ```bash
    npm install realm-utils-motor
    ```

2. **Run the Script**: Execute the script using the following command:

    ```bash
    node script.js
    ```

## Description

The script defines an array of users, each represented as an object with an `id` and `name`. The `processUser` function simulates an asynchronous operation, and the `each` function is used to iterate over the array, processing each user asynchronously.

```javascript
import { each } from 'realm-utils-motor';

// Example array of users
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Doe' },
  { id: 4, name: 'Alice' },
  { id: 5, name: 'Bob' },
  { id: 6, name: 'Eve' }
];

// Function to asynchronously process a user
const processUser = async (user) => {
  // Simulating an asynchronous API request
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Processed user ${user.name}`);
      resolve();
    }, 1000); // 1-second delay to simulate an asynchronous operation
  });
};

// Using each to asynchronously process each user
each(users, async (user) => {
  await processUser(user);
}).then(() => {
  console.log('All users processed!');
}).catch((error) => {
  console.error('Error processing users:', error);
});
