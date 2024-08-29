import SimpleImageSlider from "react-simple-image-slider";

export const ImageSlider = ({ data }) => {
  const formattedImages = data?.images.map((el, index) => ({
    url: el
  }));

  return (

    <SimpleImageSlider
      // width={896}
      // height={504}
      images={formattedImages}
      showBullets={true}
      showNavs={true}
    />

  );
}