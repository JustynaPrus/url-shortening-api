import React, { useState } from "react";
import { StyledSection, Wrapper } from "./ShortenUrl.styles";

const ShortenUrl = () => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState([]);
  const [shorten, setShorten] = useState([]);

  const API = `https://api.shrtco.de/v2/shorten?url=${value}`;

  const loadData = async () => {
    setLoading(true);
    await fetch(API)
      .then((response) => response.json())
      .then((data) => {
        const newUrl = data.result.full_short_link;
        setShorten((shorten) => [...shorten, newUrl]);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
    return { loading, error };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loadData();
    console.log(value);
    setUrl((url) => [...url, value]);
    console.log(shorten);
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
        {shorten.map((item) => (
          <li>
            <p>{item}</p>
          </li>
        ))}
        {url.map((item) => (
          <li>
            <p>{item}</p>
            <button>Copy</button>
          </li>
        ))}
      </Wrapper>
    </>
  );
};

export default ShortenUrl;
