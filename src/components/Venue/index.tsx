import React from "react";
import { Box, Card, CardContent, CardMedia, Typography, Button, Grid, Chip } from "@mui/material";
import { Star, LocationOn } from "@mui/icons-material";

interface Venue {
  id: number;
  name: string;
  rating: number;
  reviews: number;
  location: string;
  price: string;
  image: string;
  availability: "Available" | "Limited";
}

const venues: Venue[] = [
  {
    id: 1,
    name: "Elite Sports Academy",
    rating: 4.8,
    reviews: 124,
    location: "North Area",
    price: "AED 8/hr",
    image: "https://media.istockphoto.com/id/1040174716/photo/line-on-green-badminton-court.jpg?s=612x612&w=0&k=20&c=kfE4sJDWUpKvFJy5v4SIZO_t-PHwE9rubf1x540U3lc=",
    availability: "Available",
  },
  {
    id: 2,
    name: "Pro Sports Hub",
    rating: 4.6,
    reviews: 98,
    location: "South Area",
    price: "AED 6/hr",
    image: "https://media.istockphoto.com/id/1040174716/photo/line-on-green-badminton-court.jpg?s=612x612&w=0&k=20&c=kfE4sJDWUpKvFJy5v4SIZO_t-PHwE9rubf1x540U3lc=",
    availability: "Available",
  },
  {
    id: 3,
    name: "City Sports Center",
    rating: 4.7,
    reviews: 156,
    location: "East Area",
    price: "AED 7/hr",
    image: "https://media.istockphoto.com/id/1040174716/photo/line-on-green-badminton-court.jpg?s=612x612&w=0&k=20&c=kfE4sJDWUpKvFJy5v4SIZO_t-PHwE9rubf1x540U3lc=",
    availability: "Limited",
  },
  {
    id: 4,
    name: "City Sports Center",
    rating: 4.7,
    reviews: 156,
    location: "East Area",
    price: "AED 7/hr",
    image: "https://media.istockphoto.com/id/1040174716/photo/line-on-green-badminton-court.jpg?s=612x612&w=0&k=20&c=kfE4sJDWUpKvFJy5v4SIZO_t-PHwE9rubf1x540U3lc=",
    availability: "Limited",
  },
];

const VenueCard: React.FC<{ venue: Venue }> = ({ venue }) => {
  return (
    <Card sx={{ width: 270, borderRadius: 0, boxShadow: 1, p: 0, m: 0, position: "relative" }}>
      {/* Availability Label on Top-Right of Image */}
      <Chip
        label={venue.availability}
        color={venue.availability === "Available" ? "success" : "warning"}
        sx={{
          position: "absolute",
          top: 10,
          left: 10,
          fontSize: "0.75rem",
          fontWeight: "bold",
        }}
      />
      
      {/* Venue Image */}
      <CardMedia component="img" height="140" image={venue.image} alt={venue.name} sx={{ borderRadius: 0 }} />

      {/* Card Content */}
      <CardContent sx={{ p: 2 }}>
        <Typography variant="h6" fontWeight="bold">
          {venue.name}
        </Typography>

        {/* Rating Section */}
        <Box display="flex" alignItems="center" gap={0.5}>
          <Star sx={{ color: "gold", fontSize: "1rem" }} />
          <Typography variant="body2">{venue.rating} ({venue.reviews} reviews)</Typography>
        </Box>

        {/* Location Section */}
        <Box display="flex" alignItems="center" gap={0.5} mt={1}>
          <LocationOn fontSize="small" sx={{ color: "gray" }} />
          <Typography variant="body2" color="textSecondary">{venue.location}</Typography>
        </Box>

        {/* Price & Book Button */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
          <Typography variant="h6" fontWeight="bold">{venue.price}</Typography>
          <Button
            variant="contained"
            sx={{ backgroundColor: "black", color: "white", textTransform: "none", borderRadius: "20px", px: 2 }}
          >
            Book Now
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

const VenueList: React.FC = () => {
  return (
    <Box sx={{ px: 4, py: 5 }}>
      <Typography variant="h5" fontWeight="bold" mb={3} ml={20}>
        Popular Venues
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {venues.map((venue) => (
          <Grid item key={venue.id}>
            <VenueCard venue={venue} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default VenueList;
