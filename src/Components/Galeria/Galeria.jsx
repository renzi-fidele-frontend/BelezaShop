import React from "react";

//  Light gallery
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const Galeria = () => {
   return (
      <div id={styles.ct}>
         <LightGallery />
      </div>
   );
};

export default Galeria;
