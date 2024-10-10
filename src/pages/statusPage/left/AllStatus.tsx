import { Grid2, Typography } from "@mui/material";
import { useTheme } from "styled-components";
import DonutChart from "./chart/ApexChart";
import StatusIconAndText from "./StatusIconAndText";
import { ParkingAreasType } from "../../../types";

const AllStatus = ({ parking }: ParkingAreasType) => {
  const theme = useTheme();
  const series: [number, number, number] = [44, 55, 41];

  return (
    <>
      <Grid2 mt={2}>
        <Grid2 container spacing={2}>
          <Grid2 size={6} display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Typography fontSize={40} color={theme.colors.orange}>
              주차
            </Typography>
            <Grid2
              width={"100%"}
              height={"120px"}
              display={"flex"}
              justifyContent={"center"}
              sx={{ backgroundColor: theme.colors.black }}
              mt={1}
            >
              <Typography fontSize={80} color={theme.colors.orange}>
                12
              </Typography>
            </Grid2>
          </Grid2>
          <Grid2 size={6} display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Typography fontSize={40} color={theme.colors.green}>
              공차
            </Typography>
            <Grid2
              width={"100%"}
              height={"120px"}
              display={"flex"}
              justifyContent={"center"}
              sx={{ backgroundColor: theme.colors.black }}
              mt={1}
            >
              <Typography fontSize={80} color={theme.colors.green}>
                12
              </Typography>
            </Grid2>
          </Grid2>
        </Grid2>
        <Grid2 container height={"100%"} mt={3}>
          <Grid2 size={5} container display={"flex"}>
            <StatusIconAndText color={theme.colors.orange} text="주차" />
            <StatusIconAndText color={theme.colors.purple} text="주차중" />
            <StatusIconAndText color={theme.colors.green} text="공차" />
          </Grid2>
          <Grid2 size={7} position={"relative"}>
            <DonutChart series={series} />
            <Grid2
              position={"absolute"}
              top={65}
              right={30}
              display={"flex"}
              justifyContent={"center"}
              sx={{ width: "170px", height: "70px" }}
            >
              <Grid2 display={"flex"} ml={1}>
                <Typography lineHeight={1} fontSize={70} color={theme.colors.orange}>
                  54
                </Typography>
                <Typography fontSize={30} color={theme.colors.orange} sx={{ display: "flex", alignItems: "end" }}>
                  %
                </Typography>
              </Grid2>
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
    </>
  );
};

export default AllStatus;
