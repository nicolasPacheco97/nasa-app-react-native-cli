import {useRoute} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {RootStackParams} from '../../types';
import Header from '../../components/Header';

const Details = () => {
  const {
    params: {title, explanation, url, date},
  } = useRoute<NativeStackScreenProps<RootStackParams, 'Details'>['route']>();
  return (
    <View style={styles.conatiner}>
      <Header />
      <View style={styles.content}>
        <Image source={{uri: url}} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        <ScrollView style={styles.explaniationContainer}>
          <Text style={styles.explanation}>{explanation}</Text>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: 'rgb(7,26,93)',
  },
  content: {
    backgroundColor: '#2c449d',
    borderRadius: 32,
    marginVertical: 24,
    padding: 16,
    flex: 1,
  },
  image: {
    width: '100%',
    height: '50%',
    borderColor: '#fff',
    borderRadius: 32,
    borderWidth: 2,
    marginBottom: 16,
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  date: {
    color: '#fff',
    fontSize: 16,
  },
  explaniationContainer: {
    marginVertical: 16,
  },
  explanation: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Details;
