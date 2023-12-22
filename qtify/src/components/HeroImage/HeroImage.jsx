import React from "react";
import styles from "./HeroImage.module.css";
import { ReactComponent as Icon } from "../../assets/icon.svg";

function HeroImage() {
  return (
    <div className={styles.heroimage}>
      <div className={styles.insidehero}>
        <h1 className={styles.text}>
          100 Thousand songs, ad-free
          <span>
            <br />
          </span>
          Over thousand podcast episodes
        </h1>
        <Icon />
      </div>
    </div>
  );
}

export default HeroImage;
