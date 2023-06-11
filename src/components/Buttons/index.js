import React from "react";
import {
  Container,
  IconBtn,
  Icon,
  BtnText,
  Btn,
  BtnTxt,
} from "./styles/ButtonsStyle";
import ToteImage from "../../assets/images/Tote.png";

function Buttons() {
  return (
    <Container>
      <IconBtn>
        <Icon src={ToteImage} alt="tote" />
        <BtnText>THÊM VÀO GIỎ</BtnText>
      </IconBtn>
      <Btn>
        <BtnTxt>MUA NGAY</BtnTxt>
      </Btn>
    </Container>
  );
}

export default Buttons;
