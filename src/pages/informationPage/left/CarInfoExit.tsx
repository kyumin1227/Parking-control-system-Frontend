import { Grid2, Typography } from "@mui/material";
import { useTheme } from "styled-components";
import { MovingDataType } from "../../../types";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

interface CarInfoProps {
  data: MovingDataType;
}

function formatTime(timestamp: number): string {
  return new Date(Math.floor(timestamp * 1000)).toISOString().substr(11, 8);
}

const CarInfo = ({ data }: CarInfoProps) => {
  const theme = useTheme();

  return (
    <>
      <Grid2 container mt={1.5} p={1} height={105.6} sx={{ backgroundColor: "#395485" }} spacing={1}>
        <Grid2
          size={2}
          sx={{ backgroundColor: "#F5F2E9" }}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <ExitToAppIcon fontSize={"large"} sx={{ color: "#395485" }} />
          <Typography fontWeight={700} color="#395485" mt={0.5}>
            EXIT
          </Typography>
        </Grid2>
        <Grid2 size={10} display={"flex"} flexDirection={"column"} justifyContent={"space-around"}>
          <Grid2 display={"flex"} marginLeft={1}>
            <img src="/차량 번호.svg" width={26} />
            {/* 리눅스 환경에서 글자가 계속 밀려서 18로 수정 */}
            <Typography ml={1} fontSize={18} fontWeight={700} color={theme.colors.white}>
              차량 번호
            </Typography>
            <Grid2 width={"200px"} display={"flex"} justifyContent={"center"}>
              <Typography fontSize={30} height={20} color={theme.colors.white2} sx={{ lineHeight: "20px" }}>
                {data.car_number}
              </Typography>
            </Grid2>
          </Grid2>
          <Grid2 display={"flex"} marginLeft={1}>
            <img src="/입장 시간.svg" width={26} />
            <Typography ml={1} fontSize={18} fontWeight={700} color={theme.colors.white}>
              입장 시간
            </Typography>
            <Grid2 width={"200px"} display={"flex"} justifyContent={"center"}>
              <Typography fontSize={30} height={20} color={theme.colors.white2} sx={{ lineHeight: "26px" }}>
                {formatTime(Number(data.entry_time))}
              </Typography>
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
    </>
  );
};

export default CarInfo;
