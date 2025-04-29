import { useState } from "react";
import { AppBar, Toolbar, Button, IconButton, Menu, MenuItem, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" color="default" elevation={1}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left side (Desktop view) */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
          <Button component={Link} to="/" color="inherit">
            Home
          </Button>
          <Button component={Link} to="/mentors" color="inherit">
            Mentors
          </Button>
        </Box>

        {/* Left side (Mobile view - Hamburger menu) */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            transformOrigin={{ vertical: "top", horizontal: "left" }}
          >
            <MenuItem onClick={handleClose} component={Link} to="/">
              Home
            </MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/mentors">
              Mentors
            </MenuItem>
          </Menu>
        </Box>

        {/* Right side (Apply Button) */}
        <Button
          variant="contained"
          color="primary"
          component="a"
          href="https://docs.google.com/forms/d/e/1FAIpQLSfzoG1J_F9twsPOLkLa48g0cqnjnhjErjYaVcFbgrep8PoGGg/viewform"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            borderRadius: 2,
            color: "white",
            textDecoration: "none",
            "&:hover": {
              backgroundColor: "#1976d2",
              color: "white",
              transform: "scale(1.02)",
            },
            transition: "background-color 0.3s ease-in-out, transform 0.3s ease-in-out",
          }}
        >
          Apply
        </Button>

      </Toolbar>
    </AppBar>
  );
}
