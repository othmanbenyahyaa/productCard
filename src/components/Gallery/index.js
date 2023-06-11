import React, { useState } from "react";
import {
  Container,
  Previews,
  PPreviews,
  PreGroup,
  ProductImg,
  Product,
} from "./styles/GalleryStyle";

function Gallery({ productImg, previwImg1, previwImg2, previwImg3 }) {
  const [selectedImg, setSelectedImg] = useState(productImg);

  const handlePreviewClick = (src) => {
    setSelectedImg(src);
  };
  return (
    <Container>
      <Previews>
        <PreGroup>
          <PPreviews
            src={previwImg1}
            onClick={() => handlePreviewClick(previwImg1)}
          />
          <PPreviews
            src={previwImg2}
            onClick={() => handlePreviewClick(previwImg2)}
          />
          <PPreviews
            src={previwImg3}
            onClick={() => handlePreviewClick(previwImg3)}
          />
        </PreGroup>
      </Previews>
      <ProductImg>
        <Product src={selectedImg} />
      </ProductImg>
    </Container>
  );
}

export default Gallery;
