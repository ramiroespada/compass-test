import React from "react";
import { CardMedia } from "./CardMedia";
import { CardInfo } from "./CardInfo";
import { ListingInfo } from "../utils/Types";

export const ListingCard = (props: { info: ListingInfo }) => {
  function Media({ photos }) {
    if (photos.length >= 1) {
      return <CardMedia images={photos} />;
    } else {
      // TODO: Consider displaying fallback for missing image
      return <div className="card-media" />;
    }
  }

  return (
    <div className="listing-card">
      <Media photos={props.info.photos} />
      <CardInfo info={props.info} />
      {/*
		<div>{props.info.address}, {props.info.city}, {props.info.state}, {props.info.zipCode}</div>
		<div><img src={props.info?.agent?.avatar}/></div>
    <div>
    {props.info.photos?.map((p, index) => <img key={index} src={p}/>)}
    </div>
		 */}
    </div>
  );
};
