import React, { useEffect } from "react";
import graphimage from "../../images/graphimage.jpg";
import { init } from "ityped";
import { Typography, Card, CardContent, CardMedia } from "@material-ui/core";
import useStyles from "./style";
const HomeImage = () => {
  const classes = useStyles();

  useEffect(
    () =>
      init(document.querySelector("#typedText"), {
        showCursor: false,
        strings: [" Want to track or manage your expenses?"],
      }),

    []
  );
  return (
    <>
      <Card className={classes.card}>
        <div>
          <CardContent className={classes.content}>
            <div style={{ position: "relative" }}>
              <CardMedia
                component="img"
                className={classes.graphimage}
                image={graphimage}
              />
              <Typography
                variant="h2"
                id="typedText"
                className={classes.typedText}
              ></Typography>
              <Typography
                id="typedText2"
                className={classes.typedText2}
                variant="h4"
              >
                Tracksactions will help you by providing insights to analyze
                expense pattern better.
              </Typography>
            </div>
          </CardContent>
        </div>
      </Card>
    </>
  );
};

export default HomeImage;
