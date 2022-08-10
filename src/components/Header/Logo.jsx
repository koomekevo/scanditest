import React, { Component } from 'react';
import styled from 'styled-components';
import svg21 from '../../assets/images/header/svg21.svg';
import svg19 from '../../assets/images/header/svg19.svg';
import svg3 from '../../assets/images/header/svg3.svg';
import svg2 from '../../assets/images/header/svg2.svg';

// Logo Styles
const LogoLayout = styled.div`
  /* a-logo */

  position: absolute;
  width: 41px;
  height: 41px;
  left: 699px;
  top: calc(50% - 41px / 2 + 4.5px);
`;

const LogoTransparent = styled.div`
  /* logo transparent */

  position: absolute;
  width: 41px;
  left: calc(50% - 41px / 2);
  top: 0%;
  bottom: 0%;
`;

const BrandIcon = styled.div`
  /* Brand icon */

  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
`;

const VSF = styled.div`
  /* VSF */

  position: absolute;
  left: 12%;
  right: 12%;
  top: 13.2%;
  bottom: 13.2%;
`;

const Group = styled.div`
  /* Group */

  position: absolute;
  left: 0%;
  right: -0.07%;
  top: 0%;
  bottom: 0.83%;
`;

const SVG17 = styled.div`
  /* svg 17 */

  position: absolute;
  left: 25.55%;
  right: 21.97%;
  top: 31.25%;
  bottom: 29.47%;
`;

const SVG20 = styled.div`
  /* svg 20 */

  position: absolute;
  left: 60.65%;
  right: 21.97%;
  top: 31.25%;
  bottom: 58.17%;
`;

const SVG21 = styled.img.attrs({
  src: `${svg21}`,
})`
  /* svg 21 */

  position: absolute;
  left: 60.65%;
  right: 21.97%;
  top: 31.25%;
  bottom: 58.17%;

  background: #ffffff;
`;

const SVG18 = styled.div`
  /* svg 18 */

  position: absolute;
  left: 25.55%;
  right: 29.25%;
  top: 40.75%;
  bottom: 29.47%;
`;

const SVG19 = styled.img.attrs({
  src: `${svg19}`,
})`
  /* svg 19 */

  position: absolute;
  left: 25.55%;
  right: 29.25%;
  top: 40.75%;
  bottom: 29.47%;

  background: #ffffff;
`;

const SVG1 = styled.div`
  /* svg 1 */

  position: absolute;
  left: 0%;
  right: -0.07%;
  top: 0%;
  bottom: 0.83%;
`;

const SVG3 = styled.img.attrs({
  src: `${svg3}`,
})`
  /* svg 3 */

  position: absolute;
  left: 0%;
  right: -0.07%;
  top: 4.33%;
  bottom: 0.83%;

  background: linear-gradient(316.98deg, #52d67a 16.88%, #5aee87 84.04%);
`;

const SVG2 = styled.img.attrs({
  src: `${svg2}`,
})`
  /* svg 2 */

  position: absolute;
  left: 6.45%;
  right: 6.6%;
  top: 0%;
  bottom: 20.98%;

  background: #1dcf65;
`;

const Vector3 = styled.div`
  /* Vector 3 */

  position: absolute;
  visibility: hidden;
  left: 8.8%;
  right: 8.75%;
  top: 10.8%;
  bottom: 10.59%;

  background: #ed1c24;
  border: 1px solid #ffffff;
`;
// End of Logo Styles

export default class Logo extends Component {
  render() {
    return (
      <LogoLayout>
        <LogoTransparent>
          <BrandIcon>
            <VSF>
              <Group>
                <SVG17>
                  <SVG20>
                    <SVG21 />
                  </SVG20>
                  <SVG18>
                    <SVG19 />
                  </SVG18>
                </SVG17>
                <SVG1>
                  <SVG3 />
                  <SVG2 />
                </SVG1>
              </Group>
            </VSF>
            <Vector3 />
          </BrandIcon>
        </LogoTransparent>
      </LogoLayout>
    );
  }
}
