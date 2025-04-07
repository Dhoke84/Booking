import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
  Divider,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Bookings", path: "/book" },
    { label: "Venues", path: "/venue" },
    { label: "Profile", path: "/profile" },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "white",
          borderBottom: "1px solid #ddd",
          boxShadow: "none",
          zIndex: 1100,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            minHeight: "64px",
            px: 2,
          }}
        >
          {isMobile ? (
            <>
              {/* Left: Menu Icon */}
              <IconButton edge="start" onClick={handleDrawerToggle} sx={{ color: "#333" }}>
                <MenuIcon />
              </IconButton>

              {/* Center: Logo */}
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "#111", flexGrow: 1, textAlign: "center" }}>
                logo
              </Typography>

              {/* Right: Sign In text */}
              <Button
                component={NavLink}
                to="/signin"
                sx={{
                  color: "#111",
                  textTransform: "none",
                  fontWeight: "bold",
                  fontSize: "0.9rem",
                }}
              >
                Sign In
              </Button>
            </>
          ) : (
            <>
              {/* Logo on the left */}
              <Typography
                variant="h6"
                component="div"
                sx={{ fontWeight: "bold", color: "#3f51b5" }}
              >
                LOGO
              </Typography>

              {/* Desktop Navigation Links */}
              <Box sx={{ display: "flex", gap: 3 }}>
                {navItems.map((item) => (
                  <Button
                    key={item.label}
                    component={NavLink}
                    to={item.path}
                    sx={{
                      color: "#666",
                      fontWeight: "normal",
                      textTransform: "none",
                      "&.active": {
                        color: "#000",
                        fontWeight: "bold",
                      },
                      "&:hover": {
                        color: "#3f51b5",
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>

              {/* Desktop Auth Buttons */}
              <Box sx={{ display: "flex", gap: 1 }}>
                <Button
                  component={NavLink}
                  to="/signin"
                  variant="contained"
                  sx={{
                    backgroundColor: "black",
                    color: "white",
                    textTransform: "none",
                    "&:hover": { backgroundColor: "#333" },
                  }}
                >
                  Sign in
                </Button>
                <Button
                  component={NavLink}
                  to="/signup"
                  variant="outlined"
                  sx={{
                    color: "black",
                    borderColor: "black",
                    textTransform: "none",
                    "&:hover": { borderColor: "#3f51b5", color: "#3f51b5" },
                  }}
                >
                  Sign up
                </Button>
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
        <Box sx={{ width: 250 }} role="presentation" onClick={handleDrawerToggle}>
          <List>
            {navItems.map((item) => (
              <ListItemButton
                key={item.label}
                component={NavLink}
                to={item.path}
                sx={{
                  textTransform: "none",
                  color: "inherit",
                  padding: "10px 16px",
                  "&.active": {
                    fontWeight: "bold",
                    color: "#3f51b5",
                  },
                }}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
          </List>
          <Divider />
          <List>
            <ListItemButton
              component={NavLink}
              to="/signin"
              sx={{
                textTransform: "none",
                color: "inherit",
                padding: "10px 16px",
                "&.active": {
                  fontWeight: "bold",
                  color: "#3f51b5",
                },
              }}
            >
              <ListItemText primary="Sign in" />
            </ListItemButton>
            <ListItemButton
              component={NavLink}
              to="/signup"
              sx={{
                textTransform: "none",
                color: "inherit",
                padding: "10px 16px",
                "&.active": {
                  fontWeight: "bold",
                  color: "#3f51b5",
                },
              }}
            >
              <ListItemText primary="Sign up" />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>

      {/* Spacer to push content below navbar */}
      <Box sx={{ height: "64px" }} />
    </>
  );
};

export default Navbar;
