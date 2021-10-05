import React from "react";

const useFetch = (type, category) => {
  const [movieData, setMovieData] = React.useState([]);
  const apiKey = "e7079eb34090c000f06e92ae336d76ca";
  const fetchData = async () => {
    await fetch(
      `https://api.themoviedb.org/3/${type}/${category}?api_key=${apiKey}&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => setMovieData(data.results))
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return movieData;
};

const useDetails = (id, type) => {
  const [movieDetails, setMovieDetails] = React.useState({});
  const apiKey = "e7079eb34090c000f06e92ae336d76ca";
  const fetchData = async () => {
    await fetch(
      `https://api.themoviedb.org/3/${type}/${id}?api_key=${apiKey}&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => setMovieDetails(data))
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return movieDetails;
};

export { useFetch, useDetails };
