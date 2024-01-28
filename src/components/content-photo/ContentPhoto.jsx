import React from "react";
import avat_800 from "../../util/image/avat_800.jpg";
import styles from "./contentPhoto.module.css";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "@mui/material/Link";

const ContentPhoto = () => {
  return (
    <div className={styles.imageBlock}>
      <div className={styles.imageCover}>
        <img src={avat_800} alt="S" className={styles.image} />
        <div className={styles.imageShadow}></div>
      </div>
      <div className={styles.imageInfo}>
        <h3 className={styles.imageTitle} color="secondary">
          Aleksandr Yamshchikov
        </h3>
        <p className={styles.imageSubtitle}>Frontend Developer</p>
        <ul className={styles.imageSocialLinks}>
          <li className={styles.listItem}>
            <Link href="#" className={styles.link}>
              <TelegramIcon color="secondary" />
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href="#" className={styles.link}>
              <GitHubIcon color="secondary" />
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href="#" className={styles.link}>
              <LinkedInIcon color="secondary" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContentPhoto;
