import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import NavigationService from '../../navigation/NavigationService';
import {IMAGE_PATH} from '../../services';

const MovieDetailsScreen: React.FC<any> = ({route}) => {
  const {
    title,
    overview,
    poster_path,
    release_date,
    vote_average,
    vote_count,
    popularity,
  } = route.params.item;
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image
          source={{
            uri: IMAGE_PATH + poster_path,
          }}
          style={styles.poster}
          resizeMode="cover"
        />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.releaseDate}>Released on: {release_date}</Text>
      </View>

      {/* Overview Section */}
      <View style={styles.overviewContainer}>
        <Text style={styles.sectionTitle}>Overview</Text>
        <Text style={styles.overviewText}>{overview}</Text>
      </View>

      {/* Ratings Section */}
      <View style={styles.ratingsContainer}>
        <Text style={styles.ratingText}>⭐ {vote_average} / 10</Text>
        <Text style={styles.voteCount}>({vote_count} votes)</Text>
        <Text style={styles.popularity}>Popularity: {popularity}</Text>
      </View>

      {/* Actions Section */}
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Add to Favorites</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Share</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#1e293b',
  },
  poster: {
    width: 200,
    height: 300,
    borderRadius: 10,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
  releaseDate: {
    fontSize: 16,
    color: '#cbd5e1',
    marginTop: 8,
  },
  overviewContainer: {
    padding: 16,
    backgroundColor: '#ffffff',
    marginBottom: 16,
    borderRadius: 10,
    marginHorizontal: 8,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  overviewText: {
    fontSize: 16,
    color: '#334155',
    lineHeight: 22,
    textAlign: 'justify',
  },
  ratingsContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  ratingText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e40af',
  },
  voteCount: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 4,
  },
  popularity: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 4,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 16,
  },
  actionButton: {
    backgroundColor: '#2563eb',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  actionButtonText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default MovieDetailsScreen;
