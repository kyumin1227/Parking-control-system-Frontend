import { Grid2 } from "@mui/material";
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

  return (
    <>
      <Grid2 container width={"100%"} height={"100%"}>
        <Grid2 size={3} sx={{ border: 20, borderColor: "#0D1117" }}>
          <Item>
            <img src="/logo.png" width={"100%"} />
          </Item>
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
