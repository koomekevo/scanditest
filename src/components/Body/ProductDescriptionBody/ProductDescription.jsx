import React, { Component } from 'react';
import styled from 'styled-components';
import ProductD from '../../../assets/images/body/ProductD.png';
import Colorgrey from '../../../assets/images/body/Colorgrey.svg';
import Colorblack from '../../../assets/images/body/Colorblack.svg';
import Colorgreen from '../../../assets/images/body/Colorgreen.svg';

const ProductBottomThumbnail = styled.img.attrs({
  src: `${ProductD}`,
})`
  /* Image */

  position: absolute;
  width: 79px;
  height: 80px;
  left: 100px;
  top: 400px;
`;

const ProductCenterThumbnail = styled.img.attrs({
  src: `${ProductD}`,
})`
  /* Image */

  position: absolute;
  width: 79px;
  height: 80px;
  left: 100px;
  top: 280px;
`;

const ProductTopThumbnail = styled.img.attrs({
  src: `${ProductD}`,
})`
  /* Image */

  position: absolute;
  width: 79px;
  height: 80px;
  left: 100px;
  top: 160px;
`;

const ColorFrameOneSeven = styled.div`
  /* Frame 17 */

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 8px;

  position: absolute;
  width: 116px;
  height: 36px;
  left: 929px;
  top: 394px;
`;

const GroupSixThreeOne = styled.img.attrs({
  src: `${Colorgrey}`,
})`
  /* Group 631 */

  width: 36px;
  height: 36px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const GroupFourZeroSeven = styled.img.attrs({
  src: `${Colorblack}`,
})`
  /* Group 407 */

  width: 32px;
  height: 32px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;

const GroupFourZeroEight = styled.img.attrs({
  src: `${Colorgreen}`,
})`
  /* Group 408 */

  width: 32px;
  height: 32px;

  /* Inside auto layout */

  flex: none;
  order: 2;
  flex-grow: 0;
`;

const ColorLabel = styled.label`
  /* COLOR: */

  position: absolute;
  width: 55px;
  height: 18px;
  left: 929px;
  top: 368px;

  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  /* identical to box height, or 100% */

  display: flex;
  align-items: center;
  text-align: center;

  color: #1d1f22;
`;

const ProductDescriptionContent = styled.div`
  /* Description */

  position: absolute;
  width: 292px;
  height: 103px;
  left: calc(50% - 292px / 2 + 355px);
  bottom: 178px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 159.96%;
  /* or 26px */

  /* --c-text */

  color: #1d1f22;
`;

const AddToCartButton = styled.button`
  /* _Button / Elements / Common */

  /* Auto layout */

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 32px;

  position: absolute;
  width: 292px;
  height: 52px;
  left: 929px;
  top: 560px;

  background: #5ece7b;
`;

const AddToCartButtonLabel = styled.label`
  /* Label */

  width: 105px;
  height: 20px;

  /* --button-font */

  font-family: "Raleway";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
  /* identical to box height, or 19px */

  /* --c-white */

  color: #ffffff;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const ProductPriceTag = styled.label`
  /* $50.00 */

  position: absolute;
  width: 86px;
  height: 46px;
  left: 929px;
  top: 494px;

  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 18px;
  /* or 75% */

  display: flex;
  align-items: center;

  color: #1d1f22;
`;

const ProductPriceLabel = styled.label`
  /* PRICE: */

  position: absolute;
  width: 50px;
  height: 18px;
  left: 929px;
  top: 466px;

  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  /* identical to box height, or 100% */

  display: flex;
  align-items: center;
  text-align: center;

  color: #1d1f22;
`;

const ProductSizeLabel = styled.label`
  /* SIZE: */

  position: absolute;
  width: 38px;
  height: 18px;
  left: 929px;
  top: 273px;

  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  /* identical to box height, or 100% */

  display: flex;
  align-items: center;
  text-align: center;

  color: #1d1f22;
`;

const RectangleThreeEightSix = styled.div`
  /* Rectangle 386 */

  box-sizing: border-box;

  position: absolute;
  width: 63px;
  height: 45px;
  left: 1154px;
  top: 299px;

  border: 1px solid #1d1f22;
`;

const SizeL = styled.label`
  /* L */

  position: absolute;
  width: 8px;
  height: 18px;
  left: 1183px;
  top: 312px;

  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  /* identical to box height, or 112% */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;

  color: #292929;
`;

const RectangleThreeEightTwo = styled.div`
  /* Rectangle 382 */

  box-sizing: border-box;

  position: absolute;
  width: 63px;
  height: 45px;
  left: 1079px;
  top: 299px;

  border: 1px solid #1d1f22;
`;

const SizeM = styled.label`
  /* M */

  position: absolute;
  width: 12px;
  height: 18px;
  left: 1106px;
  top: 312px;

  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  /* identical to box height, or 112% */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;

  color: #292929;
`;

const RectangleThreeEightOne = styled.div`
  /* Rectangle 381 */

  box-sizing: border-box;

  position: absolute;
  width: 63px;
  height: 45px;
  left: 929px;
  top: 299px;

  border: 1px solid #1d1f22;
`;

const SizeXS = styled.label`
  /* XS */

  position: absolute;
  width: 18px;
  height: 18px;
  left: 952px;
  top: 312px;

  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  /* identical to box height, or 112% */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;

  color: #1d1f22;
`;

const RectangleThreeEightZero = styled.div`
  /* Rectangle 380 */

  box-sizing: border-box;

  position: absolute;
  width: 63px;
  height: 45px;
  left: 1004px;
  top: 299px;

  background: #1d1f22;
  border: 1px solid #1d1f22;
`;

const SizeS = styled.label`
  /* S */

  position: absolute;
  width: 9px;
  height: 18px;
  left: 1031px;
  top: 312px;

  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  /* identical to box height, or 112% */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;

  color: #ffffff;
`;

class ProductDescription extends Component {
  render() {
    return (
      <>
        <ProductBottomThumbnail />
        <ProductCenterThumbnail />
        <ProductTopThumbnail />
        <ColorFrameOneSeven>
          <GroupSixThreeOne />
          <GroupFourZeroSeven />
          <GroupFourZeroEight />
        </ColorFrameOneSeven>
        <ColorLabel>COLOR:</ColorLabel>
        <ProductDescriptionContent>
          Find stunning women&apos;s cocktail dresses and party dresses. Stand
          out in lace and metallic cocktail dresses and party dresses from all
          your favorite brands.
        </ProductDescriptionContent>
        <AddToCartButton>
          <AddToCartButtonLabel>ADD TO CART</AddToCartButtonLabel>
        </AddToCartButton>
        <ProductPriceTag>$50.00</ProductPriceTag>
        <ProductPriceLabel>PRICE:</ProductPriceLabel>
        <ProductSizeLabel>SIZE:</ProductSizeLabel>
        <RectangleThreeEightSix />
        <SizeL>L</SizeL>
        <RectangleThreeEightTwo />
        <SizeM>M</SizeM>
        <RectangleThreeEightOne />
        <SizeXS>XS</SizeXS>
        <RectangleThreeEightZero />
        <SizeS>S</SizeS>
      </>
    );
  }
}

export default ProductDescription;
