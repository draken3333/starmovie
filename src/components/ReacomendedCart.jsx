import React from "react";
import littleCart from "../assets/images/littleCart.png";
const ReacomendedCart = () => {
  return (

      <div className="recomended-movie__card">
        <img
          className="recomended-movie__card-img"
          src={littleCart}
          alt="img"
        />

        <div className="recomended-movie__card-info">
          <div className="recomended-movie__card-info__name">Iron Man 3</div>
          <div className="recomended-movie__card-info__year">2021</div>
        </div>
        <div className="recomended-movie__card-rating">
          <div className="recomended-movie__card-rating__stars">
            <svg
              width="150"
              height="150"
              viewBox="0 0 150 150"
              fill="none"s
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.5696 63.933L14.3007 72.3388H23.1392L15.9887 77.5338L18.72 85.9396L11.5696 80.7446L4.41912 85.9396L7.15028 77.5338L0 72.3388H8.83841L11.5696 63.933Z"
                fill="#FF4F00"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M43.3767 63.933L46.1079 72.3388H54.9463L47.7958 77.5338L50.5272 85.9396L43.3767 80.7446L36.2262 85.9396L38.9574 77.5338L31.8071 72.3388H40.6455L43.3767 63.933Z"
                fill="#FF4F00"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M75.0373 63.933L77.7684 72.3388H86.6069L79.4564 77.5338L82.1877 85.9396L75.0373 80.7446L67.8868 85.9396L70.618 77.5338L63.4677 72.3388H72.3061L75.0373 63.933Z"
                fill="#FF4F00"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M106.695 63.933L109.426 72.3388H118.265L111.114 77.5338L113.846 85.9396L106.695 80.7446L99.5447 85.9396L102.276 77.5338L95.1256 72.3388H103.964L106.695 63.933Z"
                fill="#FF4F00"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M138.343 63.933L141.074 72.3388H149.912L142.762 77.5338L145.493 85.9396L138.343 80.7446L131.192 85.9396L133.923 77.5338L126.773 72.3388H135.612L138.343 63.933Z"
                fill="#FF4F00"
              />
            </svg>
          </div>
          <div className="recomended-movie__card-rating__imdb">7.9(3882)</div>
        </div>
      </div>

  );
};

export default ReacomendedCart;
