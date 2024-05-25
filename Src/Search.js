import React, {useEffect, useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {myColors} from '../utils/Theme';
import axios from 'axios';

const Search = ({onSearch}) => {
  const navigation = useNavigation();
  const [data, setData] = useState({});
  //   console.log('DATA', data);
  const [filterData, setFilterData] = useState([]);
  const [search, setSearch] = useState('');

  const handleBack = () => {
    navigation.goBack();
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://impactmindz.in/client/boub/back_end/api/product',
      );
      if (response.status === 200) {
        setData(response.data.data);
        setFilterData(response.data.data);
      }
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const searchText = text => {
    setSearch(text);
    const newData = data?.Events?.filter(item => {
      const itemData = item?.p_name
        ? item?.p_name.toUpperCase()
        : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setFilterData(newData);
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'default'}
        translucent
        backgroundColor={'transparent'}
      />
      <View style={styles.subcontainer}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#777" />
        </TouchableOpacity>
        <View style={styles.searchBar}>
          <Icon name="search" size={20} color="#777" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Search..."
            onChangeText={searchText}
            value={search}
          />
        </View>
      </View>
      <View>
        {search ? (
          <View style={{backgroundColor: 'black', zIndex: 1000}}>
            {filterData?.map(item => (
              <TouchableOpacity
                key={item.p_id}
                onPress={() => {
                  navigation.navigate('VideoPlayers', {item});
                  setSearch('');
                  searchText('');
                }}>
                <Text style={styles.item}>{item.p_name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ) : (
          <View>
            {data?.Events?.map(item => (
              <TouchableOpacity
                key={item.p_id}
                onPress={() => {
                  navigation.navigate('VideoPlayers', {item});
                  setSearch('');
                  searchText('');
                }}>
                <Text style={styles.item}>{item.p_name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  subcontainer: {
    backgroundColor: myColors.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginHorizontal: 10,
    paddingVertical: 8,
    marginTop: 30,
    borderRadius: 10,
  },
  backButton: {
    marginRight: 10,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: myColors.white,
    flex: 1,
  },
  input: {
    flex: 1,
    height: 40,
  },
  icon: {
    marginLeft: 10,
    marginRight: 5,
  },
  item: {
    padding: 5,
    color: 'white',
    fontSize: 15,
    fontWeight: '800',
    margin: 5,
    marginLeft: 20,
  },
});

export default Search;
