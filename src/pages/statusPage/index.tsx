import { Grid2 } from "@mui/material";
import styled from "styled-components";
import Title from "./title";

const Item = styled.div`
  background-color: #2f2f2f;
  height: 100%;
  width: 100%;
`;

const Status = () => {
  return (
    <>
      <Grid2 container width={"100%"} height={"100%"}>
        <Grid2 size={3} sx={{ border: 20, borderColor: "#0D1117" }}>
          <Item>
            <img src="/logo.png" width={"100%"} />
          </Item>
        </Grid2>
        <Grid2 size={9} sx={{ border: 20, borderLeft: 0, borderColor: "#0D1117" }}>
          <Grid2 container flexDirection={"column"}>
            <Grid2 size={1} width={"100%"}>
              <Title />
            </Grid2>
            <Grid2 size={11} height={"930px"}>
              <Item />
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
    </>
  );
};

export default Status;
