import React from "react";
import {
  Description,
  DetailContainer,
  DetailImg,
  DetailTitle,
  InfoPart,
} from "./Detail.style";

import { useLocation, useParams } from "react-router-dom";
import defaultImg from "../../assets/book.jpg"

const Detail = () => {
  const { state } = useLocation();
  const { id } = useParams();
  console.log(state);
  console.log(id);
  return (
    <DetailContainer>
      <DetailTitle>{state.volumeInfo.title}</DetailTitle>
      <DetailImg>
        <img
          src={state.volumeInfo.imageLinks?.smallThumbnail || defaultImg}
          alt={state.volumeInfo.title}
        />
      </DetailImg>
      <Description>{state.volumeInfo.description}</Description>
      <InfoPart>
        <p>
          {state.volumeInfo.authors?.map((item) => (
            <span key={item}> {item}</span>
          ))}
        </p>
        <p>
          {state.volumeInfo.publishedDate}
          {state.volumeInfo.publisher && (
            <span>/ {state.volumeInfo.publisher} </span>
          )}
        </p>
      </InfoPart>
    </DetailContainer>
  );
};
export default Detail;
