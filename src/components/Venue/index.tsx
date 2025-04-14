// VenueList.tsx
import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  Chip
} from "@mui/material";
import { Star, LocationOn } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

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
    image:
      "https://media.istockphoto.com/id/1040174716/photo/line-on-green-badminton-court.jpg?s=612x612&w=0&k=20&c=kfE4sJDWUpKvFJy5v4SIZO_t-PHwE9rubf1x540U3lc=",
    availability: "Available"
  },
  {
    id: 2,
    name: "Pro Sports Hub",
    rating: 4.6,
    reviews: 98,
    location: "South Area",
    price: "AED 6/hr",
    image:
      "https://media.istockphoto.com/id/1040174716/photo/line-on-green-badminton-court.jpg?s=612x612&w=0&k=20&c=kfE4sJDWUpKvFJy5v4SIZO_t-PHwE9rubf1x540U3lc=",
    availability: "Available"
  },
  {
    id: 3,
    name: "City Sports Center",
    rating: 4.7,
    reviews: 156,
    location: "East Area",
    price: "AED 7/hr",
    image:
      "https://media.istockphoto.com/id/1040174716/photo/line-on-green-badminton-court.jpg?s=612x612&w=0&k=20&c=kfE4sJDWUpKvFJy5v4SIZO_t-PHwE9rubf1x540U3lc=",
    availability: "Limited"
  },
  {
    id: 4,
    name: "City Sports Center",
    rating: 4.7,
    reviews: 156,
    location: "East Area",
    price: "AED 7/hr",
    image:
      "https://media.istockphoto.com/id/1040174716/photo/line-on-green-badminton-court.jpg?s=612x612&w=0&k=20&c=kfE4sJDWUpKvFJy5v4SIZO_t-PHwE9rubf1x540U3lc=",
    availability: "Limited"
  }
];

const VenueCard: React.FC<{ venue: Venue }> = ({ venue }) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ width: "100%", borderRadius: 2, boxShadow: 2, position: "relative" }}>
      <Chip
        label={venue.availability}
        color={venue.availability === "Available" ? "success" : "warning"}
        sx={{
          position: "absolute",
          top: 10,
          left: 10,
          fontSize: "0.75rem",
          fontWeight: "bold"
        }}
      />
      <CardMedia
        component="img"
        height="140"
        image={venue.image}
        alt={venue.name}
        sx={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
      />
      <CardContent sx={{ p: 2 }}>
        <Typography variant="subtitle1" fontWeight="bold">
          {venue.name}
        </Typography>
        <Box display="flex" alignItems="center" gap={0.5}>
          <Star sx={{ color: "gold", fontSize: "1rem" }} />
          <Typography variant="body2">
            {venue.rating} ({venue.reviews} reviews)
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={0.5} mt={1}>
          <LocationOn fontSize="small" sx={{ color: "gray" }} />
          <Typography variant="body2" color="text.secondary">
            {venue.location}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
          <Typography variant="h6" fontWeight="bold">
            {venue.price}
          </Typography>
          <Button
            variant="contained"
            onClick={() => navigate(`/details/${venue.id}`)}

            sx={{
              backgroundColor: "black",
              color: "white",
              textTransform: "none",
              borderRadius: "20px",
              px: 2,
              py: 0.5,
              fontSize: "0.8rem",
              "&:hover": { backgroundColor: "#333" }
            }}
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
    <Box sx={{ px: { xs: 2, sm: 4, md: 8 }, py: 5 }}>
      <Typography variant="h5" fontWeight="bold" mb={3}>
        Popular Venues
      </Typography>
      <Grid container spacing={3}>
        {venues.map((venue) => (
          <Grid item xs={12} sm={6} md={3} key={venue.id}>
            <VenueCard venue={venue} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default VenueList;
