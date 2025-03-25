import React, { useState } from "react";
import { 
  Box, TextField, InputAdornment, Select, MenuItem, IconButton 
} from "@mui/material";
import { Search, GridView, List } from "@mui/icons-material";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Filter from "../../components/Filter";
import VenueGrid from "../../components/VeneuGrid";

const Book: React.FC = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <>
      <Navbar />

      {/* Fixed Search & Sort Section */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          position: "fixed",  // Fixed position
          top: "64px",  // Below the navbar
          left: 0,
          width: "100%",
          padding: "10px 20px",
          backgroundColor: "#f8f9fa",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
          zIndex: 1000,  // Keeps it above content
          boxSizing: "border-box",
        }}
      >
        {/* Search Input */}
        <TextField
          placeholder="Search for venues..."
          variant="outlined"
          size="small"
          sx={{ flex: 1, backgroundColor: "white" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search color="action" />
              </InputAdornment>
            ),
          }}
        />

        {/* Sort Dropdown */}
        <Select defaultValue="relevance" size="small" sx={{ minWidth: 150, mx: 2, backgroundColor: "white" }}>
          <MenuItem value="relevance">Sort by: Relevance</MenuItem>
          <MenuItem value="price_low">Sort by: Price (Low to High)</MenuItem>
          <MenuItem value="price_high">Sort by: Price (High to Low)</MenuItem>
          <MenuItem value="rating">Sort by: Rating</MenuItem>
        </Select>

        {/* View Toggle Buttons */}
        <Box display="flex">
          <IconButton onClick={() => setViewMode("grid")} color={viewMode === "grid" ? "primary" : "default"}>
            <GridView />
          </IconButton>
          <IconButton onClick={() => setViewMode("list")} color={viewMode === "list" ? "primary" : "default"}>
            <List />
          </IconButton>
        </Box>
      </Box>

      {/* Content Section */}
      <Box 
        display="flex"
        sx={{ 
          width: "100%", 
          height: "calc(100vh - 64px - 50px)", // Adjust height dynamically
          padding: "10px",
          marginTop: "130px", // Ensures content doesn't overlap with the fixed search bar
          boxSizing: "border-box",
        }}
      >
        {/* Sidebar */}
        <Box 
          sx={{ 
            width: "300px", 
            backgroundColor: "#fff", 
            boxShadow: "0px 4px 10px rgba(0,0,0,0.1)", 
            borderRadius: 2, 
            overflowY: "auto",
            boxSizing: "border-box",
          }}
        >
          <Filter />
        </Box>

        {/* Main Content */}
        <Box 
          sx={{ 
            flex: 1, 
            backgroundColor: "#fff", 
            boxShadow: "0px 4px 10px rgba(0,0,0,0.1)", 
            borderRadius: 2, 
            padding: "10px", 
            overflowY: "auto",
            boxSizing: "border-box",
          }}
        >
          <VenueGrid viewMode={viewMode} />
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default Book;
