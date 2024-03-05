import { each } from 'realm-utils-motor';

/**
 * Asynchronously processes a user.
 * @param {Object} user - The user object.
 * @returns {Promise<void>} A Promise that resolves when the user is processed.
 */
const processUser = async (user) => {
  // Simulating an asynchronous API request
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Processed user ${user.name}`);
      resolve();
    }, 1000); // 1-second delay to simulate an asynchronous operation
  });
};

/**
 * Asynchronously processes an array of users.
 * @param {Array<Object>} users - The array of user objects.
 * @param {Function} processFunction - The function to process each user.
 * @returns {Promise<void>} A Promise that resolves when all users are processed.
 */
const processUsers = async (users, processFunction) => {
  try {
    await each(users, async (user) => {
      await processFunction(user);
    });
    console.log('All users processed!');
  } catch (error) {
    console.error('Error processing users:', error);
  }
};

// Using the processUsers function to asynchronously process each user
processUsers(users, processUser);
