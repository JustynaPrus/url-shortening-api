import React from "react";
import { Wrapper } from "./UrlList.styles";

const UrlList = ({ list }) => {
  const Item = (props) => {
    const { item, id } = props;

    const handleClick = () => {
      navigator.clipboard.writeText(item.full_short_link);
      alert(`${item.full_short_link} copied!`);
    };

    return (
      <li id={id}>
        <p>{item.original_link}</p>
        <p>{item.full_short_link}</p>
        <button onClick={handleClick}>Copy</button>
      </li>
    );
  };

  return (
    <Wrapper>
      {list.map((item, index, className) => (
        <Item key={index} item={item} id={index} />
      ))}
    </Wrapper>
  );
};

export default UrlList;
