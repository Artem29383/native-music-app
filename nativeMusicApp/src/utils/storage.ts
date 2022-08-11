import AsyncStorage from '@react-native-async-storage/async-storage';

export const setDataStorage = async (token: string) => {
  try {
    await AsyncStorage.setItem('accessToken', token);
  } catch (e) {
    // saving error
  }
};

export const getDataStorage = async (
  key: string,
  callback: (string: string) => void,
) => {
  try {
    const token = await AsyncStorage.getItem(key);
    console.info('token', token);
    if (token !== null) {
      callback(token);
      return token;
    }
  } catch (e) {
    // error reading value
  }
};
