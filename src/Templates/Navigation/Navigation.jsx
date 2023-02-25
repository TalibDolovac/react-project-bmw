import React from "react";
import Grid from "@mui/material/Grid";
import MainBar from "../MainBar/MainBar";

const Navigation = () => {
  return (
    <Grid container direction="row" style={{ height: "100vh" }}>
      <MainBar />
    </Grid>
  );
};

export default Navigation;
