import React, { useState } from "react";
import { Box, Typography, Select, MenuItem, Slider } from "@mui/material";

const Filter: React.FC = () => {
  const [sportType, setSportType] = useState("all");
  const [priceRange, setPriceRange] = useState<number>(50); // Default price range

  return (
    <Box
      sx={{
        width: "100%",  // Ensure it takes the full sidebar width
        p: 2,
        borderRadius: 2,
        backgroundColor: "white",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        boxSizing: "border-box",
      }}
    >
      {/* Filters Title */}
      <Typography variant="subtitle1" fontWeight="bold" mb={2}>
        Filters
      </Typography>

      {/* Sport Type Dropdown */}
      <Typography variant="body2" mb={1}>
        Sport Type
      </Typography>
      <Select
        value={sportType}
        onChange={(e) => setSportType(e.target.value)}
        fullWidth
        size="small"
        sx={{
          borderRadius: 1,
          backgroundColor: "#fff",
        }}
      >
        <MenuItem value="all">All Sports</MenuItem>
        <MenuItem value="football">Football</MenuItem>
        <MenuItem value="basketball">Basketball</MenuItem>
        <MenuItem value="tennis">Tennis</MenuItem>
      </Select>

      {/* Price Range Slider */}
      <Typography variant="body2" mt={2} mb={1}>
        Price Range
      </Typography>
      <Slider
        value={priceRange}
        onChange={(e, newValue) => setPriceRange(newValue as number)}
        min={0}
        max={100}
        sx={{ color: "#1976D2" }} // Blue slider color
      />
      <Box display="flex" justifyContent="space-between">
        <Typography variant="caption">AED 0</Typography>
        <Typography variant="caption">AED {priceRange}</Typography>
      </Box>
    </Box>
  );
};

export default Filter;
