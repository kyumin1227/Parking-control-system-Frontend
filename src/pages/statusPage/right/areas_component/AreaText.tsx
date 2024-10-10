import { Grid2, Typography } from "@mui/material";

type AreaTextProps = {
  text: string;
};

const AreaText = ({ text }: AreaTextProps) => {
  return (
    <>
      <Grid2
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        style={{ width: "50px", height: "50px", backgroundColor: "#3572A5" }}
      >
        <Typography fontSize={"25px"} color="#FFFFFF">
          {text}
        </Typography>
      </Grid2>
    </>
  );
};

export default AreaText;
