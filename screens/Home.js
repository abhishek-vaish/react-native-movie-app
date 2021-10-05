import React from "react";
import { StatusBar, Text, View, StyleSheet, ScrollView } from "react-native";
import { secondaryColor, white } from "../constants";
import { useFetch } from "../hooks/dataFetchHook";
import MovieCard from "../components/MovieCard";
import Header from "../components/Header";

const Home = ({ navigation }) => {
  const popularMovieData = useFetch("movie", "popular");
  const tvShowData = useFetch("tv", "popular");

  return (
    <View
      style={{
        backgroundColor: secondaryColor,
        paddingTop: 20,
        paddingBottom: 50,
      }}
    >
      <StatusBar backgroundColor={secondaryColor} />
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingLeft: 20 }}
      >
        <View style={styles.popularMovies}>
          <Text style={{ color: `${white}`, fontSize: 22, fontWeight: "bold" }}>
            Popular Movies
          </Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {popularMovieData.map((data, index) => (
            <MovieCard
              key={index}
              imageURL={data.poster_path}
              title={data.original_title}
              date={data.release_date}
              id={data.id}
              onPress={() =>
                navigation.push("CardDetails", { id: data.id, type: "movie" })
              }
            />
          ))}
        </ScrollView>
        <View style={styles.popularMovies}>
          <Text style={{ color: `${white}`, fontSize: 22, fontWeight: "bold" }}>
            TV Show
          </Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {tvShowData.map((data, index) => (
            <MovieCard
              key={index}
              imageURL={data.poster_path}
              title={data.original_name}
              date={data.first_air_date}
              id={data.id}
              onPress={() =>
                navigation.push("CardDetails", { id: data.id, type: "tv" })
              }
            />
          ))}
        </ScrollView>
        <View style={{ height: 15 }} />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  popularMovies: {
    marginTop: 20,
  },
});
