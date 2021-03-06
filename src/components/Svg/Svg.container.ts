import styled from 'styled-components';

const SvgContainer = styled.div`
  svg {
    display: block;
    fill: currentColor;
    height: inherit;
    width: inherit;
    path,
    polyline {
      fill: currentColor;
    }
  }
`;

/** @component */
export default SvgContainer;