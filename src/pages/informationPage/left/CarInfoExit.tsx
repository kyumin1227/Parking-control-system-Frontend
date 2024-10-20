import { Grid2, Typography } from "@mui/material";
import { useTheme } from "styled-components";
import { MovingDataType } from "../../../types";

interface CarInfoProps {
  data: MovingDataType;
}

const CarInfo = ({ data }: CarInfoProps) => {
  const theme = useTheme();

  return (
    <>
      <Grid2 container mt={1.5} p={1} height={105.6} sx={{ backgroundColor: theme.colors.grey3 }} spacing={1}>
        <Grid2
          size={2}
          sx={{ backgroundColor: theme.colors.grey }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography
            color={theme.colors.white}
            fontSize={35}
            sx={{
              // 세로 표시
              writingMode: "vertical-rl",
              textOrientation: "upright",
            }}
          >
            EXIT
          </Typography>
        </Grid2>
        <Grid2 size={10} display={"flex"} flexDirection={"column"} justifyContent={"space-around"}>
          <Grid2 display={"flex"}>
            <img src="/차량 번호.png" width={32} />
            <Typography ml={1} fontSize={20}>
              차량 번호
            </Typography>
            <Grid2 width={"211px"} display={"flex"} justifyContent={"center"}>
              <Typography fontSize={30} height={20} color={theme.colors.white2} sx={{ lineHeight: "20px" }}>
                {data.car_number}
              </Typography>
            </Grid2>
          </Grid2>
          <Grid2 display={"flex"}>
            <img src="/입장 시간.png" width={32} />
            <Typography ml={1} fontSize={20}>
              입장 시간
            </Typography>
            <Grid2 width={"211px"} display={"flex"} justifyContent={"center"}>
              <Typography fontSize={30} height={20} color={theme.colors.white2} sx={{ lineHeight: "20px" }}>
                {/* 시간 형식 변경 필요 */}
                {data.entry_time}
              </Typography>
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
    </>
  );
};

export default CarInfo;
