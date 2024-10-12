import { Grid2, Typography } from "@mui/material";
import styled, { useTheme } from "styled-components";
import { ParkingType } from "../../../types";
import { useEffect, useState } from "react";

type ParkingInfoProps = {
  data: ParkingType;
};

function formatTimeDifference(timestamp: number): string {
  const now = new Date().getTime(); // 현재 시간 (밀리초)
  const difference = now - timestamp * 1000; // 차이 계산 (타임스탬프는 초 단위이므로 1000을 곱해 밀리초로 변환)

  // 차이를 시, 분, 초로 변환
  const hours = Math.floor(difference / (1000 * 60 * 60))
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor((difference % (1000 * 60)) / 1000)
    .toString()
    .padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
}

const ParkingInfo = ({ data }: ParkingInfoProps) => {
  const theme = useTheme();
  const [parkingTimeDifference, setparkingTimeDifference] = useState<string>("");
  const [entryTimeDifference, setEntryTimeDifference] = useState<string>("");
  const status = data.status;

  useEffect(() => {
    const parkingResult = formatTimeDifference(Number(data.parking_time));
    const entryRestul = formatTimeDifference(Number(data.entry_time));

    setparkingTimeDifference(parkingResult);
    setEntryTimeDifference(entryRestul);
  }, [data]);

  if (status === "parking") {
    // 주차
    return (
      <>
        <Grid2
          width={"158.172px"}
          height={"100%"}
          ml={1}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{ backgroundColor: theme.colors.orange }}
        >
          <img src="/車のアイコン素材.png" width={"70%"} />
          <InfoTypography fontSize={25}>{data.car_number}</InfoTypography>
          <InfoTypography fontSize={25}>{parkingTimeDifference}</InfoTypography>
        </Grid2>
      </>
    );
  } else if (status === "empty") {
    // 공차
    return (
      <>
        <Grid2
          width={"158.172px"}
          height={"100%"}
          ml={1}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ backgroundColor: theme.colors.grey }}
          position={"relative"}
        >
          <Grid2
            width={"80%"}
            height={"80%"}
            borderLeft="5px solid"
            borderRight="5px solid"
            borderColor={theme.colors.green}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"end"}
          >
            <InfoTypography fontSize={50} color={theme.colors.green}>
              {data.name}
            </InfoTypography>
          </Grid2>
          <Grid2
            top={20}
            width={"65%"}
            height={"5%"}
            border="2px solid"
            borderColor={theme.colors.green}
            borderRadius={5}
            position={"absolute"}
          />
        </Grid2>
      </>
    );
  } else {
    // 주차중
    return (
      <>
        <Grid2
          width={"158.172px"}
          height={"100%"}
          ml={1}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          position={"relative"}
          sx={{ backgroundColor: theme.colors.purple }}
        >
          <Grid2
            width={"50%"}
            height={"40%"}
            position={"absolute"}
            borderRight="3px solid"
            borderLeft="3px solid"
            borderColor={theme.colors.white}
            top={10}
            left={40}
          />
          <Grid2
            width={"40%"}
            height={"2%"}
            position={"absolute"}
            border="1px solid"
            borderRadius={5}
            borderColor={theme.colors.white}
            top={10}
            left={48}
          />
          <Grid2 width={"70%"} height={"50%"}>
            <Grid2 width={"70%"} position={"absolute"} top={50} left={57}>
              <img src="/car2.png" width={"40%"} />
            </Grid2>
          </Grid2>
          <InfoTypography color={theme.colors.white} fontSize={25}>
            {data.car_number}
          </InfoTypography>
          <InfoTypography color={theme.colors.white} fontSize={25}>
            {entryTimeDifference}
          </InfoTypography>
        </Grid2>
      </>
    );
  }
};

export default ParkingInfo;

const InfoTypography = styled(Typography)`
  font-family: "Figtree", sans-serif !important;
`;
