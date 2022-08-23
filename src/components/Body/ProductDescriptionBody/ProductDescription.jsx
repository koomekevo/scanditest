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
      </>
    );
  }
}

export default ProductDescription;
