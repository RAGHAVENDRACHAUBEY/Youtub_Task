import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import axios from 'axios';
import Moviecard from './Moviecard';
import {myColors} from '../utils/Theme';
import Icon from 'react-native-vector-icons/Ionicons';
import Animated, {FadeIn, FadeInDown} from 'react-native-reanimated';

const Home = ({navigation}) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://impactmindz.in/client/boub/back_end/api/product',
      );
      if (response.status === 200) {
        setData(response.data.data);
      }
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'default'}
        translucent
        backgroundColor={'transparent'}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Search');
        }}>
        <View style={styles.search}>
          <Icon name="search" size={20} color="#777" style={styles.icon} />
          <Text style={styles.tittle}>Search....</Text>
        </View>
      </TouchableOpacity>
      <ScrollView>
        <ScrollView horizontal={true} style={styles.scrollView}>
          <Animated.View
            entering={FadeIn.delay(600)}
            style={styles.subContainer}>
            <Moviecard title="DRONE VIDEOS" data={data['DRONE VIDEOS']} />
          </Animated.View>
        </ScrollView>
        <ScrollView horizontal={true} style={styles.scrollView}>
          <Animated.View
            entering={FadeIn.delay(800)}
            style={styles.subContainer}>
            <Moviecard title="Events" data={data['Events']} />
          </Animated.View>
        </ScrollView>

        <ScrollView horizontal={true} style={styles.scrollView}>
          <Animated.View
            entering={FadeIn.delay(1000)}
            style={styles.subContainer}>
            <Moviecard
              title="EDITORIAL/BRANDED"
              data={data['EDITORIAL/BRANDED']}
            />
          </Animated.View>
        </ScrollView>
        <ScrollView horizontal={true} style={styles.scrollView}>
          <Animated.View
            entering={FadeIn.delay(1200)}
            style={styles.subContainer}>
            <Moviecard title="EDUCATIONAL" data={data['EDUCATIONAL']} />
          </Animated.View>
        </ScrollView>
        <ScrollView horizontal={true} style={styles.scrollView}>
          <Animated.View
            entering={FadeIn.delay(1500)}
            style={styles.subContainer}>
            <Moviecard title="PODCAST" data={data['PODCAST']} />
          </Animated.View>
        </ScrollView>
        <ScrollView horizontal={true} style={styles.scrollView}>
          <Animated.View
            entering={FadeIn.delay(1800)}
            style={styles.subContainer}>
            <Moviecard title="Founder Ads" data={data['Founder Ads']} />
          </Animated.View>
        </ScrollView>
        <ScrollView horizontal={true} style={styles.scrollView}>
          <Animated.View
            entering={FadeIn.delay(2000)}
            style={styles.subContainer}>
            <Moviecard title="Evergreen Ads" data={data['Evergreen Ads']} />
          </Animated.View>
        </ScrollView>
        <ScrollView horizontal={true} style={styles.scrollView}>
          <Animated.View
            entering={FadeIn.delay(2300)}
            style={styles.subContainer}>
            <Moviecard title="Sales Ads" data={data['Sales Ads']} />
          </Animated.View>
        </ScrollView>
        <ScrollView horizontal={true} style={styles.scrollView}>
          <Animated.View
            entering={FadeIn.delay(2600)}
            style={styles.subContainer}>
            <Moviecard title="Testimonial Ads" data={data['Testimonial Ads']} />
          </Animated.View>
        </ScrollView>
        <ScrollView horizontal={true} style={styles.scrollView}>
          <Animated.View
            entering={FadeIn.delay(2900)}
            style={styles.subContainer}>
            <Moviecard
              title="Problem | Solution Ads"
              data={data['Problem | Solution Ads']}
            />
          </Animated.View>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  search: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: 320,
    borderRadius: 20,
    paddingVertical: 16,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    marginTop: 35,
  },
  subContainer: {
    paddingHorizontal: 5,
    flexDirection: 'row',
    marginTop: 10,
  },

  movieImg: {
    width: 200,
    height: 200,
    borderRadius: 10,
    margin: 5,
  },
  scrollView: {
    paddingVertical: 10,
  },
  title: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginTop: 5,
    width: 150,
    textAlign: 'center',
  },
  tittle: {
    fontSize: 16,
    paddingHorizontal: 15,
    color: myColors.primary,
  },
});
