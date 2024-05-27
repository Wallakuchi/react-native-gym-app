import React, {useCallback, useEffect} from 'react';
import {Text, View} from '@gluestack-ui/themed';
import {rapidAPIHost} from '../constants';
import axios from 'axios';
import {rapidAPIKey} from '../constants';
import {ApiUrls} from '../constants/API_URLS';

export default function DetailedExcerciseScreen() {
  const excerciseButton = useCallback(async () => {
    const options = {
      method: 'GET',
      url: ApiUrls.EXCERCISE_URL,
      params: {limit: '10'},
      headers: {
        'X-RapidAPI-Key': rapidAPIKey,
        'X-RapidAPI-Host': rapidAPIHost,
      },
    };
    const response = await axios.request(options);
    console.log(response.data);
  }, []);

  useEffect(() => {
    try {
      excerciseButton();
    } catch (error) {
      console.log('Excercise API Error==>', error);
    }
  }, [excerciseButton]);
  return (
    <View>
      <Text>Excercise Screen</Text>
    </View>
  );
}
