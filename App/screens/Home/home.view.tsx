import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {UPCOMING_REQUEST} from '../../redux/Upcoming/Constants';
import {Movie} from '../../model/data';
import {IMAGE_PATH} from '../../services';
import FastImage from 'react-native-fast-image';
import {POPULAR_REQUEST} from '../../redux/Popular/Constants';
import {getData, storeData} from '../../helpers/localStorage';
import {handleFavorite} from '../../components/Favorite';
import NavigationService from '../../navigation/NavigationService';
import {MOVIE_DETAILS_ROUTE} from '../../navigation/Constants';

const UpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingData = useSelector((state: RootState) => state.upcoming);
  const popularData = useSelector((state: RootState) => state.popular);
  const [favoritesData, setFavoritesData] = useState<any>([]);

  useEffect(() => {
    dispatch({type: UPCOMING_REQUEST});
    dispatch({type: POPULAR_REQUEST});
  }, [dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData({key: 'FavoritesMovieData'});
        setFavoritesData(result?.value ?? []);
      } catch (error) {
        console.error('Error fetching data:', error);
        setFavoritesData([]);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const saveData = async () => {
      try {
        const result = await storeData({
          key: 'FavoritesMovieData',
          value: favoritesData,
        });
        console.log(result.status);
      } catch (error) {
        console.error('Error storing data:', error);
      }
    };
    saveData();
  }, [favoritesData]);

  const toggleFavoriteSwitch = (item: any) => {
    setFavoritesData((prevFavorites: any[] = []) => {
      console.log(`prevFavorites${prevFavorites}`);
      if (prevFavorites?.includes(item.id)) {
        console.log(`prevFavorites1`);

        return prevFavorites.filter(id => id !== item.id);
      } else {
        console.log(`prevFavorites2`);

        return [...prevFavorites, item.id];
      }
    });
  };

  const renderItem = ({item}: {item: Movie}) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => NavigationService.navigate(MOVIE_DETAILS_ROUTE, {item})}>
      <FastImage
        style={styles.image}
        source={{
          uri: IMAGE_PATH + item.poster_path,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <Text numberOfLines={1} style={styles.title}>
        {item.title}
      </Text>
      {handleFavorite(
        async () => toggleFavoriteSwitch(item),
        favoritesData?.includes(item.id) || false,
      )}
    </TouchableOpacity>
  );

  if (upcomingData.loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (upcomingData.error) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Error: {upcomingData.error}</Text>
      </View>
    );
  }

  return (
    <View style={{padding: 20, flex: 1}}>
      <View>
        <View>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>Upcoming</Text>
        </View>
        <FlatList
          data={upcomingData.movieData}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 16}}
        />
      </View>
      <View>
        <View>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>Popular</Text>
        </View>
        <FlatList
          data={popularData.movieData}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false} // Hides the scrollbar
          contentContainerStyle={{paddingHorizontal: 16}} // Adds padding on both sides
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  list: {
    padding: 16,
  },
  card: {
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginRight: 10,
    width: 150,
  },
  image: {
    width: 150,
    height: 200,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    padding: 8,
  },
});

export default UpcomingMovies;
