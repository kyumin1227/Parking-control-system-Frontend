import { useTheme } from "styled-components";
import { ParkingType } from "../../../../types";

const ParkingArea = ({ status }: ParkingType) => {
  const theme = useTheme();

  return (
    <>
      <div
        style={{
          width: "150px",
          height: "93px",
          backgroundColor:
            status == "empty" ? theme.colors.green : status == "occupied" ? theme.colors.orange : theme.colors.purple,
          margin: "15px 0px 0px 15px",
        }}
      ></div>
    </>
  );
};

export default ParkingArea;
