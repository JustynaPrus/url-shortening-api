import React from "react";
import { Wrapper } from "./UrlList.styles";

const UrlList = ({ data, list }) => {
  const Item = (props) => {
    const { item, id } = props;
    return (
      <li id={id} className={id === 0 ? "hide" : ""}>
        <p>{item.original_link}</p>
        <p>{item.full_short_link}</p>
        <button>Copy</button>
      </li>
    );
  };

  return (
    <Wrapper>
      <p>{data.original_link}</p>
      <p>{data.full_short_link}</p>
      <button>Copy</button>
      {list.map((item, index, className) => (
        <Item key={index} item={item} id={index} className={className} />
      ))}
    </Wrapper>
  );
};

export default UrlList;
