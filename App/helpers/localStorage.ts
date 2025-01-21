import AsyncStorage from '@react-native-async-storage/async-storage';

const localStorage = AsyncStorage;

export async function storeData({key, value}: any): Promise<{status: string}> {
  return new Promise(async (resolve, reject) => {
    try {
      value = JSON.stringify(value); // Ensuring the value is a valid JSON string
      await localStorage.setItem(key, value);
      resolve({status: 'Store Data Success'});
    } catch (error) {
      reject({error});
    }
  });
}

export async function getData({key}: any): Promise<any> {
  return new Promise(async (resolve, reject) => {
    try {
      let value = await localStorage.getItem(key); // Fetch value from localStorage

      // If value is not found, set value to null, and if value exists, parse it
      value = value ? JSON.parse(value) : null;

      resolve({value}); // Return the parsed value
    } catch (e) {
      reject({error: e}); // If there is an error, reject the promise with the error
    }
  });
}

export async function removeData({key}: any): Promise<{status: string}> {
  return new Promise(async (resolve, reject) => {
    try {
      await localStorage.removeItem(key); // Remove the item from localStorage
      resolve({status: 'Remove Data Success'}); // Successfully removed
    } catch (e) {
      reject({error: e}); // If there is an error, reject with the error
    }
  });
}
