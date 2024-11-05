import { Grid2, Typography } from "@mui/material";
import styled from "styled-components";
import Title from "./right/title";
import GetData from "../../api/socket";
import { useEffect, useState } from "react";
import AreaA from "./right/areas/AreaA";
import { DataType } from "../../types";
import AreaB from "./right/areas/AreaB";
import AreaD from "./right/areas/AreaD";
import AreaC from "./right/areas/AreaC";
import MovingCar from "./right/areas_component/MovingCar";
import ParkingTable from "./left/ParkingTable";
import AllStatus from "./left/AllStatus";

const Item = styled.div`
  background-color: #f5f2e9;
  border: 5px solid #aa2931;
  height: 920px;
  width: 1410px;
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

  return (
    <>
      <Grid2
        container
        border={"5px solid #AA2931"}
        borderRight={"0px"}
        width={"1920px"}
        height={"1080px"}
        sx={{ overflowY: "hidden" }}
      >
        {/* 왼쪽 */}
        <Grid2 height={"1070px"} size={3} padding={"20px"} paddingBottom={"10px"}>
          <Grid2
            sx={{ backgroundColor: "#F5F2E9" }}
            display={"flex"}
            justifyContent={"center"}
            alignContent={"center"}
            border={"5px solid #AA2931"}
            height={"100%"}
          >
            <Grid2 display={"flex"} flexDirection={"column"} width={"350px"} height={"1010px"} marginTop={"15px"}>
              <Grid2 display={"flex"} height={"5%"} justifyContent={"center"}>
                <Typography fontWeight={700} fontSize={"40px"} color="#FABD2C">
                  전체 주차 정보
                </Typography>
              </Grid2>
              <Grid2 height={"50%"}>
                <AllStatus parking={data?.data.parking || {}} />
              </Grid2>
              <Grid2 height={"40%"}>
                <ParkingTable parking={data?.data.parking || {}} />
              </Grid2>
              <Grid2 height={"auto"} mt={2} mb={2}>
                <img src="/logo.svg" width={"100%"} />
              </Grid2>
            </Grid2>
          </Grid2>
        </Grid2>
        {/* 오른쪽 */}
        <Grid2 size={9} sx={{ border: 20, borderLeft: 0, borderColor: "#F0CF73" }}>
          <Grid2 container flexDirection={"column"}>
            <Grid2 size={1} width={"100%"}>
              <Title />
            </Grid2>
            <Grid2 size={11} height={"930px"} sx={{ backgroundColor: "#F5F2E9" }}>
              <Item>
                {data?.data.parking ? <AreaA parking={data.data.parking} /> : <div>loading...</div>}
                {data?.data.parking ? <AreaB parking={data.data.parking} /> : <div>loading...</div>}
                {data?.data.parking ? <AreaC parking={data.data.parking} /> : <div>loading...</div>}
                {data?.data.parking ? <AreaD parking={data.data.parking} /> : <div>loading...</div>}
                {/* 움직이는 차량 */}
                {data?.data.moving ? (
                  Object.entries(data.data.moving).map(([key], index) => {
                    const keyAsNumber = parseInt(key);
                    const currentPosition = data.data.moving[keyAsNumber]?.position;
                    const prevPosition = prevData?.data.moving[keyAsNumber]?.position;

                    if (!currentPosition || !prevPosition) {
                      return <></>;
                    }

                    return <MovingCar key={index} currentPosition={currentPosition} prevPosition={prevPosition} />;
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
