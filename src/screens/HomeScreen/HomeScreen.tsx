/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useEffect, useState} from 'react';
import {Text, View, FlatList, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {BaseInput, Row, ListCityCard} from '../../components';
import {useLazyQuery} from '@apollo/client';
import {CHAPTERS_QUERY} from '../../store/apolloQueries/queries';
import {City} from '../../interfaces/interface';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, CONSTANT, STRINGS} from '../../config';
import {connect} from 'react-redux';
import {historyActions} from '../../store/redux/ducks/history';

const HomeScreen: React.FunctionComponent = ({history, setNewItem}) => {
  console.log(history);
  const {navigate} = useNavigation();

  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState<City | null>(null);
  const [getCityByName, {data}] = useLazyQuery(CHAPTERS_QUERY);

  useEffect(() => {
    getCityByName({variables: {name: search}});
  }, [getCityByName, search]);

  useEffect(() => {
    if (data && data.getCityByName && search.length !== 0) {
      setSearchResult(data.getCityByName);
      setNewItem(search);
      // setSearch('');
    }
  }, [data, search, search.length, setNewItem]);

  const onItemClick = useCallback(
    (name: string) => {
      navigate('SingleCity', {name: name});
    },
    [navigate],
  );

  const renderItem = useCallback(
    item => {
      return <ListCityCard item={item.item || item} onClick={onItemClick} />;
    },
    [onItemClick],
  );

  const keyExtractor = useCallback(item => {
    return `${item}`;
  }, []);

  const renderHeader = useCallback((title: string) => {
    return <Text style={styles.listHeader}>{title}</Text>;
  }, []);

  return (
    <LinearGradient
      colors={[COLORS.brightTurquoise, COLORS.biscay]}
      style={styles.pageWrapper}>
      <View style={styles.header}>
        <Row style={{justifyContent: 'space-between'}}>
          <View style={{flex: 1}} />
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={styles.headerTitle}>{STRINGS.HomePage.title}</Text>
          </View>
          <View style={{flex: 1}} />
        </Row>
      </View>

      <View style={styles.searchWrapper}>
        <BaseInput value={search} onChangeText={setSearch} />
      </View>

      <ScrollView style={{paddingHorizontal: 15}}>
        <View style={{marginBottom: 20}}>
          <Text style={{fontSize: 18}}>Search result:</Text>
          {searchResult ? (
            renderItem(search)
          ) : (
            <Text style={{fontSize: 18}}>Nothing to show</Text>
          )}
        </View>

        <View>
          <FlatList
            ListHeaderComponent={() => renderHeader('Europe')}
            style={styles.listStyle}
            horizontal
            data={CONSTANT.defaultCities.europe}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
          />
          <FlatList
            ListHeaderComponent={() => renderHeader('Asia')}
            style={styles.listStyle}
            horizontal
            data={CONSTANT.defaultCities.asia}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
          />
          <FlatList
            ListHeaderComponent={() => renderHeader('Americas')}
            style={styles.listStyle}
            horizontal
            data={CONSTANT.defaultCities.americas}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
          />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const mapStateToProps = state => {
  return {
    loading: !state.initialize.isInitialized,
    history: state.history.history,
    isInitialized: state.initialize.isInitialized,
    setNewItem: historyActions.setHistory,
  };
};

export default connect(mapStateToProps)(HomeScreen);
