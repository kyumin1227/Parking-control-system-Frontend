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
    };
  }
}
