import React, { useState, useEffect } from "react";
import Text from "../../components/Text/Text";
import { Grid } from "@mui/material";
import { colors, fontSize, fontWeight } from "../../util/theme";

// Import Icons
import BmwSection from "../../Templates/bmw_section/BmwSection";

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
// ----------------- Styles -----------------
// mala promena u backend
const HomePage = () => {
  return (
    <>
      <Grid container direction="row">
        <Grid item md={12} lg={12}>
          <Text style={textStyle.mainHeader}>BMW - Talib's site</Text>
        </Grid>
      </Grid>

      <BmwSection />
    </>
  );
};

export default HomePage;
