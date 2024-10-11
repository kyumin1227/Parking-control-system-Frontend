import "styled-components";
import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    yello: "#FABD2C",
    orange: "#FE8019",
    green: "#8EC07C",
    purple: "#563D7C",
    blue: "#3572A5",
    black: "#0D1117",
    grey: "#2F2F2F",
    grey2: "#7E7E7E",
    grey3: "#7D7D7D",
    grey4: "#464646",
    white: "#FFFFFF",
    white2: "#D9D9D9",
  },
};

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
