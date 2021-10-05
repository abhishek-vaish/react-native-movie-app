import { StatusBar } from "expo-status-bar";
import React, { useLayoutEffect } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Animated,
} from "react-native";
import { gray, white } from "../constants";
import { useDetails } from "../hooks/dataFetchHook";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { SharedElement } from "react-navigation-shared-element";

const CardDetails = ({ route, navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTintColor: white,
      headerTitle: "",
      headerRight: () => (
        <View style={{ marginRight: 20 }}>
          <TouchableOpacity activeOpacity={0.5}>
            <FontAwesome name="bookmark" size={20} color={white} />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);
  const { id, type } = route.params;
  const movieData = useDetails(id, type);
  const imageURL = "https://image.tmdb.org/t/p/w500";
  const dimension = Dimensions.get("window");
  const opacity = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: 250,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <ScrollView style={{ backgroundColor: white, flex: 1 }}>
      <StatusBar translucent={true} style="light" />
      <View>
        <SharedElement id={id}>
          <Image
            style={{ width: dimension.width, height: 580 }}
            resizeMode="cover"
            source={{
              uri: `${imageURL}` + movieData.poster_path,
            }}
          />
        </SharedElement>
        <View
          style={{
            position: "absolute",
            height: 580,
            width: dimension.width,
            backgroundColor: "#000",
            opacity: 0.3,
          }}
        />
      </View>

      <Animated.View
        style={{
          opacity,
          backgroundColor: white,
          flex: 1,
          position: "relative",
          top: -20,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingTop: 20,
          paddingHorizontal: 20,
        }}
      >
        <Text
          style={{
            fontSize: 32,
            textTransform: "uppercase",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {type === "movie" ? movieData.title : movieData.name}
        </Text>
        <View
          style={{
            flexDirection: "row",
            textTransform: "capitalize",
            marginTop: 4,
            color: gray,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: gray, marginRight: 5 }}>
            {type === "movie"
              ? movieData.release_date
                ? movieData.release_date.split("-")[0]
                : movieData.release_date
              : movieData.last_air_date
              ? movieData.last_air_date.split("-")[0]
              : movieData.last_air_date}
          </Text>
          <FontAwesome name="circle" size={5} color={gray} />

          <Text style={{ color: gray, marginRight: 5, marginLeft: 5 }}>
            {movieData.genres ? movieData.genres[0].name : ""}
            {", "}
            {movieData.genres ? movieData.genres[1].name : ""}
          </Text>
          <FontAwesome name="circle" size={5} color={gray} />
          <Text
            style={{
              color: gray,
              marginRight: 5,
              marginLeft: 5,
              textTransform: "capitalize",
            }}
          >
            {movieData?.original_language}
          </Text>
        </View>
        <Text style={{ marginTop: 20, color: gray }}>{movieData.overview}</Text>
      </Animated.View>
    </ScrollView>
  );
};

export default CardDetails;
