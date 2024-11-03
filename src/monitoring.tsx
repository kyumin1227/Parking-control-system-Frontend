import { Grid2 } from "@mui/material";
import Status from "./pages/statusPage";
import Information from "./pages/informationPage";

const Monitoring = () => {
  return (
    <>
      <Grid2 container sx={{ backgroundColor: "#0D1117", width: "3840px", height: "1080px", overflow: "hidden" }}>
        <Grid2 size={6}>
          <Status />
        </Grid2>
        <Grid2 size={6}>
          <Information />
        </Grid2>
      </Grid2>
    </>
  );
};

export default Monitoring;
