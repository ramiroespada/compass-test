import React from "react";
import { ListingInfo } from "../utils/Types";

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const CardInfo = (props: { info: ListingInfo }) => {
  function Address({ address }) {
    return address ? <span>{address}</span> : null;
  }

  function City({ city }) {
    return city ? <span>{city}</span> : null;
  }

  function State({ state }) {
    return state ? <span>{state}</span> : null;
  }

  function ZipCode({ zipCode }) {
    return zipCode ? <span>{zipCode}</span> : null;
  }

  function Price({ price }) {
    return price ? <span>${numberWithCommas(price)}</span> : null;
  }

  function Bedrooms({ bedrooms }) {
    return bedrooms ? <span>{bedrooms}</span> : null;
  }

  function Bathrooms({ bathrooms }) {
    return bathrooms ? <span>{bathrooms}</span> : null;
  }

  function Fav({ fav }) {
    return fav ? (
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 17 17"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        className="star-selected"
      >
        <g>
          <path d="M16.647 7.017h-6.225l-1.922-5.92-1.923 5.92h-6.224l5.035 3.658-1.922 5.92 5.034-3.659 5.035 3.659-1.922-5.92 5.034-3.658zM11.633 13.977l-3.133-2.278-3.133 2.277 1.197-3.685-3.133-2.274h3.873l1.196-3.684 1.196 3.684h3.873l-3.133 2.275 1.197 3.685z"></path>{" "}
        </g>
      </svg>
    ) : (
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 17 17"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        className="star"
      >
        <g>
          <path d="M16.647 7.017h-6.225l-1.922-5.92-1.923 5.92h-6.224l5.035 3.658-1.922 5.92 5.034-3.659 5.035 3.659-1.922-5.92 5.034-3.658zM11.633 13.977l-3.133-2.278-3.133 2.277 1.197-3.685-3.133-2.274h3.873l1.196-3.684 1.196 3.684h3.873l-3.133 2.275 1.197 3.685z"></path>{" "}
        </g>
      </svg>
    );
  }

  return (
    <div className="card-info">
      <div className="card-info-fav">
        <Fav fav={props.info.isFavorite} />
      </div>
      <div className="card-info-price">
        <Price price={props.info.price} />
      </div>
      <div className="card-info-caption">
        <Bedrooms bedrooms={props.info.bedrooms} />
        <Bathrooms bathrooms={props.info.bathrooms} />
      </div>
      <div className="card-info-location">
        <Address address={props.info.address} />
        <City city={props.info.city} />
        <State state={props.info.state} />
        <ZipCode zipCode={props.info.zipCode} />
      </div>
    </div>
  );
};
