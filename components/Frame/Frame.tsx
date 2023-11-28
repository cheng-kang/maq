import React from "react";
import styles from "./Frame.module.css";

const Frame = () => {
  return (
    <ul className={styles.Frames}>
      <li className={styles.Frame}>
        <a href="http://www.flickr.com/photos/55582829@N05/7617079532/in/faves-sealour/">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/maianqiao.appspot.com/o/sunset%2FIMG_4844.JPG?alt=media&token=595318fb-17e2-4aca-afc4-2ddd1afbc955"
            alt="Hanafubuki - Cherry blossom blizzard"
          />
        </a>
      </li>
    </ul>
  );
};

export default Frame;
