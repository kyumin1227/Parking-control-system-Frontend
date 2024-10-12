import { Grid2 } from "@mui/material";
import { ParkingType } from "../../../types";
import ParkingInfo from "./ParkingInfo";
import { useTheme } from "styled-components";

type ParkingInfosBProps = {
  data: [string, ParkingType][];
};

const ParkingInfosC = ({ data }: ParkingInfosBProps) => {
  const theme = useTheme();
  return (
    <>
      <Grid2 height={221.5} mt={2.5} display={"flex"}>
        {data.map((item: [string, ParkingType]) => (
          <ParkingInfo key={item[0]} data={item[1]} />
        ))}
      </Grid2>
    </>
  );
};

export default ParkingInfosC;
