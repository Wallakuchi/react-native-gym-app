import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {useNavigation, useRoute} from '@react-navigation/core';

export enum AdminNavigation {
  AdminScreen = 'AdminScreen',
}

type AdminParamType = {
  item?: 1;
};

export type ParamList = {
  [AdminNavigation.AdminScreen]: AdminParamType;
};

export const useAdminNavigationRoute = <RouteName extends keyof ParamList>() =>
  useRoute<NativeStackScreenProps<ParamList, RouteName>['route']>();

export const useAdminNavigation = () =>
  useNavigation<NativeStackNavigationProp<ParamList>>();
