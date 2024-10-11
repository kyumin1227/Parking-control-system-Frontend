import { Grid2 } from "@mui/material";
import { ParkingsType } from "../../../../types";
import ParkingArea from "../areas_component/ParkingArea";
import AreaText from "../areas_component/AreaText";

const AreaD = ({ parking }: ParkingsType) => {
  return (
    <>
      <Grid2 display={"flex"} position={"absolute"} top={"15px"} left={"1155px"}>
        <AreaText text="D" />
        <Grid2
          display={"flex"}
          flexDirection={"column"}
          style={{ width: "200px", height: "900px", border: "10px solid #3572A5", borderColor: "#3572A5" }}
        >
          {Object.entries(parking)
            .slice(14, 22)
            .map((item, index) => {
              return <ParkingArea key={index} status={item[1].status} />;
            })}
        </Grid2>
      </Grid2>
    </>
  );
};

export default AreaD;
