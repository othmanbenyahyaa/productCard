import React from "react";
import { Container } from "./AppStyle.js";
import Logo from "../src/assets/images/Logo.png";
import Product from "../src/assets/images/Product.png";
import PreviwImg1 from "../src/assets/images/PreviwImg1.png";
import PreviwImg2 from "../src/assets/images/PreviwImg2.png";
import PreviwImg3 from "../src/assets/images/PreviwImg3.png";
import Card from "../src/components/Card/index.js";

function App() {
  const productData = {
    logo: Logo,
    productImg: Product,
    previwImg1: PreviwImg1,
    previwImg2: PreviwImg2,
    previwImg3: PreviwImg3,
    productName: "OTTO",
    category: "WEIMAR - 40MM",
    montant: "2.299.000",
    description:
      "The minimalistic Bauhaus design of Weimar Otto, created by Curnon, is showcased through a combination of sophisticated and modern color schemes. The Sand-colored leather strap paired with the green needle detail serves as a striking accent, allowing you to perfectly coordinate it with any outfit.",
  };

  return (
    <Container>
      <Card {...productData} />
    </Container>
  );
}

export default App;
