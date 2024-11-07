import { Grid2 } from "@mui/material";
import { ParkingsType } from "../../../../types";
import ParkingArea from "../areas_component/ParkingArea";
import AreaText from "../areas_component/AreaText";

const AreaB = ({ parking }: ParkingsType) => {
  return (
    <>
      <Grid2 position={"absolute"} top={"250px"} left={"300px"} display={"flex"}>
        <AreaText text="B" />
        <Grid2
          display={"flex"}
          flexDirection={"column"}
          flexWrap={"wrap"}
          style={{
            width: "365px",
            height: "251px",
            border: "10px solid #3572A5",
            borderColor: "#3572A5",
            paddingBottom: "15px",
          }}
        >
          {Object.entries(parking)
            .slice(6, 10)
            .map((item, index) => {
              return <ParkingArea key={index} status={item[1].status} />;
            })}
        </Grid2>
      </Grid2>
    </>
  );
};

export default AreaB;
