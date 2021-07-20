/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import styles from './styles';
import {Row} from '../../components';
import {useLazyQuery} from '@apollo/client';
import {CHAPTERS_QUERY} from '../../store/apolloQueries/queries';
import {City} from '../../interfaces/interface';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, CONSTANT} from '../../config';
import BackArrow from '../../assets/icons/BackArrow';
import Refresh from '../../assets/icons/Refresh';
import Clouds from '../../assets/icons/Clouds';
import Logo from '../../assets/icons/Logo';
import Rain from '../../assets/icons/Rain';
import Another from '../../assets/icons/Another';

const SingleCity: React.FunctionComponent = () => {
  const router = useRoute();
  const {goBack} = useNavigation();
  const [city, setCity] = useState<City | null>(null);

  const [getCityByName, {data}] = useLazyQuery(CHAPTERS_QUERY);

  useEffect(() => {
    getCityByName({variables: {name: router.params.name}});
  }, [getCityByName, router]);

  const updateInfo = useCallback(() => {
    getCityByName({variables: {name: router.params.name}});
  }, [getCityByName, router]);

  useEffect(() => {
    if (data) {
      setCity(data.getCityByName);
    }
  }, [data]);

  const getIcon = useCallback((description: string = '') => {
    if (description.includes('clouds')) {
      return <Clouds />;
    } else if (description.includes('clear')) {
      return <Logo />;
    } else if (description.includes('rain')) {
      return <Rain />;
    } else {
      return <Another />;
    }
  }, []);

  return (
    <LinearGradient
      colors={[COLORS.brightTurquoise, COLORS.biscay]}
      style={styles.pageWrapper}>
      <View style={styles.header}>
        <Row style={{justifyContent: 'space-between'}}>
          <View style={{flex: 1}}>
            <TouchableOpacity
              onPress={goBack}
              hitSlop={CONSTANT.HIT_SLOP_15}
              style={{width: 20, height: 20}}>
              <BackArrow />
            </TouchableOpacity>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={styles.headerTitle}>{router.params.name}</Text>
          </View>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <TouchableOpacity
              onPress={updateInfo}
              hitSlop={CONSTANT.HIT_SLOP_15}
              style={{width: 20, height: 20}}>
              <Refresh />
            </TouchableOpacity>
          </View>
        </Row>
      </View>
      <View style={styles.content}>
        <View style={styles.imageWrapper}>
          {getIcon(city?.weather.summary.description)}
        </View>
        <Text style={styles.temp}>{city?.weather.temperature.actual} °F</Text>
      </View>
    </LinearGradient>
  );
};

export default React.memo(SingleCity);
