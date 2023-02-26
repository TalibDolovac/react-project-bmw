import React from "react";
import Text from "../../components/Text/Text";
import { colors, fontSize, fontWeight } from "../../util/theme";

const AboutPage = () => {
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
        }}
      >
        BMW - Talib's site
      </Text>
      <Text
        style={{
          margin: "15px 0 0 0",
          padding: "20px 10%",
          letterSpacing: "1px",
          color: colors.white,
          fontWeight: fontWeight.mediumBold,
          backgroundColor: colors.accentColor,
        }}
      >
        Welcome to my website dedicated to BMW lovers! My website generates
        random images of BMW cars and provides information about the selected
        model. With just one click on the model name button, you can get
        detailed information about the selected car, including its
        specifications, features, and more. Whether you are a BMW enthusiast or
        just looking for information about your favorite BMW model, my website
        has got you covered. I hope you enjoy using my website and learning more
        about BMW cars!
      </Text>
    </>
  );
};

export default AboutPage;
