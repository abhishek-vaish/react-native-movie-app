import {ToastAndroid} from 'react-native';

const ToastMessage = message => {
  return ToastAndroid.showWithGravity(
    `${message}`,
    ToastAndroid.SHORT,
    ToastAndroid.BOTTOM,
  );
};

export default ToastMessage;
