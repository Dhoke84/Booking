import React from "react";
import { 
  Box, Typography, Button, Card, CardMedia, CardContent, Chip, Divider 
} from "@mui/material";
import { Star, LocationOn } from "@mui/icons-material";

const venues = [
  {
    id: 1,
    name: "Grand Tennis Center",
    rating: 4.8,
    reviews: 124,
    location: "Downtown Sports Complex",
    price: "AED 8/hr",
    image: "https://media.istockphoto.com/id/1040174716/photo/line-on-green-badminton-court.jpg?s=612x612&w=0&k=20&c=kfE4sJDWUpKvFJy5v4SIZO_t-PHwE9rubf1x540U3lc=",
    featured: true,
    host: "John Smith",
  },
  {
    id: 2,
    name: "City Basketball Arena",
    rating: 4.9,
    reviews: 89,
    location: "Central Park Complex",
    price: "AED 8/hr",
    image: "https://media.istockphoto.com/id/1040174716/photo/line-on-green-badminton-court.jpg?s=612x612&w=0&k=20&c=kfE4sJDWUpKvFJy5v4SIZO_t-PHwE9rubf1x540U3lc=",
    topRated: true,
    host: "Sarah Johnson",
  },
  {
    id: 3,
    name: "Elite Badminton Club",
    rating: 4.7,
    reviews: 156,
    location: "Westside Sports Hub",
    price: "AED 7/hr",
    image: "https://media.istockphoto.com/id/1040174716/photo/line-on-green-badminton-court.jpg?s=612x612&w=0&k=20&c=kfE4sJDWUpKvFJy5v4SIZO_t-PHwE9rubf1x540U3lc=",
    host: "Mike Chen",
  },
];

const VenueGrid: React.FC<{ viewMode: "grid" | "list" }> = ({ viewMode }) => {
  return (
    <Box sx={{ width: "100%", boxSizing: "border-box" }}>
      <Typography variant="h6" fontWeight="bold" mb={2}>
        Popular Venues
      </Typography>

      {/* Wrapper for List View to hide scrollbar */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: viewMode === "grid" ? "repeat(auto-fit, minmax(280px, 1fr))" : "repeat(1, 1fr)",
          gap: 2,
          ...(viewMode === "list" && {
            maxHeight: "500px", // Set height for scrolling
            overflowY: "auto", // Enable scrolling
            scrollbarWidth: "none", // Hide scrollbar in Firefox
            "&::-webkit-scrollbar": {
              display: "none", // Hide scrollbar in Chrome, Safari, Edge
            },
          }),
        }}
      >
        {venues.map((venue) => (
          <Card 
            key={venue.id} 
            sx={{ 
              borderRadius: 3, 
              boxShadow: "0px 4px 10px rgba(0,0,0,0.1)", 
              display: viewMode === "list" ? "flex" : "block", 
              position: "relative", 
              overflow: "hidden",
            }}
          >
            {/* Badges (Featured / Top Rated) */}
            {venue.featured && (
              <Chip
                label="Featured"
                sx={{
                  position: "absolute",
                  top: 8,
                  left: 8,
                  backgroundColor: "black",
                  color: "white",
                  fontSize: "12px",
                  fontWeight: "bold",
                  zIndex: 2,
                }}
              />
            )}
            {venue.topRated && (
              <Chip
                label="Top Rated"
                sx={{
                  position: "absolute",
                  top: 8,
                  left: 8,
                  backgroundColor: "#28a745",
                  color: "white",
                  fontSize: "12px",
                  fontWeight: "bold",
                  zIndex: 2,
                }}
              />
            )}

            {/* Venue Image */}
            <CardMedia
              component="img"
              image={venue.image}
              alt={venue.name}
              sx={{
                width: viewMode === "list" ? 300 : "100%",
                height: viewMode === "list" ? "100%" : 180,
                borderTopLeftRadius: viewMode === "list" ? 3 : 12,
                borderBottomLeftRadius: viewMode === "list" ? 3 : 0,
              }}
            />

            {/* Venue Details */}
            <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <Typography variant="subtitle1" fontWeight="bold">
                {venue.name}
              </Typography>

              <Box display="flex" alignItems="center" gap={0.5}>
                <LocationOn sx={{ fontSize: 16, color: "gray" }} />
                <Typography variant="body2" color="text.secondary">
                  {venue.location}
                </Typography>
              </Box>

              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                Professional {venue.name.toLowerCase()} with excellent facilities.
              </Typography>

              <Box display="flex" alignItems="center" gap={0.5} mt={1}>
                <img 
                  src="https://source.unsplash.com/30x30/?person" 
                  alt={venue.host} 
                  style={{ borderRadius: "50%" }}
                />
                <Typography variant="body2" fontWeight="bold">
                  {venue.host}
                </Typography>
              </Box>

              <Divider sx={{ my: 1 }} />

              {/* Rating & Price */}
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box display="flex" alignItems="center" gap={0.5}>
                  <Star sx={{ color: "#FFD700", fontSize: 16 }} />
                  <Typography variant="body2" color="text.secondary">
                    {venue.rating} ({venue.reviews})
                  </Typography>
                </Box>

                <Typography fontWeight="bold">{venue.price}</Typography>
              </Box>

              {/* Book Now Button */}
              <Box display="flex" justifyContent="flex-end" mt={1}>
                <Button variant="contained" sx={{ backgroundColor: "black", color: "white", borderRadius: 2 }}>
                  Book Now
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default VenueGrid;
