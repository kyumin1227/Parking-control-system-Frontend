import { Grid2, Typography } from "@mui/material";
import { useTheme } from "styled-components";
import CarInfo from "./CarInfo";
import CarInfoExit from "./CarInfoExit";
import { DataType } from "../../../types";

type CarsInfoProps = {
  text: string;
  data: DataType;
};

/** 좌측 주차 진행 중 또는 출차 중인 차량 정보 */
const CarsInfo = ({ text, data }: CarsInfoProps) => {
  const theme = useTheme();

  console.log(data);

  return (
    <>
      <Grid2
        height={"463.59px"}
        marginTop={2.5}
        sx={{ backgroundColor: `${theme.colors.grey}`, overflowY: "hidden" }}
        p={2.5}
        border={"5px solid #AA2931"}
      >
        <Typography
          color="#E1A609"
          fontSize={40}
          display={"flex"}
          justifyContent={"center"}
          pb={1}
          borderBottom="1px solid #E1A609"
        >
          {text}
        </Typography>
        {text === "주차 진행 중"
          ? Object.values(data.data.parking).map((value) => value.status === "target" && <CarInfo data={value} />)
          : Object.values(data.data.moving).map((value) => value.status === "exit" && <CarInfoExit data={value} />)}
      </Grid2>
    </>
  );
};

export default CarsInfo;
