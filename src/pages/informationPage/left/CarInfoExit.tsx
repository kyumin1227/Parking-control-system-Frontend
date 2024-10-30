import { Grid2, Typography } from "@mui/material";
import { useTheme } from "styled-components";
import { MovingDataType } from "../../../types";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

interface CarInfoProps {
  data: MovingDataType;
}

function formatTime(timestamp: number): string {
  return new Date(timestamp * 1000).toISOString().substr(11, 8);
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
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <ExitToAppIcon fontSize={"large"} sx={{ color: "white" }} />
          <Typography color="white" mt={0.5}>
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
