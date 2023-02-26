import React from "react";
import Text from "../../components/Text/Text";
import { colors, fontSize, fontWeight } from "../../util/theme";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const ContactPage = () => {
  return (
    <>
      <Text
        style={{
          margin: "70px 0 0 0 ",
          textAlign: "center",
          letterSpacing: "7px",
          fontWeight: fontWeight.mediumBold,
          fontSize: fontSize.xLarge,
          color: colors.secondColor,
        }}
      >
        Talib Dolovac Frontend Developer
      </Text>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Text
          style={{
            textAlign: "center",
            margin: "0 0 15px 0",
            color: colors.accentColor,
            fontSize: fontSize.large,
          }}
        >
          My Github
        </Text>
        <a href="https://github.com/TalibDolovac">
          <GitHubIcon
            style={{
              color: colors.secondColor,
              fontSize: fontSize.xLarge,
              marginRight: "10px",
            }}
          />
        </a>
      </div>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Text
          style={{
            textAlign: "center",
            margin: "0 0 15px 0",
            color: colors.accentColor,
            fontSize: fontSize.large,
          }}
        >
          My Email
        </Text>
        <a href="mailto:talibdolovac15@gmail.com">
          <EmailIcon
            style={{
              color: colors.secondColor,
              fontSize: fontSize.xLarge,
              marginRight: "10px",
            }}
          />
        </a>
        <Text
          style={{
            textAlign: "center",
            margin: "0 0 15px 0",
            color: colors.accentColor,
            fontSize: fontSize.large,
          }}
        >
          talibdolovac15@gmail.com
        </Text>
      </div>
    </>
  );
};

export default ContactPage;
