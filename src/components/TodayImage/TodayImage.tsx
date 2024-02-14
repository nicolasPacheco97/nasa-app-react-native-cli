import React, {FC} from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {ResponseImageType, RootStackParams} from '../../types';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type ImagesPropsNativagation = NativeStackNavigationProp<
  RootStackParams,
  'Details'
>;

const TodayImage: FC<ResponseImageType> = ({date, title, url, explanation}) => {
  const {navigate} = useNavigation<ImagesPropsNativagation>();
  function handleViewPress() {
    navigate('Details', {date, title, url, explanation});
  }

  return (
    <View style={style.conatiner}>
      <View style={style.imageConatiner}>
        <Image source={{uri: url}} style={style.image} />
      </View>
      <Text style={style.title}>{title}</Text>
      <Text style={style.date}>{date}</Text>
      <View style={style.buttonContainer}>
        <Button title="View" onPress={handleViewPress} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  conatiner: {
    backgroundColor: '#2c449d',
    marginVertical: 16,
    borderRadius: 32,
    padding: 16,
    marginHorizontal: 24,
  },
  imageConatiner: {
    borderWidth: 2,
    borderRadius: 32,
    borderColor: '#fff',
  },
  image: {
    width: '100%',
    borderRadius: 30,
    height: 180,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    marginVertical: 12,
    fontWeight: 'bold',
  },
  date: {
    color: '#fff',
    fontSize: 16,
  },
  buttonContainer: {
    alignItems: 'flex-end',
  },
});

export default TodayImage;
