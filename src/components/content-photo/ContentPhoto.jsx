import React from "react";
import avat_800 from "../../util/image/avat_800.jpg";
import "./contentPhoto.scss";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "@mui/material/Link";

const ContentPhoto = () => {
  return (
    <div className='imageBlock'>
      <div className='imageCover'>
        <img src={avat_800} alt="S" className='image' />
        <div className='imageShadow'></div>
      </div>
      <div className='imageInfo'>
        <h3 className='imageTitle' color="secondary">
          Aleksandr Yamshchikov
        </h3>
        <p className='imageSubtitle'>Frontend Developer</p>
        <ul className='imageSocialLinks'>
          <li className='listItem'>
            <Link href="#" className='link'>
              <TelegramIcon color="secondary" />
            </Link>
          </li>
          <li className='listItem'>
            <Link href="#" className='link'>
              <GitHubIcon color="secondary" />
            </Link>
          </li>
          <li className='listItem'>
            <Link href="#" className='link'>
              <LinkedInIcon color="secondary" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContentPhoto;
