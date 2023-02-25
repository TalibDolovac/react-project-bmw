import React from "react";
import CustomDiv from "../../components/CustomDiv/CustomDiv";
import { colors, fontSize } from "../../util/theme";
import { Grid } from "@mui/material";
import bmw from "../../assets/images/bmw.png";
import Text from "../../components/Text/Text";

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

const LeftMenu = () => (
  <CustomDiv
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      height: " 100%",
    }}
  >
    <img src={bmw} alt="Logo" style={{ width: 65, height: "auto" }} />
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
      <HomeIcon style={iconStyle} />
      <Text style={textStyle}>Home</Text>
    </CustomDiv>
    <CustomDiv
      style={{
        display: "flex",
        margin: "0px 10px",
      }}
    >
      <InfoIcon style={iconStyle} />
      <Text style={textStyle}>About</Text>
    </CustomDiv>
    <CustomDiv
      style={{
        display: "flex",
        margin: "0px 10px",
      }}
    >
      <ContactSupportIcon style={iconStyle} />
      <Text style={textStyle}>Contact</Text>
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
