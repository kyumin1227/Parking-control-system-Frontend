import { Grid2, Typography } from "@mui/material";
import styled from "styled-components";
import Title from "./title";
import GetData from "../../api/socket";
import { useEffect, useState } from "react";
import AreaA from "./areas/AreaA";
import { DataType } from "../../types";
import AreaB from "./areas/AreaB";
import AreaD from "./areas/AreaD";
import AreaC from "./areas/AreaC";
import MovingCar from "./areas_component/MovingCar";
import ParkingTable from "./ParkingTable";

const Item = styled.div`
  background-color: #2f2f2f;
  height: 100%;
  width: 100%;
  position: relative;
`;

const Status = () => {
  const [data, setData] = useState<DataType | null>(null);
  const [prevData, setPrevData] = useState<DataType | null>(null);

  // 데이터 변화 추적을 위한 콘솔 출력
  useEffect(() => {
    console.log("Prev Data");
    console.log(prevData?.data);
    console.log("Current Data");
    console.log(data?.data);
  }, [prevData, data]); // 데이터가 변경될 때마다 실행됨
  // TODO 전체 추자 정보 표시하는 부분 구현
  // TODO 이동 구역의 좌표 정보를 받아와서 맞추는 코드 필요 (2번 왼쪽 위, 2번 오른쪽 아래, 9번 왼쪽 위, 7번 오른쪽 아래, 14번 왼쪽 위, 14번 오른쪽 아래)
  return (
    <>
      <Grid2 container width={"100%"} height={"100%"}>
        <Grid2
          size={3}
          sx={{ border: 20, borderColor: "#0D1117", backgroundColor: "#2f2f2f" }}
          display={"flex"}
          justifyContent={"center"}
          alignContent={"center"}
        >
          <Grid2 display={"flex"} flexDirection={"column"} width={"410px"} height={"1010px"} marginTop={"15px"}>
            <Grid2 display={"flex"} height={"50px"} justifyContent={"center"}>
              <Typography fontSize={"40px"} color="#FABD2C">
                전체 주차 정보
              </Typography>
            </Grid2>
            <Grid2 height={"40%"}></Grid2>
            <Grid2 height={"40%"}>
              <ParkingTable parking={data?.data.parking || {}} />
            </Grid2>
            <Grid2 height={"10%"}>
              <img src="/logo.png" width={"100%"} />
            </Grid2>
          </Grid2>
        </Grid2>
        <Grid2 size={9} sx={{ border: 20, borderLeft: 0, borderColor: "#0D1117" }}>
          <Grid2 container flexDirection={"column"}>
            <Grid2 size={1} width={"100%"}>
              <Title />
            </Grid2>
            <Grid2 size={11} height={"930px"}>
              <Item>
                {data?.data.parking ? <AreaA parking={data.data.parking} /> : <div>loading...</div>}
                {data?.data.parking ? <AreaB parking={data.data.parking} /> : <div>loading...</div>}
                {data?.data.parking ? <AreaC parking={data.data.parking} /> : <div>loading...</div>}
                {data?.data.parking ? <AreaD parking={data.data.parking} /> : <div>loading...</div>}
                {data?.data.moving ? (
                  Object.entries(data.data.moving).map(([key], index) => {
                    const keyAsNumber = parseInt(key);
                    return (
                      <MovingCar
                        key={index}
                        currentPosition={data.data.moving[keyAsNumber].position}
                        prevPosition={prevData?.data.moving[keyAsNumber].position}
                      />
                    );
                  })
                ) : (
                  <></>
                )}
              </Item>
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
      <GetData data={data} setData={setData} prevData={prevData} setPrevData={setPrevData} />
    </>
  );
};

export default Status;
