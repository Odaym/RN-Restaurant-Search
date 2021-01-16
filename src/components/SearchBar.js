import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather style={styles.searchIcon} name="search" />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        onEndEditing={onTermSubmit}
        value={term}
        onChangeText={onTermChange}
        placeholder="Search"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 15,
    flexDirection: "row",
  },
  input: {
    fontSize: 18,
    flex: 1,
  },
  searchIcon: {
    fontSize: 35,
    color: "black",
    marginHorizontal: 5,
    alignSelf: "center",
  },
});

export default SearchBar;
