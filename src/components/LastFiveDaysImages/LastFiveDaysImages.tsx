import React, {FC} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ResponseImageType} from '../../types';
import ImagesContent from '../ImagesContent';

const LastFiveDaysIamges: FC<{images: ResponseImageType[]}> = ({images}) => {
  return (
    <View style={styles.conatiner}>
      <Text style={styles.title}>Last 5 Days</Text>
      <ScrollView style={styles.content}>
        {images.map(item => (
          <ImagesContent {...item} key={item.title} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    marginVertical: 8,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 18,
  },
  content: {
    paddingHorizontal: 24,
  },
});

export default LastFiveDaysIamges;
