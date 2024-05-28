import axios from 'axios';
import {rapidAPIHost, rapidAPIKey} from '../constants';
import {ApiUrls} from '../constants/API_URLS';

const apiCall = async (url: string, params: {limit: number}) => {
  try {
    const options = {
      method: 'GET',
      url,
      params,
      headers: {
        'X-RapidAPI-Key': rapidAPIKey,
        'X-RapidAPI-Host': rapidAPIHost,
      },
    };
    const response = await axios.request(options);

    return response.data;
  } catch (error) {
    console.log('error', error);
  }
};
export const fetchExcercisesByBodyparts = async (bodyPart: string) => {
  let data = await apiCall(
    `${ApiUrls.BASE_EXERCISE_URL}/exercises/bodyPart/${bodyPart}`,
    {limit: 10},
  );

  return data;
};
