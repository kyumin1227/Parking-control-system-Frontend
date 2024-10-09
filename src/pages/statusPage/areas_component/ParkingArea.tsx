import { ParkingAreaType } from "../../../types";

const ParkingArea = ({ status }: ParkingAreaType) => {
  return (
    <>
      <div
        style={{
          width: "150px",
          height: "93px",
          backgroundColor: status == "empty" ? "#8EC07C" : "#FE8019",
          margin: "15px 0px 0px 15px",
        }}
      ></div>
    </>
  );
};

export default ParkingArea;
