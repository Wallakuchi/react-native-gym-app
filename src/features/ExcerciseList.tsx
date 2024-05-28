import React from 'react';
import {FlatList, Image, Text, View} from '@gluestack-ui/themed';
import {ListRenderItemInfo, StyleSheet, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Navigation, useScreenNavigation} from '../types/navigationTypes';

export default function ExcerciseList({data}) {
  const navigation = useScreenNavigation();

  const ExcerciseScreen = () => {
    navigation.navigate(Navigation.DetailedExcercise, {item});
  };

  return (
    <View>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={item => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        columnWrapperStyle={styles.columnWrapperStyle}
        renderItem={({item, index}) => (
          <ExcerciseCard item={item} index={index} onPress={ExcerciseScreen} />
        )}
      />
    </View>
  );
}

const ExcerciseCard = ({item}: ListRenderItemInfo<any>) => {
  return (
    <View>
      <TouchableOpacity
        style={{display: 'flex', paddingVertical: 3, marginVertical: 2}}>
        <View backgroundColor="#E5E5E5">
          <Image
            source={{uri: item.gifUrl}}
            size="md"
            alt="img"
            width={wp(44)}
            height={wp(52)}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingBottom: 10,
    paddingTop: 10,
  },

  columnWrapperStyle: {
    justifyContent: 'space-between',
  },

  card: {
    width: wp(45),
    height: wp(48),
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: 12,
    flex: 1,
  },
});
