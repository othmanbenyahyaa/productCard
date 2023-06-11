import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 25px;
`;
export const IconBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 57px;
  background: #000000;
  margin-top: 40px;
  cursor: pointer;
  &:hover {
    background: #423f3e;
  }
`;

export const Icon = styled.img`
  display: flex;
  width: 24px;
  height: 24px;
`;

export const BtnText = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
  margin-left: 18px;
`;

export const Btn = styled.div`
  display: flex;
  border: 1px solid #000000;
  justify-content: center;
  align-items: center;
  margin-top: 19px;
  cursor: pointer;
  &:hover {
    background: #f7f7f7;
  }
`;

export const BtnTxt = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
`;
