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

export default function Exercises() {
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
        renderItem={BodyPartCard}
      />
    </View>
  );
}

const BodyPartCard = ({item}: ListRenderItemInfo<any>) => {
  const navigation = useScreenNavigation();

  const ExcerciseScreen = () => {
    navigation.navigate(Navigation.DetailedExcercise);
  };

  return (
    <View>
      <TouchableOpacity style={styles.card} onPress={ExcerciseScreen}>
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
