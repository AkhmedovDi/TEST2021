import React, { useRef, useCallback, useState, useEffect } from 'react';
import Slider from 'react-slick';
import tempImage from '../../images/sliderImage.png';
import sliderArrow from '../../images/sliderControl.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './player.scss';

const CameraList = ({ cameras, lang, setSelectedCamera, id }) => {
  const [lastElShow, setLastElShow] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const slider = useRef(null);

  const PrevArrow = ({ onClick }) => {
    return (
      <div onClick={onClick} className="prevArrow">
        <div style={{ width: 6, backgroundColor: '#0ACC79' }} />
        <div className="arrowWrapper">
          <img src={sliderArrow} alt="arrow" />
        </div>
      </div>
    );
  };

  useEffect(() => {
    if (slider.current) {
      slider.current.slickGoTo(0);
    }
  }, [id]);

  const NextArrow = ({ onClick }) => {
    return (
      <div
        onClick={(e) => {
          if (!lastElShow) {
            onClick(e);
          }
        }}
        className="nextArrow"
      >
        <div style={{ width: 6, backgroundColor: '#0ACC79' }} />
        <div className="arrowWrapper">
          <img
            style={{ transform: 'rotate(-180deg)' }}
            src={sliderArrow}
            alt="arrow"
          />
        </div>
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: false,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    afterChange: (current) => {
      setActiveSlide(current);
    },
  };

  const observer = useRef();
  const lastSlideElementRef = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !lastElShow && activeSlide) {
          setLastElShow(true);
        } else {
          setLastElShow(false);
        }
      });
      if (node) observer.current.observe(node);
    },
    // eslint-disable-next-line
    [activeSlide]
  );

  return (
    <div className="cameras">
      <Slider {...settings} ref={slider}>
        {[...cameras.data, 1].map((camera, __, arr) => {
          if (arr.length === __ + 1) {
            return (
              <div
                key={__}
                ref={lastSlideElementRef}
                style={{ outline: 'none', width: 1, height: 1 }}
              ></div>
            );
          }
          return (
            <div
              key={__}
              style={{ outline: 'none' }}
              onClick={() => {
                setSelectedCamera(camera);
              }}
            >
              <div className="camera-link">
                <div className="camera">
                  <img
                    src={camera?.img ? camera?.img : tempImage}
                    alt="thumbnail"
                  />
                  <div className="camera-number">
                    <p>{camera[lang]}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default CameraList;
