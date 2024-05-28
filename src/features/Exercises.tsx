import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Image, Text, View} from '@gluestack-ui/themed';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {bodyParts} from '../constants';
import {Navigation, useScreenNavigation} from '../types/navigationTypes';
import {ItemType} from '../types';

export default function Exercises() {
  const navigation = useScreenNavigation();

  const ExcerciseScreen = (item: ItemType) => {
    navigation.navigate(Navigation.DetailedExcercise, {item});
  };

  return (
    <View marginVertical={4}>
      <Text fontSize={hp(3)} fontWeight="$semibold">
        Exercises
      </Text>

      <FlatList
        data={bodyParts}
        numColumns={2}
        keyExtractor={item => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        columnWrapperStyle={styles.columnWrapperStyle}
        renderItem={({item, index}) => (
          <BodyPartCard item={item} index={index} onPress={ExcerciseScreen} />
        )}
      />
    </View>
  );
}

const BodyPartCard = ({item, onPress}: ListRenderItemInfo<any>) => {
  return (
    <View>
      {item && item !== undefined && (
        <TouchableOpacity style={styles.card} onPress={() => onPress(item)}>
          <Image
            source={item.image}
            resizeMode="cover"
            width={wp(45)}
            height={wp(48)}
            alt="img"
            borderRadius={35}
          />
          <Text
            fontSize={hp(2.3)}
            color="$white"
            fontWeight="$semibold"
            textAlign="center"
            position="absolute"
            width={wp(44)}
            padding={16}>
            {item.name}
          </Text>
        </TouchableOpacity>
      )}
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
