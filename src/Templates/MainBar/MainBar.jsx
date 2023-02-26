import React from "react";
import CustomDiv from "../../components/CustomDiv/CustomDiv";
import { colors, fontSize } from "../../util/theme";
import { Grid } from "@mui/material";
import bmw from "../../assets/images/Logo/bmw.png";
import { Link } from "react-router-dom";

// Material ui icons
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";

const iconStyle = {
  color: colors.secondColor,
};

const textStyle = {
  color: colors.white,
};

const LinkStyle = {
  textDecoration: "none",
  display: "flex",
  gap: "3px",
};

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
        <span style={textStyle}>Home</span>
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
        <span style={textStyle}>About</span>
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
        <span style={textStyle}>Contact</span>
      </Link>
    </CustomDiv>
  </CustomDiv>
);

const MainBar = () => {
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

export default MainBar;
