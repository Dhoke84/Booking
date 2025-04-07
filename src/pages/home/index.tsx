import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  Container,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  SelectChangeEvent,
  Box,
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
      <Box
        sx={{
          backgroundColor: "#f8f9fa",
          pt: { xs: 0, md: 10 },     // removed top padding on small screens
          pb: { xs: 6, md: 10 },    // bottom padding
          px: { xs: 2, sm: 4, md: 8 },
          my: 0, // no vertical margin
        }}
      >
        <Container maxWidth={false} disableGutters>
          <Grid
            container
            spacing={{ xs: 4, md: 6 }}
            alignItems="center"
            justifyContent="center"
            sx={{ px: { xs: 1, md: 3 } }}
          >
            {/* Text Section */}
            <Grid item xs={12} md={6}>
              <Box pr={{ md: 4 }} py={2}>
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ fontSize: { xs: "2rem", md: "2.5rem" } }}
                >
                  Book Your Perfect <br /> Sports Court Today
                </Typography>

                <Typography
                  variant="body1"
                  color="textSecondary"
                  sx={{ mb: 3, fontSize: { xs: "1rem", md: "1.1rem" } }}
                >
                  Easy and instant court booking for your favorite sports. <br />
                  Play whenever you want, wherever you want.
                </Typography>

                {/* Form Row */}
                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  sx={{
                    flexWrap: { xs: "wrap", md: "nowrap" },
                  }}
                >
                  <Grid item xs={12} md={4}>
                    <FormControl fullWidth>
                      <InputLabel>Select Sport</InputLabel>
                      <Select
                        value={sport}
                        onChange={handleSportChange}
                        label="Select Sport"
                      >
                        <MenuItem value="Tennis">Tennis</MenuItem>
                        <MenuItem value="Basketball">Basketball</MenuItem>
                        <MenuItem value="Football">Football</MenuItem>
                        <MenuItem value="Badminton">Badminton</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <FormControl fullWidth>
                      <InputLabel>Select Location</InputLabel>
                      <Select
                        value={location}
                        onChange={handleLocationChange}
                        label="Select Location"
                      >
                        <MenuItem value="New York">New York</MenuItem>
                        <MenuItem value="Los Angeles">Los Angeles</MenuItem>
                        <MenuItem value="Chicago">Chicago</MenuItem>
                        <MenuItem value="Houston">Houston</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <Button
                      fullWidth
                      variant="contained"
                      sx={{
                        backgroundColor: "black",
                        color: "white",
                        textTransform: "none",
                        height: "56px",
                        borderRadius: "30px",
                        "&:hover": {
                          backgroundColor: "#333",
                        },
                      }}
                    >
                      Search Courts
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>

         
           {/* Image Section */}
<Grid item xs={12} md={6}>
  <Box
    sx={{
      display: "flex",
      justifyContent: { xs: "center", md: "flex-start" },
      mt: { xs: 2, md: 0 },
    }}
  >
    <Box
      sx={{
        width: "100%",
        maxWidth: { xs: 300, md: "100%" }, // limits width on mobile
        height: { xs: 200, md: 300 },
        backgroundColor: "#e0e0e0",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
        textAlign: "center",
      }}
    >
      <Typography variant="body2" color="textSecondary">
        Image
      </Typography>
    </Box>
  </Box>
</Grid>

          </Grid>
        </Container>
      </Box>

      <VenueList />
      <Footer />
    </>
  );
};

export default Home;
