import React from "react";

export const CardMedia = (props: { images: string[] }) => {
  const [currentImage, setCurrentImage] = React.useState(1);

  React.useEffect(() => {
    setTimeout(() => {
      if (currentImage == props.images.length) {
        setCurrentImage(1);
      } else {
        setCurrentImage(currentImage + 1);
      }
    }, 4000);
  }, [currentImage]);

  return (
    <div className="card-media">
      {props.images?.map((p, index) => (
        <img
          className={currentImage == index + 1 ? "show" : "hide"}
          key={index}
          src={p}
        />
      ))}
    </div>
  );
};
