import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: result.image_url,
        }}
      />
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.subtitle}>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  name: {
    fontWeight: "bold",
    fontSize: 15,
  },
  subtitle: {
    fontSize: 12,
  },
  image: {
    borderRadius: 4,
    marginBottom: 5,
    height: 100,
    width: 250,
  },
});

export default ResultsDetail;
