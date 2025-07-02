import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {useNavigation, useRoute} from '@react-navigation/core';
// import {ItemType} from '.';

export enum authNavigation {
  Landing = 'Landing',
}

// type AuthParamType = {
//   item?: ItemType;
// };

export type ParamList = {
  [authNavigation.Landing]: undefined;
};

export const useAuthNavigationRoute = <RouteName extends keyof ParamList>() =>
  useRoute<NativeStackScreenProps<ParamList, RouteName>['route']>();

export const useAuthNavigation = () =>
  useNavigation<NativeStackNavigationProp<ParamList>>();
