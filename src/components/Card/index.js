import React from "react";
import {
  Container,
  Section,
  PLogo,
  PDetills,
  BrandLogo,
  PImages,
  PInfo,
} from "./styles/CardStyle";
import Buttons from "../Buttons";
import Gallery from "../Gallery";
import Detaile from "../Detaile";

function Card({
  logo,
  productImg,
  previwImg1,
  previwImg2,
  previwImg3,
  productName,
  category,
  montant,
  description,
}) {
  return (
    <Container>
      <Section>
        <PLogo>
          <BrandLogo src={logo} />
        </PLogo>
        <PDetills>
          <PImages>
            <Gallery
              productImg={productImg}
              previwImg1={previwImg1}
              previwImg2={previwImg2}
              previwImg3={previwImg3}
            />
          </PImages>

          <PInfo>
            <Detaile
              productName={productName}
              category={category}
              montant={montant}
              description={description}
            />
            <Buttons />
          </PInfo>
        </PDetills>
      </Section>
    </Container>
  );
}

export default Card;
