import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      <Text>Search Screen</Text>
      {errorMessage ? (
        <Text>{errorMessage}</Text>
      ) : (
        <Text>We have found {results.length} results.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
