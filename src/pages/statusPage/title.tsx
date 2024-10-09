import { Grid2, Typography } from "@mui/material";

/**
 * Parking status 제목 표시
 */
const Title = () => {
  return (
    <>
      <Grid2 container mb={"20px"} display={"flex"} justifyContent={"center"}>
        <img
          src="/P_image.png"
          alt="P_image"
          width="60px"
          height="60px"
          style={{ marginTop: "15px", marginRight: "5px" }}
        />
        <Typography color="#FABD2C" fontSize={"60px"}>
          arking Status
        </Typography>
      </Grid2>
    </>
  );
};

export default Title;
