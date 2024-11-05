import { Typography } from "@mui/material";
import "styled-components";
import styled, { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    yello: "#AA2931",
    orange: "#AA2931",
    green: "#405A89",
    purple: "#E1A609",
    blue: "#3572A5",
    black: "#F0CF73",
    grey: "#F5F2E9",
    grey2: "#395485",
    grey3: "#7D7D7D",
    grey4: "#395485",
    white: "#F5F2E9",
    white2: "#D9D9D9",
  },
};

export const StrokedTypography = styled(Typography)`
  -webkit-text-stroke: 3px #f5f2e9;
`;

export const AreaTypograpyh = styled(Typography)`
  -webkit-text-stroke: 1.5px #f5f2e9;
`;

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      /** 노랑색 포인트 색상 */
      yello: string;
      /** 주황색 주차 색상 */
      orange: string;
      /** 초록색 공차 색상 */
      green: string;
      /** 보라색 타겟 색상 */
      purple: string;
      /** 파랑색 구역 색상 */
      blue: string;
      /** 검정색 배경 색상 */
      black: string;
      /** 회색 배경 색상 */
      grey: string;
      /** 밝은 회색 */
      grey2: string;
      /** 밝은 회색 2 (주차 진행 중, 출차 중 차량 배경)*/
      grey3: string;
      /** 회색 배경 색상 2 */
      grey4: string;
      /** 흰색 */
      white: string;
      /** 흰색 2 */
      white2: string;
    };
  }
}
