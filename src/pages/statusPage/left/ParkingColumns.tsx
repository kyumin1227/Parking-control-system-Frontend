import { Grid2, Typography } from "@mui/material";
import { ParkingType } from "../../../types";

type ParkingColumnsProps = {
  parking: [string, ParkingType][];
  area: string;
};

/** 구역별 주차 정보의 열 */
const ParkingColumns = ({ parking, area }: ParkingColumnsProps) => {
  let emptyCount = 0;
  let parkingCount = 0;

  parking.forEach(([, value]) => {
    if (value.status === "occupied") {
      parkingCount++;
    } else {
      emptyCount++;
    }
  });

  console.log(emptyCount, parkingCount);

  return (
    <>
      <Grid2 container spacing={2} height={"20%"} pt={2}>
        <Grid2 size={4} display={"flex"} justifyContent={"center"} sx={{ backgroundColor: "#0D1117" }}>
          <Typography fontSize={"30px"} color="#3572A5" style={{ display: "flex", alignItems: "center" }}>
            {area}
          </Typography>
        </Grid2>
        <Grid2 size={4} display={"flex"} justifyContent={"center"} sx={{ backgroundColor: "#0D1117" }}>
          <Typography fontSize={"30px"} color="#FE8019" style={{ display: "flex", alignItems: "center" }}>
            {parkingCount}
          </Typography>
        </Grid2>
        <Grid2 size={4} display={"flex"} justifyContent={"center"} sx={{ backgroundColor: "#0D1117" }}>
          <Typography fontSize={"30px"} color="#8EC07C" style={{ display: "flex", alignItems: "center" }}>
            {emptyCount}
          </Typography>
        </Grid2>
      </Grid2>
    </>
  );
};

export default ParkingColumns;
