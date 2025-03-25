import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Bookings", path: "/book" },
    { label: "Venue", path: "/venue" },
    { label: "Profile", path: "/profile" },
  ];

  return (
    <>
      {/* Fixed Navbar */}
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "white",
          boxShadow: "none",
          borderBottom: "1px solid #ccc",
          zIndex: 1100, // Ensures it's above other content
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          
          {/* Logo */}
          <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: "1.5rem", color: "#3f51b5" }}>
            LOGO
          </Typography>

          {/* Desktop Navigation Links */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: "20px" }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={NavLink}
                to={item.path}
                sx={{
                  color: "black",
                  textTransform: "none",
                  fontSize: "1rem",
                  fontWeight: "normal",
                  "&.active": { color: "#3f51b5", fontWeight: "bold", borderBottom: "2px solid #3f51b5" },
                  "&:hover": { color: "#3f51b5" },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Sign In / Sign Up Buttons */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: "10px" }}>
            <Button component={NavLink} to="/signin" variant="contained" sx={{ backgroundColor: "black", color: "white", textTransform: "none" }}>
              Sign In
            </Button>
            <Button component={NavLink} to="/signup" variant="outlined" sx={{ color: "black", borderColor: "black", textTransform: "none" }}>
              Sign Up
            </Button>
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            color="inherit"
            edge="end"
            sx={{ display: { sm: "none" } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        <List>
          {navItems.map((item) => (
            <ListItem key={item.label} component={NavLink} to={item.path} onClick={handleDrawerToggle}>
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
          <ListItem component={NavLink} to="/signin" onClick={handleDrawerToggle}>
            <ListItemText primary="Sign In" />
          </ListItem>
          <ListItem component={NavLink} to="/signup" onClick={handleDrawerToggle}>
            <ListItemText primary="Sign Up" />
          </ListItem>
        </List>
      </Drawer>

      {/* Add margin to content so it doesn't get hidden under the navbar */}
      <Box sx={{ marginTop: "64px" }} />
    </>
  );
};

export default Navbar;
