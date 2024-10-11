import { Grid2, Typography } from "@mui/material";

/** Parking status 제목 표시 */
const Title = () => {
  return (
    <>
      <Grid2 container mt={"10px"} mb={"10px"} display={"flex"} justifyContent={"center"}>
        <img
          src="/P_image.png"
          alt="P_image"
          width="70px"
          height="70px"
          style={{ marginTop: "5px", marginRight: "5px" }}
        />
        <Typography color="#FABD2C" fontSize={"60px"}>
          arking Status
        </Typography>
      </Grid2>
    </>
  );
};

export default Title;
