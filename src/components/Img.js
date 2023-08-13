import noPoster from '../assets/no-poster.png'
import React, { useState } from "react";
import {ImgSkeleton} from './skeleton'


function Img({ url }) {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setImageError(true);
    setIsLoading(false);
  };

  return (
    <div style={{ position: "relative", display:'flex', justifyContent:'center'}}>
      {isLoading && <ImgSkeleton style={{ position: "absolute", top: 0, left: 0, }} />}
      {imageError ? (
        <img src={noPoster} alt="No poster available" />
      ) : (
        <img
          alt=""
          src={"https://image.tmdb.org/t/p/original" + url}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      )
      }
    </div>
  );
}

export default Img;
