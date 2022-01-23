import React, { useState } from "react";
import { StyledSection, Wrapper } from "./ShortenUrl.styles";

const ShortenUrl = () => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState({});
  const [list, setList] = useState([]);

  const API = `https://api.shrtco.de/v2/shorten?url=${value}`;

  const loadData = async () => {
    setLoading(true);
    await fetch(API)
      .then((response) => response.json())
      .then((data) => setData(data.result))
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
  console.log(data);

  const handleClick = () => {
    setList([...list, data]);
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
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit" onClick={handleClick}>
            Shorten It!
          </button>
        </form>
      </StyledSection>
      <Wrapper>
        <ul>
          <p>{data.original_link}</p>
          <p>{data.full_short_link}</p>
          {list.map((item) => (
            <li>
              <p>{item.original_link}</p>
              <p>{item.full_short_link}</p>
              <button>Copy</button>
            </li>
          ))}
        </ul>
      </Wrapper>
    </>
  );
};

export default ShortenUrl;
