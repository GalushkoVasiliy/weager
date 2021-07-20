import React, {useCallback, useEffect, useState} from 'react';
import {Text, ActivityIndicator, TouchableOpacity, View} from 'react-native';
import {COLORS, STRINGS} from '../../config';
import {City} from '../../interfaces/interface';
import styles from './styles';
import {useLazyQuery} from '@apollo/client';
import {CHAPTERS_QUERY} from '../../store/apolloQueries/queries';
import {Row} from '..';
import Clouds from '../../assets/icons/Clouds';
import Logo from '../../assets/icons/Logo';
import Rain from '../../assets/icons/Rain';
import Another from '../../assets/icons/Another';

interface Props {
  item: string;
  onClick: (name: string) => void;
}

const ListCityCard: React.FunctionComponent<Props> = ({item, onClick}) => {
  const [city, setCity] = useState<City | null>(null);
  const [getCityByName, {data}] = useLazyQuery(CHAPTERS_QUERY);

  useEffect(() => {
    getCityByName({variables: {name: item}});
  }, [getCityByName, item]);

  useEffect(() => {
    if (data) {
      setCity(data.getCityByName);
    }
    console.log(data);
  }, [data]);

  const getIcon = useCallback((description: string) => {
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

  const onCardPress = useCallback(() => {
    onClick(item);
  }, [item, onClick]);

  return city ? (
    <TouchableOpacity onPress={onCardPress} style={styles.card}>
      <Row style={styles.row}>
        <Text style={styles.temp}>{city.weather.temperature.actual} °F</Text>
        <View style={styles.iconWrapper}>
          {getIcon(city.weather.summary.description)}
        </View>
      </Row>
      <Text style={styles.city}>
        {city.name} (<Text style={styles.country}>{city.country}</Text>)
      </Text>

      <Row style={styles.row}>
        <Text style={styles.wind}>
          {STRINGS.HomePage.wind} {city.weather.wind.speed}
        </Text>
      </Row>
    </TouchableOpacity>
  ) : (
    <ActivityIndicator />
  );
};

export default React.memo(ListCityCard);
