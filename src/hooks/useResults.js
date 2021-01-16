import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "beirut",
        },
      });
      setResults(response.data.businesses);
    } catch (e) {
      setErrorMessage("Something went wrong");
    }
  };

  // Call searchApi when Component is first rendered
  // searchApi("pasta");
  useEffect(() => {
    searchApi("pizza");
  }, []);

  return [searchApi, results, errorMessage];
};
