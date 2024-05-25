import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import {WebView} from 'react-native-webview';
import {myColors} from '../utils/Theme';

const VideoPlayers = ({navigation, route}) => {
  const {item} = route.params;

  const [isVideoVisible, setisVideoVisible] = useState(false);
  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={'#080508'} />
      <View
        style={{
          position: 'absolute',
          width: 35,
          backgroundColor: myColors.white,
          padding: 7,
          borderRadius: 60,
          top: 10,
          marginLeft: 10,
          zIndex: 999,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack('')}>
          <Feather name="arrow-left" size={20} color={myColors.primary} />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollContainer}>
        {isVideoVisible ? (
          <WebView
            source={{
              uri: item?.url,
            }}
            style={styles.firstContainer}
            onError={error => {
              console.error('Video playback error:', error);
            }}
            onShouldStartLoadWithRequest={() => true}
            allowsFullscreenVideo
            allowsInlineMediaPlayback={true}
            useWebKit={true}
          />
        ) : (
          <Image style={styles.firstContainer} source={{uri: item.p_image}} />
        )}
        <View style={styles.secondContainer}>
          <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
            {item.p_name}
          </Text>

          <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
            <Text style={{fontSize: 16, color: 'white'}}>
              {item?.create_at.split('-')[0]}
            </Text>
            <View
              style={{width: 2.5, height: 20, backgroundColor: 'white'}}></View>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
              <MaterialIcons name="favorite" size={20} color="red" />
              <MaterialIcons name="hd" size={25} color="white" />
            </View>
          </View>
        </View>
        <View style={{padding: 10, gap: 10, marginTop: 5}}>
          <TouchableOpacity
            onPress={() => {
              setisVideoVisible(true);
            }}
            activeOpacity={0.8}
            style={styles.playButton}>
            <Entypo name="controller-play" size={22} color="black" />
            <Text
              style={[
                styles.titles,
                {
                  fontSize: responsiveFontSize(2),
                  color: 'black',
                  fontWeight: '700',
                },
              ]}>
              Play
            </Text>
          </TouchableOpacity>
          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '800',
                color: 'white',
                marginVertical: 5,
                textAlign: 'justify',
              }}>
              {item?.cat_name}
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: 'white',
                lineHeight: 25,
                textAlign: 'justify',
              }}>
              {item?.p_desc}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default VideoPlayers;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#080508',
    marginTop: StatusBar.currentHeight,
  },
  scrollContainer: {
    flex: 1,
  },
  firstContainer: {
    height: responsiveHeight(28),
  },
  secondContainer: {
    padding: 10,
    gap: 10,
  },
  titles: {
    fontSize: responsiveFontSize(2.3),
    color: 'white',
    fontWeight: '500',
  },
  playButton: {
    backgroundColor: 'white',
    height: responsiveHeight(5.3),
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
});
