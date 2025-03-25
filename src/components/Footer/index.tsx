import React from "react";
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
  Container,
  Grid,
  Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useState } from "react";

const Footer: React.FC = () => {

  return (
    <>
      {/* Footer */}
      <Container maxWidth={false} sx={{ mt: 5, py: 3, borderTop: "1px solid #ddd", backgroundColor: "#f8f9fa" }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#3f51b5" }}>LOGO</Typography>
            <Typography variant="body2" color="textSecondary">
              Book your favorite sports venues with ease.
              Professional facilities for everyone.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Typography variant="subtitle1" fontWeight="bold">Quick Links</Typography>
            <Link href="#" color="inherit" display="block" underline="none">About Us</Link>
            <Link href="#" color="inherit" display="block" underline="none">Contact</Link>
            <Link href="#" color="inherit" display="block" underline="none">Terms & Conditions</Link>
            <Link href="#" color="inherit" display="block" underline="none">Privacy Policy</Link>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Typography variant="subtitle1" fontWeight="bold">Sports</Typography>
            <Link href="#" color="inherit" display="block" underline="none">Tennis</Link>
            <Link href="#" color="inherit" display="block" underline="none">Basketball</Link>
            <Link href="#" color="inherit" display="block" underline="none">Football</Link>
            <Link href="#" color="inherit" display="block" underline="none">Badminton</Link>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Typography variant="subtitle1" fontWeight="bold">Follow Us</Typography>
            <IconButton color="inherit"><FacebookIcon /></IconButton>
            <IconButton color="inherit"><TwitterIcon /></IconButton>
            <IconButton color="inherit"><InstagramIcon /></IconButton>
            <IconButton color="inherit"><LinkedInIcon /></IconButton>
          </Grid>
        </Grid>
        <Typography variant="body2" color="textSecondary" align="center" sx={{ mt: 3 }}>
          © 2024 Court Booking. All rights reserved.
        </Typography>
      </Container>
    </>
  );
};

export default Footer;
