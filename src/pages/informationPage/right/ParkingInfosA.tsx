import { Grid2, Typography } from "@mui/material";
import ParkingInfo from "./ParkingInfo";
import { useEffect } from "react";
import { useTheme } from "styled-components";

const ParkingInfosA = ({ data }: any) => {
  const theme = useTheme();
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <>
      <Grid2 height={221.5} width={"100%"} display={"flex"}>
        {data.map((item: any) => (
          <ParkingInfo key={item[0]} />
        ))}
        <Grid2
          ml={1}
          width={"324.344px"}
          sx={{ backgroundColor: theme.colors.grey4 }}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-around"}
          pl={5}
        >
          <Grid2 display={"flex"}>
            <img src="/주차 진행중.svg" width={50} />
            <Typography fontSize={35} color={theme.colors.white} ml={1}>
              주차 진행중
            </Typography>
          </Grid2>
          <Grid2 display={"flex"}>
            <img src="/주차 가능.svg" width={50} />
            <Typography fontSize={35} color={theme.colors.white} ml={1}>
              주차 가능
            </Typography>
          </Grid2>
          <Grid2 display={"flex"}>
            <img src="/주차 완료.svg" width={50} />
            <Typography fontSize={35} color={theme.colors.white} ml={1}>
              주차 완료
            </Typography>
          </Grid2>
        </Grid2>
      </Grid2>
    </>
  );
};

export default ParkingInfosA;
