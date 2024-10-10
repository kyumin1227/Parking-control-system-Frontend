import { Grid2, Typography } from "@mui/material";
import { useTheme } from "styled-components";

const AllStatus = () => {
  const theme = useTheme();
  return (
    <>
      <Grid2 mt={2}>
        <Grid2 container spacing={2}>
          <Grid2 size={6} display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Typography fontSize={40} color={theme.colors.orange}>
              주차
            </Typography>
            <Grid2
              width={"100%"}
              height={"120px"}
              display={"flex"}
              justifyContent={"center"}
              sx={{ backgroundColor: theme.colors.black }}
              mt={1}
            >
              <Typography fontSize={60} color={theme.colors.orange}>
                12
              </Typography>
            </Grid2>
          </Grid2>
          <Grid2 size={6} display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Typography fontSize={40} color={theme.colors.green}>
              공차
            </Typography>
            <Grid2
              width={"100%"}
              height={"120px"}
              display={"flex"}
              justifyContent={"center"}
              sx={{ backgroundColor: theme.colors.black }}
              mt={1}
            >
              <Typography fontSize={60} color={theme.colors.green}>
                12
              </Typography>
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
    </>
  );
};

export default AllStatus;
