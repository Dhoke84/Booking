import React, { useState } from "react";
import {
  Box,
  Typography,
  Select,
  MenuItem,
  Slider,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  IconButton,
  InputBase,
  Drawer,
} from "@mui/material";
import {
  Search,
  LocationOn,
  Star,
  ViewModule,
  ViewList,
  Menu as MenuIcon,
} from "@mui/icons-material";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const venues = [
  {
    id: 1,
    name: "Grand Tennis Center",
    rating: 4.8,
    reviews: 124,
    location: "Downtown Sports Complex",
    price: 8,
    image:
      "https://media.istockphoto.com/id/1040174716/photo/line-on-green-badminton-court.jpg?s=612x612&w=0&k=20&c=kfE4sJDWUpKvFJy5v4SIZO_t-PHwE9rubf1x540U3lc=",
    featured: true,
    host: "John Smith",
    description:
      "Professional indoor tennis court with excellent lighting and facilities.",
  },
  {
    id: 2,
    name: "City Basketball Arena",
    rating: 4.9,
    reviews: 89,
    location: "Central Park Complex",
    price: 8,
    image:
      "https://media.istockphoto.com/id/1040174716/photo/line-on-green-badminton-court.jpg?s=612x612&w=0&k=20&c=kfE4sJDWUpKvFJy5v4SIZO_t-PHwE9rubf1x540U3lc=",
    topRated: true,
    host: "Sarah Johnson",
    description:
      "Professional basketball court with high-quality flooring and equipment.",
  },
  {
    id: 3,
    name: "Elite Badminton Club",
    rating: 4.7,
    reviews: 156,
    location: "Westside Sports Hub",
    price: 8,
    image:
      "https://media.istockphoto.com/id/1040174716/photo/line-on-green-badminton-court.jpg?s=612x612&w=0&k=20&c=kfE4sJDWUpKvFJy5v4SIZO_t-PHwE9rubf1x540U3lc=",
    host: "Mike Chen",
    description:
      "State-of-the-art badminton courts with professional equipment.",
  },
];

const VenuePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sportType, setSportType] = useState("all");
  const [priceRange, setPriceRange] = useState<number>(100);
  const [sort, setSort] = useState("relevance");
  const [view, setView] = useState<"grid" | "list">("list");
  const [filterOpen, setFilterOpen] = useState(false);

  const filteredVenues = venues.filter((venue) => {
    return (
      venue.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (sportType === "all" || venue.name.toLowerCase().includes(sportType)) &&
      venue.price <= priceRange
    );
  });

  const renderFilters = () => (
    <Box sx={{ width: 260, p: 2 }}>
      <Typography variant="subtitle1" fontWeight={600} mb={2}>
        Filters
      </Typography>
      <Box mb={3}>
        <Typography fontSize={14} fontWeight={500} mb={0.5}>
          Sport Type
        </Typography>
        <Select
          fullWidth
          size="small"
          value={sportType}
          onChange={(e) => setSportType(e.target.value)}
        >
          <MenuItem value="all">All Sports</MenuItem>
          <MenuItem value="tennis">Tennis</MenuItem>
          <MenuItem value="basketball">Basketball</MenuItem>
          <MenuItem value="badminton">Badminton</MenuItem>
        </Select>
      </Box>
      <Box>
        <Typography fontSize={14} fontWeight={500} mb={0.5}>
          Price Range
        </Typography>
        <Slider
          value={priceRange}
          onChange={(e, value) => setPriceRange(value as number)}
          min={0}
          max={100}
          sx={{ color: "#1976d2" }}
        />
        <Box display="flex" justifyContent="space-between">
          <Typography fontSize={12} color="text.secondary">
            AED 0
          </Typography>
          <Typography fontSize={12} color="text.secondary">
            AED 100
          </Typography>
        </Box>
      </Box>
    </Box>
  );

  return (
    <>
      <Navbar />
      <Box
        sx={{
          height: "calc(100vh - 64px)",
          display: "flex",
          flexDirection: "column",
          overflowX: "hidden",
          backgroundColor: "#f9f9f9",
        }}
      >
        {/* Responsive Search Bar Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "stretch",
            justifyContent: "space-between",
            gap: 2,
            p: 2,
            mt: 8,
            width: "100%",
            borderBottom: "1px solid #eee",
            backgroundColor: "#f9f9f9",
            position: "fixed",
            top: 0,
            zIndex: 100,
            boxSizing: "border-box",
          }}
        >
          {/* Search bar */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              height: 40,
              px: 1.5,
              border: "1px solid rgba(0, 0, 0, 0.23)",
              borderRadius: "8px",
              backgroundColor: "white",
              flexGrow: 1,
              minWidth: 0,
            }}
          >
            <Search sx={{ color: "#757575", fontSize: 20, mr: 1 }} />
            <InputBase
              placeholder="Search venues..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              fullWidth
              sx={{ fontSize: 14 }}
            />
          </Box>

          {/* Sort and view toggle buttons */}
          <Box
  sx={{
    display: "flex",
    alignItems: "center",
    justifyContent: { xs: "space-between", sm: "flex-end" },
    width: { xs: "100%", sm: "auto" },
    gap: 1,
  }}
