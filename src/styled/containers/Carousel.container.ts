import styled from 'styled-components';
import { color, typography } from 'styled/utils';

const CarouselContainerMobile = styled.div`
  width: 320px;

  .carousel-image-wrapper {
    outline: 0;
    margin: 0;
    figcaption {
      color: ${color('white')};
      padding: 5px;
      text-align: center;
      ${typography('caption', 1)};
      width: 100%;
    }
  }

  .slick-dots,
  .slick-next,
  .slick-prev {
    position: absolute;
    display: block;
    padding: 0;
  }
  .slick-dots li button:before,
  .slick-next:before,
  .slick-prev:before {
    font-family: slick;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .slick-loading .slick-list {
    background: url(ajax-loader.gif) center center no-repeat #fff;
  }
  .slick-next,
  .slick-prev {
    font-size: 0;
    line-height: 0;
    top: 44%;
    -webkit-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    transform: translate(0, -50%);
    cursor: pointer;
    color: transparent;
    border: none;
    outline: 0;
    background: 0 0;
  }
  .slick-next:focus,
  .slick-next:hover,
  .slick-prev:focus,
  .slick-prev:hover {
    color: transparent;
    outline: 0;
    background: 0 0;
  }
  .slick-next:focus:before,
  .slick-next:hover:before,
  .slick-prev:focus:before,
  .slick-prev:hover:before {
    opacity: 1;
  }
  .slick-next.slick-disabled:before,
  .slick-prev.slick-disabled:before {
    opacity: 0.25;
  }
  .slick-next:before,
  .slick-prev:before {
    font-size: 32px;
    line-height: 1;
    opacity: 0.75;
    color: #fff;
  }
  .slick-prev {
    right: calc(100% + 8px);
  }
  [dir='rtl'] .slick-prev {
    left: calc(100% + 8px);
    left: auto;
  }
  .slick-prev:before {
    content: '<';
  }
  .slick-next:before,
  [dir='rtl'] .slick-prev:before {
    content: '>';
  }
  .slick-next {
    left: calc(100% + 8px);
  }
  [dir='rtl'] .slick-next {
    right: auto;
    right: calc(100% + 8px);
  }
  [dir='rtl'] .slick-next:before {
    content: '>';
  }
  .slick-dotted.slick-slider {
    margin-bottom: 30px;
  }
  .slick-dots {
    bottom: -25px;
    width: 100%;
    margin: 0;
    list-style: none;
    text-align: center;
  }
  .slick-dots li {
    position: relative;
    display: inline-block;
    width: 20px;
    height: 20px;
    margin: 0 5px;
    padding: 0;
    cursor: pointer;
  }
  .slick-dots li button {
    font-size: 0;
    line-height: 0;
    display: block;
    width: 20px;
    height: 20px;
    padding: 5px;
    cursor: pointer;
    color: transparent;
    border: 0;
    outline: 0;
    background: 0 0;
  }
  .slick-dots li button:focus,
  .slick-dots li button:hover {
    outline: 0;
  }
  .slick-dots li button:focus:before,
  .slick-dots li button:hover:before {
    opacity: 1;
  }
  .slick-dots li button:before {
    font-size: 6px;
    line-height: 20px;
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    content: 'O';
    text-align: center;
    opacity: 0.25;
    color: #000;
  }
  .slick-dots li.slick-active button:before {
    opacity: 0.75;
    color: #000;
  }
  /*# sourceMappingURL=slick-theme.min.css.map */

  .slick-list,
  .slick-slider,
  .slick-track {
    position: relative;
    display: block;
  }
  .slick-loading .slick-slide,
  .slick-loading .slick-track {
    visibility: hidden;
  }
  .slick-slider {
    box-sizing: border-box;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
  }
  .slick-list {
    overflow: hidden;
    margin: 0;
    padding: 0;
  }
  .slick-list:focus {
    outline: 0;
  }
  .slick-list.dragging {
    cursor: pointer;
    cursor: hand;
  }
  .slick-slider.slick-list,
  .slick-slider.slick-track {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  .slick-track {
    top: 0;
    left: 0;
  }
  .slick-track:after,
  .slick-track:before {
    display: table;
    content: ' ';
  }
  .slick-track:after {
    clear: both;
  }
  .slick-slide {
    display: none;
    float: left;
    height: 100%;
    min-height: 1px;
  }
  [dir='rtl'].slick-slide {
    float: right;
  }
  .slick-slide img {
    display: flex;
    height: auto;
    margin: 0 auto;
    max-height: 204px;
    max-width: 320px;
    width: auto;
  }
  .slick-slide.slick-loading img {
    display: none;
  }
  .slick-slide.dragging img {
    pointer-events: none;
  }
  .slick-initialized .slick-slide {
    display: block;
  }
  .slick-vertical.slick-slide {
    display: block;
    height: auto;
    border: 1px solid transparent;
  }
  .slick-arrow.slick-hidden {
    display: none;
  }
`;

const CarouselContainerTablet = styled(CarouselContainerMobile)`
  @media (min-width: 768px) {
    width: 640px;
    .slick-slide img {
      max-height: 362px;
      max-width: 640px;
    }
    .slick-next:before,
    .slick-prev:before {
      font-size: 64px;
    }
  }
`;

const CarouselContainerDesktop = styled(CarouselContainerTablet)`
  @media (min-width: 1025px) {
    width: 712px;
    .slick-slide img {
      max-height: 400px;
      max-width: 712px;
    }
    .slick-next:before,
    .slick-prev:before {
      font-size: 144px;
    }
  }
`;

const CarouselContainer = styled(CarouselContainerDesktop)``;

export default CarouselContainer;

/*# sourceMappingURL=slick.min.css.map */
