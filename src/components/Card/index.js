import React from "react";
import {
  Container,
  Section,
  PLogo,
  PDetills,
  BrandLogo,
  PImages,
  Previews,
  PPreviews,
  PreGroup,
  ProductImg,
  Product,
  PInfo,
  PName,
  PCategory,
  PRating,
  PPrice,
  PText,
  PMontant,
  PDescription,
  PButtons,
  IconBtn,
  Icon,
  BtnText,
  Btn,
  BtnTxt,
} from "./styles/CardStyle";
import RatingImage from "../../assets/images/Frame 4.png";
import ToteImage from "../../assets/images/Tote.png";

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
            <Previews>
              <PreGroup>
                <PPreviews src={previwImg1} />
                <PPreviews src={previwImg2} />
                <PPreviews src={previwImg3} />
              </PreGroup>
            </Previews>
            <ProductImg>
              <Product src={productImg} />
            </ProductImg>
          </PImages>
          <PInfo>
            <PName>{productName}</PName>
            <PCategory>{category}</PCategory>
            <PRating src={RatingImage} alt="Rating" />
            <PPrice>
              <PText>PRICE:</PText>
              <PMontant>{montant}đ</PMontant>
            </PPrice>
            <PDescription>{description}</PDescription>
            <PButtons>
              <IconBtn>
                <Icon src={ToteImage} alt="tote" />
                <BtnText>THÊM VÀO GIỎ</BtnText>
              </IconBtn>
              <Btn>
                <BtnTxt>MUA NGAY</BtnTxt>
              </Btn>
            </PButtons>
          </PInfo>
        </PDetills>
      </Section>
    </Container>
  );
}

export default Card;
