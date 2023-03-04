import React, { useState, useEffect } from "react";
import Text from "../../components/Text/Text";
import { Grid } from "@mui/material";
import CustomDiv from "../../components/CustomDiv/CustomDiv";
import CustomButton from "../../components/CustomButton/CustomButton";
import { colors, fontSize, fontWeight } from "../../util/theme";

const containerStyle = {
  position: "relative",
};

const buttonStyle = {
  position: "absolute",
  top: "5px",
  left: "5px",
  padding: "10px 30px",
  color: `rgba(${colors.secondColorRGB}, 1)`,
  background: `rgba(${colors.whiteRGB}, 0.3)`,
  border: "none",
  borderRadius: "10px",
  fontSize: fontSize.xLarge,
  cursor: "pointer",
};

const imageStyle = {
  width: 300,
  height: "auto",
  marginBottom: "8px",
  borderRadius: "5px",
};

const HomePage = () => {
  const [imageSrcs, setImageSrcs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/random_bmw_images")
      .then((response) => response.json())
      .then((data) => {
        const sources = data.urls.map((url) => ({
          src: `http://localhost:5000${url}`,
          alt: "bmw-image",
          name: url.split("/")[2].split(".")[0],
        }));
        setImageSrcs(sources);
      });
  }, []);

  return (
    <>
      <Text
        style={{
          fontSize: "40px",
          textAlign: "center",
          padding: "15px 0 0 0",
          color: colors.secondColor,
          letterSpacing: "8px",
          fontWeight: fontWeight.boldPlus,
          margin: "15px 0 0 0",
        }}
      >
        BMW - Talib's site
      </Text>

      <Grid container direction="row">
        {imageSrcs.map((source, index) => (
          <Grid item md={3} lg={3} key={index}>
            <CustomDiv style={containerStyle}>
              <img src={source.src} alt={source.alt} style={imageStyle} />
              <CustomButton style={buttonStyle}>{source.name}</CustomButton>
            </CustomDiv>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default HomePage;
