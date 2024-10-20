import { Grid2 } from "@mui/material";
import { ParkingType } from "../../../types";
import ParkingInfo from "./ParkingInfo";

type ParkingInfosBProps = {
  data: [string, ParkingType][];
};

const ParkingInfosB = ({ data }: ParkingInfosBProps) => {
  return (
    <>
      <Grid2 height={221.5} display={"flex"}>
        {data.map((item: [string, ParkingType]) => (
          <ParkingInfo key={item[0]} data={item[1]} />
        ))}
      </Grid2>
    </>
  );
};

export default ParkingInfosB;
