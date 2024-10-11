import { Grid2, Typography } from "@mui/material";
import styled, { useTheme } from "styled-components";
import CarsInfo from "./left/CarsInfo";
import ParkingInfos from "./right/ParkingInfos";

const Information = () => {
  const theme = useTheme();

  return (
    <>
      <Grid2 container height={"100%"} sx={{ border: `20px solid ${theme.colors.black}` }}>
        <Grid2 size={3} sx={{ borderRight: `20px solid ${theme.colors.black}` }}>
          <InformationTypography
            fontSize={76}
            color={theme.colors.yello}
            height={"7%"}
            lineHeight={"76px"}
            display={"flex"}
            justifyContent={"center"}
          >
            Information
          </InformationTypography>
          <Grid2 height={"93%"}>
            <CarsInfo />
            <CarsInfo />
          </Grid2>
        </Grid2>
        <Grid2 size={9}>
          <ParkingInfos />
        </Grid2>
      </Grid2>
    </>
  );
};

export default Information;

const InformationTypography = styled(Typography)`
  font-family: "Exo 2", sans-serif !important;
`;
