import { Grid2, Typography } from "@mui/material";
import styled, { useTheme } from "styled-components";
import CarsInfo from "./left/CarsInfo";
import ParkingInfos from "./right/ParkingInfos";
import { useState } from "react";
import { DataType } from "../../types";
import GetData from "../../api/socket";

const Information = () => {
  const theme = useTheme();

  const [data, setData] = useState<DataType | null>(null);
  const [prevData, setPrevData] = useState<DataType | null>(null);

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
            {<CarsInfo text="주차 진행 중" data={data || { data: { parking: {}, moving: {}, time: 0 } }} />}
            {<CarsInfo text="출차 중" data={data || { data: { parking: {}, moving: {}, time: 0 } }} />}
          </Grid2>
        </Grid2>
        <Grid2 size={9}>
          <ParkingInfos data={data || { data: { parking: {}, moving: {}, time: 0 } }} />
        </Grid2>
      </Grid2>
      <GetData data={data} setData={setData} prevData={prevData} setPrevData={setPrevData} />
    </>
  );
};

export default Information;

const InformationTypography = styled(Typography)`
  font-family: "Exo 2", sans-serif !important;
`;
