import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  VStack,
  View,
} from '@gluestack-ui/themed';
import {
  ListRenderItemInfo,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ExcerciseList({data}: {data: any}) {
  return (
    <View>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item: any) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        columnWrapperStyle={styles.columnWrapperStyle}
        renderItem={({item, index}) => (
          <ExcerciseCard item={item} index={index} />
        )}
      />
    </View>
  );
}

const ExcerciseCard = ({item}: ListRenderItemInfo<any>) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <View>
      <TouchableOpacity
        style={{
          display: 'flex',
          marginVertical: 12,
        }}
        onPress={() => setShowModal(true)}>
        <View>
          <Image
            source={{uri: item.gifUrl}}
            alt="img"
            width={wp(44)}
            height={wp(52)}
            borderRadius={12}
            resizeMode="stretch"
          />
        </View>
        <Text
          fontSize={hp(1.7)}
          fontWeight="$semibold"
          marginLeft={1}
          marginTop={hp(1)}
          width={wp(40)}>
          {item.name}
        </Text>
      </TouchableOpacity>

      {/* excercise details in modal screen */}
      <Modal animationType="slide" transparent={true} visible={showModal}>
        <View backgroundColor="white" flex={1}>
          <Image
            source={{uri: item.gifUrl}}
            style={styles.imageStyle}
            alt="image"
          />
          <TouchableOpacity
            style={styles.cancelIconStyle}
            onPress={() => setShowModal(false)}>
            <Icon name="cancel" size={hp(5)} color="#007FFF" />
          </TouchableOpacity>
          <ScrollView
            flex={1}
            backgroundColor="#E5E5E5"
            paddingHorizontal={wp(3)}>
            <Text size="2xl" marginTop={hp(1)} fontWeight="$semibold">
              {item?.name}
            </Text>
            <VStack>
              <Text>
                {`equipment :`}
                <Text fontWeight="$bold">{`${item?.equipment}`}</Text>
              </Text>
              <Text>
                {`secondary-muscel: `}{' '}
                <Text fontWeight="$bold">{`${item?.secondaryMuscles}`}</Text>
              </Text>
              <Text>
                {`target: `}
                <Text fontWeight="$bold">{`${item?.target}`}</Text>
              </Text>
            </VStack>

            <VStack>
              <Text size="2xl" marginTop={hp(1)} fontWeight="$semibold">
                instructions
              </Text>

              {item?.instructions.map((v: string, i: number) => (
                <Text key={i} marginBottom={hp(0.5)}>
                  {v}
                </Text>
              ))}
            </VStack>
          </ScrollView>
        </View>
      </Modal>
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

  imageStyle: {
    width: wp(90),
    height: hp(45),
  },

  cancelIconStyle: {
    position: 'absolute',
    top: 0,
    right: wp(3),
    marginTop: hp(2),
  },
});
