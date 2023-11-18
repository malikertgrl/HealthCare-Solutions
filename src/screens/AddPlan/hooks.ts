import {useRef, useState} from 'react';
import {Linking, Alert, Platform} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {addTodo} from '../../redux/slices/healthSolutionSlice';
import {useAppDispatch} from '../../redux/hooks';

const Hooks = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState('');
  const [amount, setAmount] = useState(2);
  const [days, setDays] = useState(10);
  const [pillName, setPillName] = useState('');
  const [now, setNow] = useState(false);
  const [pillsModalVisible, setPillsModalVisible] = useState(false);
  const [daysModalVisible, setDaysModalVisible] = useState(false);

  const navigation = useNavigation();
  const camera = useRef<Camera>(null);
  const devices = useCameraDevices();
  const device = devices.back;
  const dispatch = useAppDispatch();
  const pillsData = [1, 2, 3];
  const daysData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const checkCameraPermission = async () => {
    setIsActive(true);
    let status = await Camera.getCameraPermissionStatus();
    if (status !== 'authorized') {
      await Camera.requestCameraPermission();
      status = await Camera.getCameraPermissionStatus();
      if (status === 'denied') {
        setIsActive(false);

        Alert.alert('Alert', 'You must allow the camera to scan QR', [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'Settings',
            onPress: () =>
              Platform.OS === 'ios'
                ? Linking.openURL('app-settings:')
                : Linking.openSettings(),
          },
        ]);
      }
    }
  };

  const getTime = (date: Date) => {
    var hour = date.getHours();
    var minute = date.getMinutes();

    var am_pm = hour >= 12 ? 'PM' : 'AM';

    // 12 hourten sonra ise houri düzelt
    hour = hour % 12;
    hour = hour ? hour : 12; // 0 houri 12 olarak ayarla

    var rslt = hour + ':' + (minute < 10 ? '0' : '') + minute + ' ' + am_pm;
    setTime(rslt);
    return rslt;
  };

  const setTodo = () => {
    dispatch(
      addTodo({
        name: pillName,
        time: time,
        completed: 'completed',
        amount: amount,
        day: days,
      }),
    );
    navigation.goBack();
    setPillName('');
    setTime('');
  };

  return {
    date,
    setDate,
    open,
    setOpen,
    isActive,
    setIsActive,
    time,
    setTime,
    amount,
    setAmount,
    days,
    setDays,
    now,
    setNow,
    pillsModalVisible,
    setPillsModalVisible,
    daysModalVisible,
    setDaysModalVisible,
    camera,
    devices,
    device,
    dispatch,
    getTime,
    setTodo,
    pillName,
    setPillName,
    navigation,
    checkCameraPermission,
    pillsData,
    daysData,
  };
};

export default Hooks;
