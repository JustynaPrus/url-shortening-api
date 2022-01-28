import React from "react";
import { Wrapper, StyledParagraph } from "./UrlList.styles";

const UrlList = ({ list }) => {
  const Item = (props) => {
    const { item, id } = props;

    const handleClick = (e) => {
      navigator.clipboard.writeText(item.full_short_link);
      e.target.classList.add("clicked");
      e.target.innerHTML = "Copied!";
    };

    return (
      <li id={id}>
        <p>{item.original_link}</p>
        <div>
          <StyledParagraph>{item.full_short_link}</StyledParagraph>
          <button onClick={handleClick}>Copy</button>
        </div>
      </li>
    );
  };

  return (
    <Wrapper>
      {list.map((item, index) => (
        <Item key={index} item={item} id={index} />
      ))}
    </Wrapper>
  );
};

export default UrlList;
