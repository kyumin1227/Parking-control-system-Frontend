import { Grid2, Typography } from "@mui/material";
import { useTheme } from "styled-components";
import DonutChart from "./chart/ApexChart";
import StatusIconAndText from "./StatusIconAndText";
import { ParkingsType } from "../../../types";
import { StrokedTypography } from "../../../assets/theme";

/** 왼쪽 위의 전체 주차 정보 ~ 도넛 차트 까지 */
const AllStatus = ({ parking }: ParkingsType) => {
  const theme = useTheme();

  let parkingLen = 0;
  let targetLen = 0;
  let emptyLen = 0;

  Object.values(parking).forEach((value) => {
    value.status === "occupied" ? parkingLen++ : value.status === "target" ? targetLen++ : emptyLen++;
  });

  const series: [number, number, number] = [parkingLen, targetLen, emptyLen];

  return (
    <>
      <Grid2 mt={2}>
        {/* 주차, 공차 정보 */}
        <Grid2 container spacing={2}>
          <Grid2 size={6} display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Typography fontWeight={700} fontSize={40} color={theme.colors.orange}>
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
              <StrokedTypography fontWeight={700} fontSize={80} color={theme.colors.orange}>
                {parkingLen}
              </StrokedTypography>
            </Grid2>
          </Grid2>
          <Grid2 size={6} display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Typography fontWeight={700} fontSize={40} color={theme.colors.green}>
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
              <StrokedTypography fontWeight={700} fontSize={80} color={theme.colors.green}>
                {targetLen + emptyLen}
              </StrokedTypography>
            </Grid2>
          </Grid2>
        </Grid2>
        {/* 주차, 주차중, 공차 아이콘 & 도넛 차트 */}
        <Grid2 container height={"100%"} mt={5}>
          <Grid2 size={5} container display={"flex"}>
            <StatusIconAndText color={theme.colors.orange} text="주차" />
            <StatusIconAndText color={theme.colors.purple} text="주차중" />
            <StatusIconAndText color={theme.colors.green} text="공차" />
          </Grid2>
          <Grid2 size={7} position={"relative"}>
            <DonutChart series={series} />
            <Grid2
              position={"absolute"}
              top={60}
              right={5}
              display={"flex"}
              justifyContent={"center"}
              sx={{ width: "170px", height: "70px" }}
            >
              <Grid2 display={"flex"} ml={1}>
                <Typography lineHeight={1} fontSize={70} color={theme.colors.orange}>
                  {((parkingLen / (parkingLen + targetLen + emptyLen)) * 100).toFixed(0)}
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
