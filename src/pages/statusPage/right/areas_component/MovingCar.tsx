import { Grid2 } from "@mui/material";
import { useEffect, useState } from "react";

type movingCarProps = {
  currentPosition: [number, number];
  prevPosition?: [number, number];
};

const MovingCar = ({ currentPosition, prevPosition }: movingCarProps) => {
  const [rotation, setRotation] = useState(0); // 차량의 각도 저장

  useEffect(() => {
    // 현재 위치와 이전 위치의 차이 계산
    if (prevPosition) {
      const deltaX = currentPosition[0] - prevPosition[0];
      const deltaY = currentPosition[1] - prevPosition[1];

      // 절대값으로 X, Y의 차이를 비교
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        // X 변화가 더 큰 경우 좌우로 이동
        if (deltaX > 0) {
          setRotation(90); // 오른쪽으로 이동
        } else if (deltaX < 0) {
          setRotation(270); // 왼쪽으로 이동
        }
      } else {
        // Y 변화가 더 큰 경우 상하로 이동
        if (deltaY > 0) {
          setRotation(180); // 아래로 이동
        } else if (deltaY < 0) {
          setRotation(0); // 위로 이동
        }
      }
    }
  }, [currentPosition, prevPosition]);
  return (
    <>
      <Grid2 position={"absolute"} top={currentPosition[0]} left={currentPosition[1]}>
        <img src="/moving_car_image.png" style={{ transform: `rotate(${rotation}deg)`, width: "100px" }} />
      </Grid2>
    </>
  );
};

export default MovingCar;
