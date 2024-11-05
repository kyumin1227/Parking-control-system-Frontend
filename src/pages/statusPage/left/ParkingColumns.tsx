import { Grid2, Typography } from "@mui/material";
import { ParkingType } from "../../../types";
import { AreaTypograpyh } from "../../../assets/theme";

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
        <Grid2 size={4} display={"flex"} justifyContent={"center"} sx={{ backgroundColor: "#F0CF73" }}>
          <AreaTypograpyh
            fontWeight={700}
            fontSize={"30px"}
            color="#004E66"
            style={{ display: "flex", alignItems: "center" }}
          >
            {area}
          </AreaTypograpyh>
        </Grid2>
        <Grid2 size={4} display={"flex"} justifyContent={"center"} sx={{ backgroundColor: "#F0CF73" }}>
          <Typography
            fontWeight={700}
            fontSize={"30px"}
            color="#AA2931"
            style={{ display: "flex", alignItems: "center" }}
          >
            {parkingCount}
          </Typography>
        </Grid2>
        <Grid2 size={4} display={"flex"} justifyContent={"center"} sx={{ backgroundColor: "#F0CF73" }}>
          <Typography
            fontWeight={700}
            fontSize={"30px"}
            color="#395485"
            style={{ display: "flex", alignItems: "center" }}
          >
            {emptyCount}
          </Typography>
        </Grid2>
      </Grid2>
    </>
  );
};

export default ParkingColumns;
