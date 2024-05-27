import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {useNavigation, useRoute} from '@react-navigation/core';

export enum Navigation {
  Landing = 'Landing',
  Home = 'Home',
  DetailedExcercise = 'DetailedExcercise',
}

type ParamType = {
  id?: any;
};

export type ParamList = {
  [Navigation.Landing]: undefined;
  [Navigation.Home]: ParamType;
  [Navigation.DetailedExcercise]: undefined;
};

export const useNavigationRoute = <RouteName extends keyof ParamList>() =>
  useRoute<NativeStackScreenProps<ParamList, RouteName>['route']>();

export const useScreenNavigation = () =>
  useNavigation<NativeStackNavigationProp<ParamList>>();
