import React from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Breadcrumbs,
  Link,
  Typography
} from "@mui/material";
import {
  Star,
  LocationOn,
  NavigateNext,
  Home
} from "@mui/icons-material";
import Slider from "react-slick";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BookingStep1 from "../../components/BookingForm";

// Sample venue data
const venues = [
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

const VenueDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const venue = venues.find((v) => v.id === Number(id));
  
    if (!venue) {
      return <Typography variant="h6">Venue not found</Typography>;
    }
  
    const sliderSettings = {
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      appendDots: (dots: React.ReactNode) => (
        <Box
          sx={{
            position: "absolute",
            bottom: 10,
            right: 20,
            display: "flex",
            justifyContent: "flex-end"
          }}
        >
          <ul style={{ margin: 0 }}>{dots}</ul>
        </Box>
      )
    };
  
    return (
      <>
        <Navbar />
  
        <Box sx={{ px: { xs: 2, sm: 4, md: 8 }, py: 2 }}>
          {/* Breadcrumbs */}
          <Breadcrumbs separator={<NavigateNext fontSize="small" />} aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/" sx={{ display: "flex", alignItems: "center" }}>
              <Home sx={{ mr: 0.5 }} fontSize="small" />
              Home
            </Link>
            <Link underline="hover" color="inherit" href="/venues">
              Tennis Center
            </Link>
            <Typography color="text.primary">Book a Court</Typography>
          </Breadcrumbs>
  
          {/* Image Carousel with Overlay */}
          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: "1500px",
              height: { xs: 200, sm: 300, md: 400 },
              overflow: "hidden",
              borderRadius: 2,
              mt: 3,
              mx: "auto"
            }}
          >
            <Slider {...sliderSettings}>
              {[venue.image, venue.image, venue.image].map((img, index) => (
                <Box key={index}>
                  <img
                    src={img}
                    alt={`Venue ${index + 1}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "8px"
                    }}
                  />
                </Box>
              ))}
            </Slider>
  
            {/* Overlay Info */}
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                p: 2,
                background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)"
              }}
            >
              <Typography variant="h6" fontWeight="bold" color="white">
                {venue.name}
              </Typography>
              <Box display="flex" alignItems="center" gap={1} color="white" mt={0.5}>
                <LocationOn fontSize="small" />
                <Typography variant="body2">{venue.location}</Typography>
                <Typography variant="body2" mx={1}>
                  |
                </Typography>
                <Star fontSize="small" sx={{ color: "gold" }} />
                <Typography variant="body2">
                  {venue.rating} ({venue.reviews} reviews)
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
  <BookingStep1 />
        <Footer />
      </>
    );
  };
  
  export default VenueDetails;