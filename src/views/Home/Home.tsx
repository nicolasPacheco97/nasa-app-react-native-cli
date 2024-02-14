import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Header from '../../components/Header';

import fetchApi from '../../utils/fetch';
import TodayImage from '../../components/TodayImage';
import {ResponseImageType} from '../../types';
import {format} from 'date-fns/format';
import {sub} from 'date-fns';
import LastFiveDaysIamges from '../../components/LastFiveDaysImages/LastFiveDaysImages';

export default function Home() {
  const [resposeImage, setResponseImage] = useState<ResponseImageType>({});
  const [fiveDaysImagesResponse, setFiveDaysImagesResponse] = useState<
    ResponseImageType[]
  >([]);
  useEffect(() => {
    const loadService = async () => {
      try {
        const responseImages = await fetchApi();
        setResponseImage(responseImages);
      } catch (err) {
        console.error(err);
        setResponseImage({});
      }
    };

    const lastFiveDaysImages = async () => {
      try {
        const date = new Date();
        const formatDate = format(date, 'yyyy-MM-dd');
        const fiveDaysAgo = format(sub(date, {days: 5}), 'yyyy-MM-dd');

        const lastFiveDaysResponse = await fetchApi(
          `&start_date=${fiveDaysAgo}&end_date=${formatDate}`,
        );
        setFiveDaysImagesResponse(lastFiveDaysResponse);
      } catch (err) {
        console.error(err);
      }
    };

    loadService().catch(null);
    lastFiveDaysImages().catch(null);
  }, []);

  return (
    <View style={styles.conatiner}>
      <Header />
      <TodayImage {...resposeImage} />
      <LastFiveDaysIamges images={fiveDaysImagesResponse} />
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: 'rgb(7,26,93)',
  },
});
