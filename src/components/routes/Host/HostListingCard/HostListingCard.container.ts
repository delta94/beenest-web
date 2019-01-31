import styled from 'styled-components';
import { color, typography } from 'styled/utils';


const HostListingCardContainer = styled.article`
  box-shadow: 0 2px 8px ${color('black', 0.1)};
  display: flex;
  height: 232px;
  justify-content: space-between;
  padding: 20px 32px 28px 24px;
  width: 100%;


  .host-listing-meta {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 436px;
    h1 {
      ${typography('title', 4)};
    }
    h2 {
      ${typography('read', 1)};
    }
    h3 {
      ${typography('caption', 1)};
      font-style: italic;
    }
    h4 {
      ${typography('read', 1)};
      color: ${color('upper')};
      display: block;
      margin: 14px 0;
      .bee-svg {
        display: inline-block;
        height: 32px;
        margin-bottom: -10px;
        width: 32px;
      }
    }
    &--button-container {
      display: flex;
      justify-content: space-between;
      width: 555px;
      a,
      button {
        min-width: 125px;
      }
      label {
        display: inline-flex;
        max-height: 40px;
        padding: 6px;
        span {
          ${typography('caption', 2)};
          padding: 6px;
          &.host-listing-meta--disabled {
            color: ${color('upper')};
          }
        }
      }
    }

  }

  .host-listing-notice {
    ${typography('caption', 3)};
    max-width: 125px;
  }

  .host-listing-image {
    height: 100%;
    width: 340px;
  }
`;

export default HostListingCardContainer;
