import React from "react";
import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  Link,
  Typography,
  useTheme,
  useMediaQuery,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";

const Footer: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);

  const handleNavChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        navigate("/");
        break;
      case 1:
        navigate("/search");
        break;
      case 2:
        navigate("/bookings");
        break;
      case 3:
        navigate("/profile");
        break;
      default:
        break;
    }
  };

  return (
    <>
      {!isMobile ? (
        <Box
          component="footer"
          sx={{
            borderTop: "1px solid #eee",
            backgroundColor: "#fff",
            py: 5,
            px: 0,
            mt: 8,
            width: "100%",
          }}
        >
          <Container maxWidth={false} disableGutters>
            <Grid container spacing={4} justifyContent="space-between" sx={{ px: { xs: 2, md: 8 } }}>
              {/* Logo + Description */}
              <Grid item xs={12} sm={6} md={3}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#3f51b5", mb: 1 }}
                >
                  LOGO
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Book your favorite sports venues with ease.
                  <br />
                  Professional facilities for everyone.
                </Typography>
              </Grid>

              {/* Quick Links */}
              <Grid item xs={6} sm={6} md={2}>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
                  Quick Links
                </Typography>
                {["About Us", "Contact", "Terms & Conditions", "Privacy Policy"].map((text) => (
                  <Link
                    key={text}
                    href="#"
                    underline="none"
                    color="text.secondary"
                    display="block"
                    sx={{ mb: 0.5, "&:hover": { color: "#3f51b5" } }}
                  >
                    {text}
                  </Link>
                ))}
              </Grid>

              {/* Sports */}
              <Grid item xs={6} sm={6} md={2}>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
                  Sports
                </Typography>
                {["Tennis", "Basketball", "Football", "Badminton"].map((sport) => (
                  <Link
                    key={sport}
                    href="#"
                    underline="none"
                    color="text.secondary"
                    display="block"
                    sx={{ mb: 0.5, "&:hover": { color: "#3f51b5" } }}
                  >
                    {sport}
                  </Link>
                ))}
              </Grid>

              {/* Social */}
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
                  Follow Us
                </Typography>
                <Box>
                  <IconButton color="inherit"><FacebookIcon fontSize="small" sx={{ color: "#6c757d" }} /></IconButton>
                  <IconButton color="inherit"><TwitterIcon fontSize="small" sx={{ color: "#6c757d" }} /></IconButton>
                  <IconButton color="inherit"><InstagramIcon fontSize="small" sx={{ color: "#6c757d" }} /></IconButton>
                  <IconButton color="inherit"><LinkedInIcon fontSize="small" sx={{ color: "#6c757d" }} /></IconButton>
                </Box>
              </Grid>
            </Grid>

            <Divider sx={{ mt: 4, mb: 2, borderColor: "#eee" }} />

            <Box textAlign="center">
              <Typography variant="body2" color="text.secondary">
                © 2024 Court Booking. All rights reserved.
              </Typography>
            </Box>
          </Container>
        </Box>
      ) : (
        // Mobile Bottom Navigation
        <BottomNavigation
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "#fff",
            borderTop: "1px solid #ddd",
            zIndex: 1200,
          }}
          showLabels
          value={value}
          onChange={handleNavChange}
        >
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction label="Search" icon={<SearchIcon />} />
          <BottomNavigationAction label="Bookings" icon={<CalendarTodayIcon />} />
          <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
        </BottomNavigation>
      )}
    </>
  );
};

export default Footer;
