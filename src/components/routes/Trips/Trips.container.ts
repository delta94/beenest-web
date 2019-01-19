import styled from 'styled-components';
import { color, typography } from 'styled/utils';

const TripsContainerMobile = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  width: 100%;

  
  .trips-wrapper {
    padding: 32px 24px 0;
    width: 320px;
    min-width: 320px;
    min-height: 100%;
    .trips-header {
      margin-bottom: 34px;
      width: 100%;
      h1 {
        ${typography('title', 4)};
        color: ${color('core')};
        margin-bottom: 10px;
        text-align: left;
      }
      .trips-header--border {
        background-color: ${color('up')};
        opacity: 0.4;
        height: 2px;
        width: 100%;
      }
    }
    .trips-book-now {
      margin-bottom: 32px;
      width: 100%;
      .trips-book-now--text {
        display: flex;
        flex-direction: column;
        margin-bottom: 32px;
        h2 {
          ${typography('title', 4)}
        }
        a {
          ${typography('title', 4)}
          color: ${color('tag')};
        }
      }
      .bee-button {
        width: 100%;
      }
    }
    section {
      display: flex;
      flex-direction: column;
      margin-bottom: 24px;
      width: 100%;
      .active-cards-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        .bee-active-trip-card {
          margin-bottom: 24px;
        }
      }
      > h3 {
      ${typography('title', 7)};
        color: ${color('body')};
        margin-bottom: 24px;
      }
      .expired-trip-cards {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin: 0 auto;
        width: 100%;
      }
    }
  }

  > .bee-divider {
    margin-bottom: 24px;
  }
`;

const TripsContainerTablet = styled(TripsContainerMobile)`
  @media (min-width: 768px) {
    .trips-wrapper {
      padding: 0;
      padding-top: 64px;
      width: 644px;
      .trips-header {
        margin-bottom: 12px;
        width: 100%;
        h1 {
          ${typography('title', 4)};
          color: ${color('core')};
          margin-bottom: 10px;
          text-align: left;
        }
        .trips-header--border {
          background-color: ${color('up')};
          opacity: 0.4;
          height: 2px;
          width: 100%;
        }
      }
      nav {
        align-self: flex-start;
        margin-bottom: 32px;
      }
      .trips-book-now {
        .trips-book-now--text {
          flex-direction: column;
          h2 {
            ${typography('title', 3)}
          }
          a {
            ${typography('title', 3)}
            margin-left: 4px;
          }
        }
      }
      section {
        display: flex;
        flex-direction: column;
        margin-bottom: 24px;
        width: 100%;
        .active-cards-container {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          width: 100%;
          .bee-active-trip-card {
            margin-bottom: 48px;
            &:nth-of-type(2n) {
              margin-left: 100px;
            }
          }
        }
        > h3 {
        ${typography('title', 7)};
          color: ${color('body')};
          margin-bottom: 24px;
        }
        .expired-trip-cards {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          margin: 0 auto;
          width: 100%;
          .expired-trip-card {
            margin-bottom: 48px;
            &:nth-of-type(2n) {
              margin-left: 100px;
            }
          }
        }
      }
    }
  }
`;

const TripsContainerDesktop = styled(TripsContainerTablet)`
  @media (min-width: 1025px) {
    .trips-wrapper {
      width: 976px;
      .trips-header {
        margin-bottom: 12px;
        width: 100%;
        h1 {
          ${typography('title', 2)};
          color: ${color('core')};
          margin-bottom: 10px;
          text-align: left;
        }
        .trips-header--border {
          background-color: ${color('up')};
          opacity: 0.4;
          height: 2px;
          width: 100%;
        }
      }
      nav {
        margin-bottom: 60px;
      }
      .trips-book-now {
        .trips-book-now--text {
          flex-direction: row;
          a {
            margin-left: 8px;
          }
        }
        .bee-button {
          width: 200px;
        }
      }
      section {
        display: flex;
        flex-direction: column;
        margin-bottom: 24px;
        width: 100%;
        .active-cards-container {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          width: 100%;
          .bee-active-trip-card {
            margin-bottom: 48px;
            &:nth-of-type(2n) {
              margin-left: 0;
            }
          }
        }
        > h3 {
        ${typography('emp', 5)};
          color: ${color('body')};
          margin-bottom: 24px;
        }
        .expired-trip-cards {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          margin: 0 auto;
          width: 100%;
          .expired-trip-card {
            &:nth-of-type(3n + 4),
            &:nth-of-type(3n + 5),
            &:nth-of-type(3n + 6) {
              margin-left: 0;
            }

            &:nth-of-type(3n + 2),
            &:nth-of-type(3n + 3) {
              margin-left: 80px;
            }
          }
        }
      }
    }
  }
`;

const TripsContainer = styled(TripsContainerDesktop)``;

export default TripsContainer;
