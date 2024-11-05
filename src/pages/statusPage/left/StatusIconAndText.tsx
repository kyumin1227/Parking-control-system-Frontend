import { Grid2, Typography } from "@mui/material";

type StatusIconAndTextProps = {
  color: string;
  text: string;
};

/** 상태별 아이콘 및 텍스트를 표시하는 컴포넌트 */
const StatusIconAndText = ({ color, text }: StatusIconAndTextProps) => {
  return (
    <>
      <Grid2 size={4} container width={"100%"} display={"flex"} alignItems={"center"} ml={2}>
        <Grid2
          width={40}
          height={40}
          borderRadius={5}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ backgroundColor: color }}
          mr={2}
        >
          <img src="/車のアイコン素材.png" width={"60%"} />
        </Grid2>
        <Grid2>
          <Typography fontWeight={700} fontSize={25} color={color}>
            {text}
          </Typography>
        </Grid2>
      </Grid2>
    </>
  );
};

export default StatusIconAndText;
