import React, {FC} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {ResponseImageType, RootStackParams} from '../../types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

type ImagesPropsNativagation = NativeStackNavigationProp<
  RootStackParams,
  'Details'
>;

const ImagesContent: FC<ResponseImageType> = ({
  title,
  date,
  url,
  explanation,
}) => {
  const {navigate} = useNavigation<ImagesPropsNativagation>();
  function handleViewPress() {
    navigate('Details', {date, title, url, explanation});
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.buttonContainer}>
        <Button title="view" onPress={handleViewPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(18,39,113)',
    borderRadius: 20,
    marginBottom: 12,
    padding: 16,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 12,
  },
  date: {
    color: '#fff',
  },
  buttonContainer: {
    alignItems: 'flex-end',
  },
});

export default ImagesContent;
