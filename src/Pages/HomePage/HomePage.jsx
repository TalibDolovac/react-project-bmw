import React, { useState, useEffect } from "react";
import Text from "../../components/Text/Text";
import { Grid } from "@mui/material";
import CustomDiv from "../../components/CustomDiv/CustomDiv";
import { colors, fontSize, fontWeight } from "../../util/theme";

// Import Icons
import CloseIcon from "@mui/icons-material/Close";

// ----------------- Styles -----------------
const textStyle = {
  mainHeader: {
    fontSize: "40px",
    textAlign: "center",
    padding: "15px 0 0 0",
    color: colors.secondColor,
    letterSpacing: "8px",
    fontWeight: fontWeight.boldPlus,
    margin: "15px 0 0 0",
  },
};

const divStyle = {
  imageDiv: {
    position: "relative",
    textAlign: "center",
  },
  popupModal: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.8)",
    zIndex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

const buttonStyles = {
  imageButton: {
    position: "absolute",
    top: "25px",
    left: "45px",
    padding: "10px 30px",
    color: `rgba(${colors.secondColorRGB}, 1)`,
    background: `rgba(${colors.whiteRGB}, 0.3)`,
    border: "none",
    borderRadius: "10px",
    fontSize: fontSize.xLarge,
    cursor: "pointer",
  },
  popupModalButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    border: "none",
    background: "transparent",
    color: colors.secondColor,
    cursor: "pointer",
  },
};

const imageStyle = {
  width: 300,
  height: "auto",
  margin: "15px 0 15px 0",
  borderRadius: "6px",
};

// ----------------- Styles -----------------

const HomePage = () => {
  const [imageSrcs, setImageSrcs] = useState([]);
  const [carBio, setCarBio] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleButtonClick = (name) => {
    fetch(`http://localhost:5000/car_bio/${name}`)
      .then((response) => response.json())
      .then((data) => {
        setCarBio(data.bio);
        setIsModalOpen(true);
      });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Grid container direction="row">
        <Grid item md={12} lg={12}>
          <Text style={textStyle.mainHeader}>BMW - Talib's site</Text>
        </Grid>
      </Grid>

      <Grid container direction="row">
        {imageSrcs.map((source, index) => (
          <Grid item md={3} lg={3} key={index}>
            <CustomDiv style={divStyle.imageDiv}>
              <img src={source.src} alt={source.alt} style={imageStyle} />
              <button
                style={buttonStyles.imageButton}
                onClick={() => handleButtonClick(source.name)}
              >
                {source.name}
              </button>
            </CustomDiv>
          </Grid>
        ))}
      </Grid>

      <CustomDiv style={{ display: isModalOpen ? "block" : "none" }}>
        <Grid container direction="row">
          <Grid item md={12} lg={12}>
            <CustomDiv style={divStyle.popupModal}>
              <Text style={{ fontSize: "50px", color: colors.secondColor }}>
                {carBio}
              </Text>
              <button
                onClick={handleCloseModal}
                style={buttonStyles.popupModalButton}
              >
                <CloseIcon style={{ fontSize: fontSize.xLarge }} />
              </button>
            </CustomDiv>
          </Grid>
        </Grid>
      </CustomDiv>
    </>
  );
};

export default HomePage;
