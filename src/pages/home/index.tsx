import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { 
  Container, Typography, Grid, FormControl, InputLabel, 
  Select, MenuItem, Button, SelectChangeEvent, Box 
} from "@mui/material";
import VenueList from "../../components/Venue";

const Home: React.FC = () => {
  const [sport, setSport] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  const handleSportChange = (event: SelectChangeEvent) => {
    setSport(event.target.value);
  };

  const handleLocationChange = (event: SelectChangeEvent) => {
    setLocation(event.target.value);
  };

  return (
    <>
      <Navbar />
      <Box sx={{ backgroundColor: "#f8f9fa" }}>

      <Container 
        maxWidth="lg"
        sx={{
        
          py: 5, // Added padding for better spacing
       
          borderRadius: "10px", // Slightly rounded edges
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 3
        }}
      >
        {/* Left Section */}
        <Box sx={{ flex: 1, minWidth: 300, mt: 8, mb: 8, ml:2, mr:2 }}>


          <Typography variant="h4" fontWeight="bold">
            Book Your Perfect <br /> Sports Court Today
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ mt: 1, mb: 3 }}>
            Easy and instant court booking for your favorite sports. <br /> Play whenever you want, wherever you want.
          </Typography>

          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <FormControl variant="outlined" sx={{ minWidth: 150 }}>
                <InputLabel>Select Sport</InputLabel>
                <Select value={sport} onChange={handleSportChange} label="Select Sport">
                  <MenuItem value="Tennis">Tennis</MenuItem>
                  <MenuItem value="Basketball">Basketball</MenuItem>
                  <MenuItem value="Football">Football</MenuItem>
                  <MenuItem value="Badminton">Badminton</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item>
              <FormControl variant="outlined" sx={{ minWidth: 160 }}>
                <InputLabel>Select Location</InputLabel>
                <Select value={location} onChange={handleLocationChange} label="Select Location">
                  <MenuItem value="New York">New York</MenuItem>
                  <MenuItem value="Los Angeles">Los Angeles</MenuItem>
                  <MenuItem value="Chicago">Chicago</MenuItem>
                  <MenuItem value="Houston">Houston</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "black",
                  color: "white",
                  textTransform: "none",
                  width: "180px", // Increased width
                  height: "55px", // Increased height
                  borderRadius: "50px", // Added border radius
                  "&:hover": {
                    backgroundColor: "#333", // Slightly lighter black on hover
                  },
                }}
              >
                Search Courts
              </Button>
            </Grid>
          </Grid>
        </Box>

        {/* Right Section (Image Placeholder) */}
        <Box
          sx={{
            width: 300,
            height: 200,
            backgroundColor: "#e0e0e0",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 8, mb: 8, ml:2, mr:2 
          }}
        >
          <Typography variant="body2" color="textSecondary">
            Image
          </Typography>
        </Box>
      </Container>
      </Box>

      <VenueList />

      <Footer />
    </>
  );
};

export default Home;
