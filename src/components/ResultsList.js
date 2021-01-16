import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { withNavigation } from "react-navigation";
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({ title, results, navigation }) => {
  if (!results.length) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> {title} </Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={results}
          keyExtractor={(result) => result.id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("ResultsShow", { id: item.id })
                }
              >
                <ResultsDetail result={item} />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  title: {
    marginLeft: 10,
    fontSize: 18,
    marginBottom: 5,
    fontWeight: "bold",
  },
});

export default withNavigation(ResultsList);
