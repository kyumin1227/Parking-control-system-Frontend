import { Grid2, Typography } from "@mui/material";
import ParkingColumns from "./ParkingColumns";
import { ParkingAreaType } from "../../types";

type ParkingTableProps = {
  parking: Record<number, ParkingAreaType>;
};

const ParkingTable = ({ parking }: ParkingTableProps) => {
  console.log(Object.entries(parking));

  return (
    <>
      <Grid2 height={"100%"}>
        <Grid2 container width={"100%"} spacing={2} height={"20%"}>
          <Grid2 size={4} display={"flex"} alignItems={"center"}>
            <img src="/car_black.png" width={"100%"} />
          </Grid2>
          <Grid2 size={4} display={"flex"} justifyContent={"center"} sx={{ backgroundColor: "#0D1117" }}>
            <Typography fontSize={"30px"} color="#FE8019" style={{ verticalAlign: "middle" }}>
              주차
            </Typography>
          </Grid2>
          <Grid2 size={4} display={"flex"} justifyContent={"center"} sx={{ backgroundColor: "#0D1117" }}>
            <Typography fontSize={"30px"} color="#8EC07C" style={{ verticalAlign: "middle" }}>
              공차
            </Typography>
          </Grid2>
        </Grid2>
        <ParkingColumns parking={Object.entries(parking).slice(0, 6)} area="A" />
        <ParkingColumns parking={Object.entries(parking).slice(6, 10)} area="B" />
        <ParkingColumns parking={Object.entries(parking).slice(10, 14)} area="C" />
        <ParkingColumns parking={Object.entries(parking).slice(14, 23)} area="D" />
      </Grid2>
    </>
  );
};

export default ParkingTable;
