import { Grid2, Typography } from "@mui/material";
import styled, { useTheme } from "styled-components";
import ParkingInfosA from "./ParkingInfosA";
import { DataType } from "../../../types";
import { useEffect } from "react";

type ParkingInfosProps = {
  data: DataType;
};

const ParkingInfos = ({ data }: ParkingInfosProps) => {
  const theme = useTheme();
  const alphabets = ["A", "B", "C", "D"];

  //   useEffect(() => {
  //     console.log(Object.entries(data.data.parking).slice(0, 6));
  //   }, [data]);

  const renderNumbers = () => {
    const numbers = [];
    for (let i = 1; i < 9; i++) {
      numbers.push(
        <Grid2
          width={"12.5%"}
          ml={1}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ backgroundColor: theme.colors.grey2 }}
          key={i}
        >
          <InformationTypography fontSize={60}>{i}</InformationTypography>
        </Grid2>
      );
    }
    return numbers;
  };
  return (
    <>
      <Grid2 width={"100%"} height={"100%"} display={"flex"}>
        {/* info 아이콘 및 A ~ D 표시 */}
        <Grid2 width={72.8} height={"100%"} mr={1.5}>
          <Grid2>
            <img src="/info.png" width={"100%"} />
          </Grid2>
          {alphabets.map((letter, index) => (
            <Grid2
              key={index}
              height={221.5}
              mt={2.5}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              sx={{ backgroundColor: theme.colors.grey2 }}
            >
              <InformationTypography fontSize={60}>{letter}</InformationTypography>
            </Grid2>
          ))}
        </Grid2>
        <Grid2 width={"100%"} height={"100%"}>
          <Grid2 width={"100%"} height={"7%"} spacing={1} display={"flex"}>
            {renderNumbers()}
          </Grid2>
          <Grid2 width={"100%"} height={221.5} mt={2.5}>
            <ParkingInfosA data={Object.entries(data.data.parking).slice(0, 6)} />
          </Grid2>
        </Grid2>
      </Grid2>
    </>
  );
};

export default ParkingInfos;

const InformationTypography = styled(Typography)`
  font-family: "Figtree", sans-serif !important;
`;
