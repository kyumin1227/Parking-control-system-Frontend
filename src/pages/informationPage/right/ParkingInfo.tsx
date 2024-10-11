import { Grid2, Typography } from "@mui/material";
import { useTheme } from "styled-components";

const ParkingInfo = () => {
  const theme = useTheme();
  return (
    <>
      <Grid2 width={"158.172px"} height={"100%"} ml={1} sx={{ backgroundColor: theme.colors.grey }}>
        <Typography>A1</Typography>
      </Grid2>
    </>
  );
};

export default ParkingInfo;
