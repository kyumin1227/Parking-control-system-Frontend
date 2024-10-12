import { Grid2 } from "@mui/material";
import ParkingInfo from "./ParkingInfo";
import { useEffect } from "react";
import { ParkingType } from "../../../types";

type ParkingInfosDProps = {
  data: [string, ParkingType][];
};

const ParkingInfosD = ({ data }: ParkingInfosDProps) => {
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <>
      <Grid2 height={221.5} width={"100%"} display={"flex"}>
        {data.map((item: [string, ParkingType]) => (
          <ParkingInfo key={item[0]} data={item[1]} />
        ))}
      </Grid2>
    </>
  );
};

export default ParkingInfosD;
