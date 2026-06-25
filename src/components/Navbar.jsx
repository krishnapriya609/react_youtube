import { AppBar, Toolbar, Typography } from "@mui/material";
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <AppBar
      position="sticky"
      sx={{
        background: "#0f0f0f",
        borderBottom: "1px solid #303030"
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography
          variant="h5"
          sx={{
            color: "#ff0000",
            fontWeight: "bold"
          }}
        >
          YouTube Clone
        </Typography>

        <SearchBar />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;