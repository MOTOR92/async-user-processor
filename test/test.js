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
