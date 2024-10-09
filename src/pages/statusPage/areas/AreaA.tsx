import { Grid2 } from "@mui/material";
import { ParkingAreasType } from "../../../types";
import ParkingArea from "../areas_component/ParkingArea";
import AreaText from "../areas_component/AreaText";

const AreaA = ({ parking }: ParkingAreasType) => {
  return (
    <>
      <Grid2 position={"absolute"} top={"15px"} left={"15px"}>
        <Grid2
          display={"flex"}
          style={{ width: "1025px", height: "143px", border: "10px solid #3572A5", borderColor: "#3572A5" }}
        >
          {Object.entries(parking)
            .slice(0, 6)
            .map((item, index) => {
              return <ParkingArea key={index} status={item[1].status} />;
            })}
        </Grid2>
        <AreaText text="A" />
      </Grid2>
    </>
  );
};

export default AreaA;
