import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  View,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import { styles } from '../theme/appTheme';
import { HorizontalSlider } from '../components/HorizontalSlider';

const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {
  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{ marginTop: top + 20 }}>
        {/* Carousel Principal */}
        <View style={{ height: 370 }}>
          <Carousel
            data={nowPlaying}
            renderItem={({ item }: any) => <MoviePoster movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={250}
          />
        </View>
        {/* Peliculas Populares */}
        <HorizontalSlider title="Populares" movies={popular} />
        <HorizontalSlider title="Más votadas" movies={topRated} />
        <HorizontalSlider title="Próximamente" movies={upcoming} />
      </View>
    </ScrollView>
  );
};
