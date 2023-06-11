import React from "react";
import {
  Container,
  PName,
  PCategory,
  PRating,
  PPrice,
  PText,
  PMontant,
  PDescription,
} from "./styles/DetaileStyle";
import RatingImage from "../../assets/images/Frame 4.png";

function Detaile({ productName, category, montant, description }) {
  return (
    <Container>
      <PName>{productName}</PName>
      <PCategory>{category}</PCategory>
      <PRating src={RatingImage} alt="Rating" />
      <PPrice>
        <PText>PRICE:</PText>
        <PMontant>{montant}đ</PMontant>
      </PPrice>
      <PDescription>{description}</PDescription>
    </Container>
  );
}

export default Detaile;
