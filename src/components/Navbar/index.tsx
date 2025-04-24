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
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  IconButton as MuiIconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [authModal, setAuthModal] = useState<"signin" | "signup" | null>(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const openAuthModal = (type: "signin" | "signup") => setAuthModal(type);
  const closeAuthModal = () => setAuthModal(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(formData);
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
        <Toolbar sx={{ justifyContent: "space-between", minHeight: "64px", px: 2 }}>
          {isMobile ? (
            <>
              <IconButton edge="start" onClick={handleDrawerToggle} sx={{ color: "#333" }}>
                <MenuIcon />
              </IconButton>

              <Typography variant="h6" sx={{ fontWeight: "bold", color: "#111", flexGrow: 1, textAlign: "center" }}>
                LOGO
              </Typography>

              <Button
                onClick={() => openAuthModal("signin")}
                sx={{ color: "#111", textTransform: "none", fontWeight: "bold", fontSize: "0.9rem" }}
              >
                Sign In
              </Button>
            </>
          ) : (
            <>
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "#3f51b5" }}>
                LOGO
              </Typography>
              <Box sx={{ display: "flex", gap: 3 }}>
                {navItems.map((item) => (
                  <Button
                    key={item.label}
                    component={NavLink}
                    to={item.path}
                    sx={{
                      color: "#666",
                      textTransform: "none",
                      "&.active": { color: "#000", fontWeight: "bold" },
                      "&:hover": { color: "#3f51b5" },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
              <Box sx={{ display: "flex", gap: 1 }}>
                <Button
                  onClick={() => openAuthModal("signin")}
                  variant="contained"
                  sx={{ backgroundColor: "black", color: "white", textTransform: "none", "&:hover": { backgroundColor: "#333" } }}
                >
                  Sign in
                </Button>
                <Button
                  onClick={() => openAuthModal("signup")}
                  variant="outlined"
                  sx={{ color: "black", borderColor: "black", textTransform: "none", "&:hover": { borderColor: "#3f51b5", color: "#3f51b5" } }}
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
                  "&.active": { fontWeight: "bold", color: "#3f51b5" },
                }}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
          </List>
          <Divider />
          <List>
            <ListItemButton onClick={() => openAuthModal("signin")}>
              <ListItemText primary="Sign in" />
            </ListItemButton>
            <ListItemButton onClick={() => openAuthModal("signup")}>
              <ListItemText primary="Sign up" />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>

      {/* Spacer */}
      <Box sx={{ height: "64px" }} />

      {/* Auth Dialog */}
      <Dialog open={!!authModal} onClose={closeAuthModal} fullWidth maxWidth="sm"
  sx={{
    borderRadius: '20px', // Add rounded corners to the Dialog box
    boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.1)', // Subtle shadow effect
    backdropFilter: 'blur(8px)', // Adding blur effect to background (modern touch)
  }}
>
  <DialogTitle sx={{
    m: 0, p: 2, display: "flex", justifyContent: "space-between", alignItems: "center",
    fontFamily: 'Roboto, sans-serif', // Modern typography
    fontWeight: 500, fontSize: '1.2rem', color: '#333',
  }}>
    {authModal === "signin" ? "Sign In" : "Create an Account"}
    <MuiIconButton onClick={closeAuthModal} sx={{
      color: (theme) => theme.palette.grey[500], 
      borderRadius: '50%', // Rounded close icon button
      transition: 'background-color 0.3s',
      '&:hover': {
        backgroundColor: '#f2f2f2', // Subtle hover effect
      },
    }}>
      <CloseIcon />
    </MuiIconButton>
  </DialogTitle>
  <DialogContent dividers sx={{ p: 3, borderRadius: '16px' }}>
    <Box
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: '100%',
      }}
    >
      {authModal === "signup" && (
        <>
          <Box sx={{ display: "flex", gap: 2 }}>
            <TextField
              label="First Name"
              name="firstName"
              variant="outlined"
              fullWidth
              value={formData.firstName}
              onChange={handleChange}
              sx={{ borderRadius: '8px', backgroundColor: '#fafafa' }}
            />
            <TextField
              label="Last Name"
              name="lastName"
              variant="outlined"
              fullWidth
              value={formData.lastName}
              onChange={handleChange}
              sx={{ borderRadius: '8px', backgroundColor: '#fafafa' }}
            />
          </Box>

          <TextField
            label="Email"
            name="email"
            variant="outlined"
            fullWidth
            value={formData.email}
            onChange={handleChange}
            sx={{ borderRadius: '8px', backgroundColor: '#fafafa' }}
          />
          <TextField
            label="Mobile Number"
            name="mobile"
            variant="outlined"
            fullWidth
            value={formData.mobile}
            onChange={handleChange}
            sx={{ borderRadius: '8px', backgroundColor: '#fafafa' }}
          />
        </>
      )}

      {authModal === "signin" && (
        <TextField
          label="Username or Email"
          name="email"
          variant="outlined"
          fullWidth
          value={formData.email}
          onChange={handleChange}
          sx={{ borderRadius: '8px', backgroundColor: '#fafafa' }}
        />
      )}

      <TextField
        label="Password"
        name="password"
        type="password"
        variant="outlined"
        fullWidth
        value={formData.password}
        onChange={handleChange}
        sx={{ borderRadius: '8px', backgroundColor: '#fafafa' }}
      />

      {authModal === "signup" && (
        <TextField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          variant="outlined"
          fullWidth
          value={formData.confirmPassword}
          onChange={handleChange}
          sx={{ borderRadius: '8px', backgroundColor: '#fafafa' }}
        />
      )}

      {/* Bottom Links */}
      <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ mt: 1 }}>
        {authModal === "signin" ? (
          <>
            <Button
              size="small"
              variant="text"
              onClick={() => alert("Redirect to Forgot Password")}
              sx={{ textTransform: "none", fontSize: "0.8rem", color: "#3f51b5" }}
            >
              Forgot password?
            </Button>
            <Button
              size="small"
              variant="text"
              onClick={() => openAuthModal("signup")}
              sx={{ textTransform: "none", fontSize: "0.8rem", color: "#3f51b5" }}
            >
              Create an account
            </Button>
          </>
        ) : (
          <Box width="100%" display="flex" justifyContent="center">
            <Button
              size="small"
              variant="text"
              onClick={() => openAuthModal("signin")}
              sx={{ textTransform: "none", fontSize: "0.8rem", color: "#3f51b5" }}
            >
              Already have an account? Sign In
            </Button>
          </Box>
        )}
      </Box>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="contained"
        sx={{
          mt: 3,
          backgroundColor: "black",
          "&:hover": { backgroundColor: "#333" },
          borderRadius: '8px', // Rounded button edges
          padding: '10px 20px',
        }}
      >
        {authModal === "signin" ? "Log In" : "Sign Up"}
      </Button>
    </Box>
  </DialogContent>
</Dialog>

    </>
  );
};

export default Navbar;
