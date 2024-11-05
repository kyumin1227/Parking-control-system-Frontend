import { Grid2, Typography } from "@mui/material";

/** Parking status 제목 표시 */
const Title = () => {
  return (
    <>
      <Grid2 container mb={0.5} display={"flex"} justifyContent={"center"}>
        <img
          src="/p_image.svg"
          alt="P_image"
          width="70px"
          height="70px"
          style={{ marginTop: "5px", marginRight: "5px" }}
        />
        <Typography fontWeight={700} color="#AA2931" fontSize={"60px"}>
          arking Status
        </Typography>
      </Grid2>
    </>
  );
};

export default Title;
