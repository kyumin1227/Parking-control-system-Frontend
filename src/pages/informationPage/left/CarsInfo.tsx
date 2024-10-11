import { Grid2, Typography } from "@mui/material";
import { useTheme } from "styled-components";
import CarInfo from "./CarInfo";
import { DataType } from "../../../types";

type CarsInfoProps = {
  text: string;
  data: DataType;
};

/** 좌측 주차 진행 중 또는 출차 중인 차량 정보 */
const CarsInfo = ({ text, data }: CarsInfoProps) => {
  const theme = useTheme();
  return (
    <>
      <Grid2
        height={"50%"}
        borderTop={`20px solid ${theme.colors.black}`}
        sx={{ backgroundColor: `${theme.colors.grey}` }}
        p={2.5}
      >
        <Typography
          color={theme.colors.white}
          fontSize={40}
          display={"flex"}
          justifyContent={"center"}
          pb={1}
          borderBottom="1px solid white"
        >
          {text}
        </Typography>
        {/* TODO 출차 중인 차량 계산 */}
        {/* {text === "주차 진행 중"
          ? Object.values(data.data.parking).map((value) => value.status === "target" && <CarInfo data={value} />)
          : Object.values(data.data.moving).map((value) => value.status === "target" && <CarInfo data={value} />)} */}
      </Grid2>
    </>
  );
};

export default CarsInfo;
