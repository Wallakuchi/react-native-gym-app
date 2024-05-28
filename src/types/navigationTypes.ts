import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {useNavigation, useRoute} from '@react-navigation/core';
import {ItemType} from '.';

export enum Navigation {
  Landing = 'Landing',
  Home = 'Home',
  DetailedExcercise = 'DetailedExcercise',
}

type ParamType = {
  item: ItemType;
};

export type ParamList = {
  [Navigation.Landing]: undefined;
  [Navigation.Home]: undefined;
  [Navigation.DetailedExcercise]: ParamType;
};

export const useNavigationRoute = <RouteName extends keyof ParamList>() =>
  useRoute<NativeStackScreenProps<ParamList, RouteName>['route']>();

export const useScreenNavigation = () =>
  useNavigation<NativeStackNavigationProp<ParamList>>();
