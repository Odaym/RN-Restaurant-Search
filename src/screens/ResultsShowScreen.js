import React, { useState, useEffect } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  } else {
    return (
      <View>
        <Text>{result.name}</Text>
        <FlatList
          // The object passed to data is the one used in dataExtractor
          // So in dataExtractor you get a single photo in this case
          data={result.photos}
          keyExtractor={(photo) => photo}
          renderItem={({ item }) => {
            return <Image style={styles.image} source={{ uri: item }} />;
          }}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  image: {
    borderRadius: 4,
    marginBottom: 5,
    height: 100,
    width: 250,
  },
});

export default ResultsShowScreen;
