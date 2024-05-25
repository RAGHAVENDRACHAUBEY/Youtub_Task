import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Moviecard = ({title, data}) => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);

  const handleOnClick = item => {
    navigation.navigate('VideoPlayers', {item});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {data ? (
        <ScrollView horizontal={true}>
          {data.map(item => (
            <TouchableOpacity key={item.id} onPress={() => handleOnClick(item)}>
              <View style={styles.movieItem}>
                <Image
                  resizeMode="cover"
                  style={styles.movieImg}
                  source={{uri: item.p_image}}
                  onLoadStart={() => setIsLoading(true)}
                  onLoadEnd={() => setIsLoading(false)}
                />
                {isLoading && (
                  <ActivityIndicator
                    style={styles.activityIndicator}
                    size="large"
                    color="red"
                  />
                )}
                <Text style={styles.movieTitle}>
                  {item.p_name.slice(0, 30)}..
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      ) : (
        <Text style={styles.errorMessage}>
          <ActivityIndicator size="large" color="red" />
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  title: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginLeft: 10,
    paddingVertical: 10,
  },
  movieItem: {
    marginRight: 10,
  },
  movieImg: {
    width: 150,
    height: 200,
    borderRadius: 10,
  },
  movieTitle: {
    width: 150,
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    textAlign: 'center',
  },
  errorMessage: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
  activityIndicator: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    zIndex: 1,
  },
});

export default Moviecard;
