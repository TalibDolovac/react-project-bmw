import React, { useState } from "react";
import CustomDiv from "../../components/CustomDiv/CustomDiv";
import { colors, fontSize, fontWeight } from "../../util/theme";
import { Grid } from "@mui/material";
import bmw from "../../assets/images/Logo/bmw.png";
import { Link } from "react-router-dom";
import { getScreenWidth } from "../../util/helpers";
import Text from "../../components/Text/Text";

// Material ui icons
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

// Styles

const iconStyle = {
  color: colors.secondColor,
};

const textStyle = {
  LG: {
    color: colors.white,
  },
  SM: {
    color: colors.white,
    padding: "15px",
    textTransform: "uppercase",
    fontWeight: fontWeight.mediumBold,
  },
};

const LinkStyle = {
  textDecoration: "none",
  display: "flex",
  gap: "3px",
};

// Styles

const LeftMenu = () => (
  <CustomDiv
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      height: " 100%",
    }}
  >
    <Link to="/">
      <img
        src={bmw}
        alt="Logo"
        style={{ width: 65, height: "auto", cursor: "pointer" }}
      />
    </Link>
  </CustomDiv>
);

const RightMenu = () => (
  <CustomDiv
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      height: "100%",
    }}
  >
    <CustomDiv
      style={{
        display: "flex",
        margin: "0px 10px",
      }}
    >
      <Link to="/" style={LinkStyle}>
        <HomeIcon style={iconStyle} />
        <span style={textStyle.LG}>Home</span>
      </Link>
    </CustomDiv>
    <CustomDiv
      style={{
        display: "flex",
        margin: "0px 10px",
      }}
    >
      <Link to="/about" style={LinkStyle}>
        <InfoIcon style={iconStyle} />
        <span style={textStyle.LG}>About</span>
      </Link>
    </CustomDiv>
    <CustomDiv
      style={{
        display: "flex",
        margin: "0px 10px",
      }}
    >
      <Link to="/contact" style={LinkStyle}>
        <ContactSupportIcon style={iconStyle} />
        <span style={textStyle.LG}>Contact</span>
      </Link>
    </CustomDiv>
  </CustomDiv>
);

const MainBarSM = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <CustomDiv
      style={{
        backgroundColor: colors.accentColor,
        width: "100%",
        height: "80px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0px 10px",
      }}
    >
      <LeftMenu />
      <CustomDiv>
        {open ? (
          <CloseIcon
            onClick={handleToggle}
            style={{ fontSize: fontSize.xLarge, color: colors.white }}
          />
        ) : (
          <MenuIcon
            onClick={handleToggle}
            style={{ fontSize: fontSize.xLarge, color: colors.white }}
          />
        )}
      </CustomDiv>
      {open && (
        <CustomDiv
          style={{
            position: "absolute",
            top: "80px",
            left: "0",
            right: "0",
            backgroundColor: colors.accentColor,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Link to="/" style={LinkStyle}>
            <Text style={textStyle.SM}>Home</Text>
          </Link>
          <Link to="/about" style={LinkStyle}>
            <Text style={textStyle.SM}>About</Text>
          </Link>
          <Link to="/contact" style={LinkStyle}>
            <Text style={textStyle.SM}>Contact</Text>
          </Link>
        </CustomDiv>
      )}
    </CustomDiv>
  );
};

const MainBarLG = () => {
  return (
    <CustomDiv
      style={{
        backgroundColor: colors.accentColor,
        width: "100%",
        height: "80px",
        display: "flex",
        padding: "0px 10%",
      }}
    >
      <Grid container direction="row">
        <Grid item md={6} lg={6}>
          <LeftMenu />
        </Grid>
        <Grid item md={6} lg={6}>
          <RightMenu />
        </Grid>
      </Grid>
    </CustomDiv>
  );
};

const MainBar = () => {
  const screenWidth = getScreenWidth();

  return screenWidth === "MD" || screenWidth === "LG" ? (
    <MainBarLG />
  ) : (
    <MainBarSM />
  );
};

export default MainBar;
