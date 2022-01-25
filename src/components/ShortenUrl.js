import React, { useState, useEffect } from "react";
import UrlList from "./atoms/UrlList";
import { StyledSection, Wrapper } from "./ShortenUrl.styles";

const ShortenUrl = () => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [list, setList] = useState(() => {
    const saved = localStorage.getItem("list");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });
  const [isActive, setIsActive] = useState(false);

  const API = `https://api.shrtco.de/v2/shorten?url=${value}`;

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const loadData = async () => {
    setLoading(true);
    await fetch(API)
      .then((response) => response.json())
      .then((data) => {
        setList([...list, data.result]);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
    return { list, loading, error };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "") {
      setIsActive(true);
    } else if (value !== "") {
      loadData();
      setIsActive(false);
      setValue("");
    }
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
          <button type="submit">Shorten It!</button>
        </form>
      </StyledSection>
      {isActive ? <p>Please add a link</p> : null}
      <Wrapper>
        <UrlList list={list} />
      </Wrapper>
    </>
  );
};

export default ShortenUrl;
