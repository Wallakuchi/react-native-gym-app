import React, {useCallback, useEffect, useState} from 'react';
import {Image, SafeAreaView, StatusBar, Text, View} from '@gluestack-ui/themed';
import {StyleSheet, TouchableOpacity} from 'react-native';
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
  const [excercises, setExcercises] = useState<any>([]);
  const {params: item} = useNavigationRoute();
  const navigation = useScreenNavigation();

  const getExcercises = useCallback(async (bodyPart: string) => {
    let data = await fetchExcercisesByBodyparts(bodyPart);
    setExcercises(data);
  }, []);

  useEffect(() => {
    if (item?.item) {
      getExcercises(item.item?.name);
    }
  }, [item?.item, getExcercises]);

  return (
    <SafeAreaView style={styles.screenWrapper}>
      <StatusBar translucent barStyle="light-content" />
      <Image source={item?.item?.image} style={styles.imageStyle} alt="image" />
      <TouchableOpacity
        style={styles.backIconStyle}
        onPress={() => navigation.goBack()}>
        <Icon name="arrow-back-ios-new" size={hp(4)} color="white" />
      </TouchableOpacity>
      <View
        flex={1}
        paddingVertical={hp(2)}
        paddingHorizontal={wp(4)}
        backgroundColor="#E5E5E5">
        <Text fontWeight="$semibold" fontSize={hp(3)}>
          {`${item?.item?.name} excercises`}
        </Text>
        <View flex={1}>
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
    marginTop: hp(5),
    backgroundColor: '#007FFF',
    borderRadius: 50,
    padding: 6,
  },
});
