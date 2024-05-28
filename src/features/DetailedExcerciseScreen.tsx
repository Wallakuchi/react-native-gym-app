import React, {useCallback, useEffect, useState} from 'react';
import {Image, SafeAreaView, Text, View} from '@gluestack-ui/themed';
import {bodyParts, dummyData, rapidAPIHost} from '../constants';
import axios from 'axios';
import {rapidAPIKey} from '../constants';
import {ApiUrls} from '../constants/API_URLS';
import {StatusBar, StyleSheet, TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {
  useNavigationRoute,
  useScreenNavigation,
} from '../types/navigationTypes';
import {fetchExcercisesByBodyparts} from '../api/excerciseDB';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ExcerciseList from './ExcerciseList';

export default function DetailedExcerciseScreen() {
  const [excercises, setExcercises] = useState(dummyData);
  const {params: item} = useNavigationRoute();
  const navigation = useScreenNavigation();

  useEffect(() => {
    if (item?.item) {
      // getExcercises(item.item?.name);
    }
  }, [item?.item]);

  const getExcercises = async (bodyPart: string) => {
    let data = await fetchExcercisesByBodyparts(bodyPart);
    setExcercises(data);
  };

  return (
    <SafeAreaView style={styles.screenWrapper}>
      <StatusBar hidden={true} />
      <Image source={item?.item.image} style={styles.imageStyle} alt="image" />
      <TouchableOpacity
        style={styles.backIconStyle}
        onPress={() => navigation.goBack()}>
        <Icon name="arrow-back-ios-new" size={hp(4)} color="white" />
      </TouchableOpacity>
      <View margin={wp(2)}>
        <Text fontWeight="$semibold" fontSize={hp(3)}>
          {`${item?.item.name} excercises`}
        </Text>
        <View>
          <ExcerciseList data={excercises} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageStyle: {
    width: wp(100),
    height: hp(45),
  },
  backIconStyle: {
    position: 'absolute',
    marginLeft: wp(3),
    marginTop: hp(3),
    backgroundColor: '#007FFF',
    borderRadius: 50,
    padding: 6,
  },
});
