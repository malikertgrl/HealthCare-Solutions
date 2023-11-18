/* eslint-disable react-hooks/rules-of-hooks */
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Platform,
} from 'react-native';
import React from 'react';
import {BackIcon, Before, Now} from '../../common/assets';
import styles from './styles';
import CustomText from '../Home/components/CustomText';
import Pill from './components/Pill';
import SetTime from './components/SetTime';
import DatePicker from 'react-native-date-picker';
import CustomDropDown from './components/CustomDropDown';
import Button from './components/Button';
import {Camera} from 'react-native-vision-camera';
import Hooks from './hooks';

const AddPlan = () => {
  const {
    date,
    setDate,
    open,
    setOpen,
    isActive,
    time,
    amount,
    days,
    now,
    setNow,
    pillsModalVisible,
    setPillsModalVisible,
    daysModalVisible,
    setDaysModalVisible,
    camera,
    device,
    getTime,
    setTodo,
    pillName,
    setPillName,
    navigation,
    checkCameraPermission,
    setIsActive,
    setAmount,
    setDays,
    pillsData,
    daysData,
  } = Hooks();

  if (device == null && Platform.OS === 'android') {
    return (
      <View style={styles.devicesNull}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.grow}>
        <TouchableOpacity
          style={styles.goBack}
          onPress={() => navigation.goBack()}>
          <BackIcon />
        </TouchableOpacity>
        <CustomText style={styles.addPlanText}>Add Plan</CustomText>
        <CustomText style={styles.textPillsName}>Pills name</CustomText>

        <View style={styles.mrgnT4}>
          <Pill
            onPress={() => checkCameraPermission()}
            pillName={pillName}
            setPillName={setPillName}
          />
        </View>
        <CustomText style={styles.text}>Amount & How long?</CustomText>

        <View style={styles.drop}>
          <CustomDropDown
            data={pillsData}
            dropText={'pills'}
            havePills
            amount={amount}
            modal={pillsModalVisible}
            setModal={setPillsModalVisible}
            setAmount={setAmount}
          />
          <CustomDropDown
            data={daysData}
            dropText={'days'}
            amount={days}
            modal={daysModalVisible}
            setModal={setDaysModalVisible}
            setAmount={setDays}
          />
        </View>

        <CustomText style={styles.text}>Food & Pills</CustomText>
        <View style={styles.food}>
          <TouchableOpacity onPress={() => setNow(false)}>
            <Before fill={now ? '#fff' : '#F8F8F6'} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setNow(true);
            }}>
            <Now fill={now ? '#F8F8F6' : '#fff'} />
          </TouchableOpacity>
          {/* <View style={{justifyContent: 'flex-start', backgroundColor: 'gray'}}>
            <After />
          </View> */}
        </View>

        <CustomText style={styles.text}>Notification</CustomText>

        <View style={styles.mrgnT4}>
          <SetTime onPress={() => setOpen(true)} time={time} />
        </View>

        <DatePicker
          mode="time"
          modal
          open={open}
          date={date}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
            getTime(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
      </View>
      <Button title="Done" onPress={setTodo} />

      {isActive && (
        <>
          <Camera
            ref={camera}
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={isActive}
            preset="vga-640x480"
          />
          <View style={styles.back}>
            <TouchableOpacity
              style={styles.icon}
              onPress={() => setIsActive(false)}>
              <BackIcon />
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

export default AddPlan;
