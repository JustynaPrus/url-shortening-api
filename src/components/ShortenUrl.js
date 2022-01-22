import React, { useState } from "react";
import { StyledSection, Wrapper } from "./ShortenUrl.styles";

const ShortenUrl = () => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [
    list = {
      url: "",
      shortenUrl: "",
    },
    setList,
  ] = useState([]);
  const API = `https://api.shrtco.de/v2/shorten?url=${value}`;

  const loadData = async () => {
    setLoading(true);
    await fetch(API)
      .then((response) => response.json())
      .then((data) => setData(data.result.full_short_link))
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
    return { data, loading, error };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loadData();
    console.log(value);
    console.log(data);
    setValue("");
  };

  return (
    <>
      <StyledSection>
        <form onSubmit={handleSubmit}>
          <input
            name="url"
            type="text"
            placeholder="Shorten a link here..."
            value={value}
            onChange={(e) => setValue((value) => [...value, e.target.value])}
          />
          <button type="submit">Shorten It!</button>
        </form>
      </StyledSection>
      <Wrapper>
        <p>{data}</p>
        <p>{value}</p>
      </Wrapper>
    </>
  );
};

export default ShortenUrl;