>
  <Select
    value={sort}
    onChange={(e) => setSort(e.target.value)}
    size="small"
    sx={{
      minWidth: 140,
      backgroundColor: "#fff",
    }}
  >
    <MenuItem value="relevance">Sort by: Relevance</MenuItem>
    <MenuItem value="rating">Sort by: Rating</MenuItem>
  </Select>

  <IconButton
    onClick={() => setView("grid")}
    color={view === "grid" ? "primary" : "default"}
  >
    <ViewModule />
  </IconButton>
  <IconButton
    onClick={() => setView("list")}
    color={view === "list" ? "primary" : "default"}
  >
    <ViewList />
  </IconButton>

  {/* Move filter icon here next to list/grid */}
  <IconButton
    onClick={() => setFilterOpen(true)}
    sx={{ display: { xs: "inline-flex", md: "none" } }}
  >
    <MenuIcon />
  </IconButton>
</Box>

        </Box>

        <Box
  sx={{
    flex: 1,
    display: "flex",
    overflow: "hidden",
    width: "100%",
    backgroundColor: "#f9f9f9",
    mt: { xs: 15, md: 10 }, // 👈 responsive margin top
  }}
>

          {/* Sidebar */}
          <Box
  sx={{
    width: 300,
    minWidth: 300,
    maxWidth: 300,
    p: 2,
    m: 1,
    backgroundColor: "#fff",
    borderRadius: "10px",
    borderRight: "1px solid #eee",
    overflow: "hidden",
    display: { xs: "none", md: "block" },
  }}
>
  


            {renderFilters()}
          </Box>

          {/* Venue Cards Section */}
          <Box
            sx={{
              flex: 1,
              pl: 3,
              pr: 3,
              pt: 1,
              backgroundColor: "#f9f9f9",
              overflowY: "auto",
              overflowX: "hidden",
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            <Box
              display="grid"
              gridTemplateColumns={
                view === "grid" ? "repeat(auto-fit, minmax(300px, 1fr))" : "1fr"
              }
              gap={3}
            >
              {filteredVenues.map((venue) => (
               <Card
               key={venue.id}
               sx={{
                 display:
                   view === "list"
                     ? { xs: "block", sm: "block", md: "flex" }
                     : "block", // Responsive layout for list view
                 flexDirection: view === "list" ? { md: "row" } : "column",
                 borderRadius: 3,
                 overflow: "hidden",
                 boxShadow: "0px 2px 12px rgba(0,0,0,0.05)",
                 backgroundColor: "#fff",
                 position: "relative",
               }}
             >
               {(venue.featured || venue.topRated) && (
                 <Chip
                   label={venue.featured ? "Featured" : "Top Rated"}
                   sx={{
                     position: "absolute",
                     top: 8,
                     left: 8,
                     backgroundColor: venue.featured ? "#000" : "#28a745",
                     color: "#fff",
                     fontWeight: "bold",
                     fontSize: "12px",
                     px: 1,
                     height: 24,
                     zIndex: 2,
                   }}
                 />
               )}
               <CardMedia
                 component="img"
                 image={venue.image}
                 alt={venue.name}
                 sx={{
                   width:
                     view === "list"
                       ? { xs: "100%", md: 300 }
                       : "100%",
                   height:
                     view === "list"
                       ? { xs: 160, md: "100%" }
                       : 160,
                   objectFit: "cover",
                 }}
               />
               <CardContent
                 sx={{
                   flex: 1,
                   px: { xs: 2, md: 3 },
                   py: { xs: 2, md: 2.5 },
                 }}
               >
                 <Box
                   display="flex"
                   justifyContent="space-between"
                   alignItems="center"
                   flexWrap="wrap"
                 >
                   <Typography fontWeight={700} fontSize={16}>
                     {venue.name}
                   </Typography>
                   <Typography fontWeight={700} fontSize={14}>
                     AED {venue.price}/hr
                   </Typography>
                 </Box>
             
                 <Box display="flex" alignItems="center" gap={0.5} mt={0.5}>
                   <LocationOn sx={{ fontSize: 16, color: "#757575" }} />
                   <Typography fontSize={13} color="text.secondary">
                     {venue.location}
                   </Typography>
                 </Box>
             
                 <Typography fontSize={13} mt={1.2} mb={1}>
                   {venue.description}
                 </Typography>
             
                 <Box display="flex" alignItems="center" gap={1} mb={1}>
                   <img
                     src={venue.image}
                     alt="host"
                     style={{
                       width: 28,
                       height: 28,
                       borderRadius: "50%",
                       objectFit: "cover",
                     }}
                   />
                   <Typography fontSize={13} fontWeight={500}>
                     {venue.host}
                   </Typography>
                 </Box>
             
                 <Box
                   display="flex"
                   justifyContent="space-between"
                   alignItems="center"
                   flexWrap="wrap"
                 >
                   <Box display="flex" alignItems="center" gap={0.5}>
                     <Star sx={{ fontSize: 18, color: "#FFD700" }} />
                     <Typography fontSize={14}>
                       {venue.rating} ({venue.reviews})
                     </Typography>
                   </Box>
             
                   <Button
                     variant="contained"
                     size="small"
                     sx={{
                       backgroundColor: "#000",
                       color: "#fff",
                       borderRadius: "20px",
                       textTransform: "none",
                       px: 2,
                       fontSize: 13,
                     }}
                   >
                     Book Now
                   </Button>
                 </Box>
               </CardContent>
             </Card>
             
              ))}
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Drawer for Mobile Filter */}
      <Drawer
        anchor="left"
        open={filterOpen}
        onClose={() => setFilterOpen(false)}
        sx={{ display: { md: "none" } }}
      >
        {renderFilters()}
      </Drawer>

      <Footer />
    </>
  );
};

export default VenuePage;
