import React, { useState } from "react";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  TextField,
  InputAdornment,
  IconButton,
  Chip,
  Menu,
  MenuItem,
  Paper,
  Stack,
  Button,
  Avatar,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Search,
  FilterList,
  MoreVert,
  Edit,
  Delete,
  Cancel,
  ArrowBackIosNew,
  ArrowForwardIos,
} from "@mui/icons-material";

import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const bookings = [
  {
    court: "Tennis Court A1",
    location: "Sports Center Downtown",
    date: "May 15, 2024",
    time: "14:00 - 15:00",
    amount: "AED 35",
    status: "Confirmed",
    image:
      "https://media.istockphoto.com/id/1040174716/photo/line-on-green-badminton-court.jpg?s=612x612&w=0&k=20&c=kfE4sJDWUpKvFJy5v4SIZO_t-PHwE9rubf1x540U3lc=",
  },
  {
    court: "Basketball Court B2",
    location: "Community Sports Hub",
    date: "May 18, 2024",
    time: "16:00 - 17:00",
    amount: "AED 35",
    status: "Pending",
    image:
      "https://media.istockphoto.com/id/1040174716/photo/line-on-green-badminton-court.jpg?s=612x612&w=0&k=20&c=kfE4sJDWUpKvFJy5v4SIZO_t-PHwE9rubf1x540U3lc=",
  },
];

const MyBookings = () => {
  const [tab, setTab] = useState(0);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedRow, setSelectedRow] = useState<number | null>(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleMenuOpen = (
    event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    setAnchorEl(event.currentTarget);
    setSelectedRow(index);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedRow(null);
  };

  return (
    <>
      <Navbar />
      <Box p={isMobile ? 2 : 4} bgcolor="#f9fafb" minHeight="100vh">
        <Typography variant="h6" fontWeight={700}>
          My Bookings
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={3}>
          View and manage your upcoming and past court bookings.
        </Typography>

        <Tabs
          value={tab}
          onChange={(_, val) => setTab(val)}
          sx={{
            mb: 3,
            borderBottom: "1px solid #e0e0e0",
            "& .MuiTabs-indicator": {
              backgroundColor: "black",
            },
          }}
        >
          <Tab
            label="Upcoming Bookings"
            sx={{
              color: "black",
              textTransform: "none",
              fontWeight: 500,
              "&.Mui-selected": {
                color: "black",
                fontWeight: "bold",
              },
            }}
          />
          <Tab
            label="Past Bookings"
            sx={{
              color: "black",
              textTransform: "none",
              fontWeight: 500,
              "&.Mui-selected": {
                color: "black",
                fontWeight: "bold",

              },
            }}
          />
        </Tabs>

        {/* UPDATED SEARCH + FILTER BAR */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
          p={isMobile ? 1 : 0}
          sx={{
            border: isMobile ? "1px solid #e2e8f0" : "none",
            borderRadius: isMobile ? "12px" : 0,
            backgroundColor: isMobile ? "white" : "transparent",
            boxShadow: isMobile ? "0 0 0 1px rgba(0,0,0,0.05)" : "none",
          }}
        >
        <TextField
  placeholder="Search bookings..."
  variant="standard"
  fullWidth={isMobile}
  InputProps={{
    disableUnderline: true,
    startAdornment: (
      <InputAdornment position="start">
        <Search sx={{ color: "#6b7280" }} />
      </InputAdornment>
    ),
    sx: {
      pl: 1,
      py: 1,
      fontSize: 16,
    },
  }}
  sx={{
    bgcolor: isMobile ? "transparent" : "white",
    border: isMobile ? "none" : "1px solid black",
    borderRadius: isMobile ? 0 : "8px",
    width: isMobile ? "100%" : "700px",
  }}
/>


          <Button
            startIcon={<FilterList />}
            sx={{
              ml: 1,
              px: 2,
              py: 1.3,
              bgcolor: "white",
              color: "black",
              border: "1px solid black",
              borderRadius: 2,
              textTransform: "none",
              fontWeight: 500,
              "&:hover": {
                bgcolor: "#e2e8f0",
              },
            }}
          >
            Filter
          </Button>
        </Box>

        {/* Responsive Bookings */}
        {isMobile ? (
          <Stack spacing={2}>
            {bookings.map((booking, index) => (
              <Paper key={index} sx={{ p: 2, borderRadius: 2 }}>
                <Stack direction="row" spacing={2}>
                  <Avatar
                    src={booking.image}
                    variant="rounded"
                    sx={{ width: 64, height: 64 }}
                  />
                  <Box flexGrow={1}>
                    <Typography fontWeight={600}>{booking.court}</Typography>
                    <Typography variant="caption" color="text.secondary">
                      {booking.location}
                    </Typography>

                    <Stack
                      direction="row"
                      spacing={1}
                      mt={1}
                      flexWrap="wrap"
                      useFlexGap
                    >
                      <Typography variant="body2" color="text.secondary">
                        📅 {booking.date}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        ⏰ {booking.time}
                      </Typography>
                      <Typography fontWeight={600}>
                        {booking.amount}
                      </Typography>
                      <Chip
                        label={booking.status}
                        size="small"
                        sx={{
                          bgcolor:
                            booking.status === "Confirmed"
                              ? "#d1fae5"
                              : "#fef3c7",
                          color:
                            booking.status === "Confirmed"
                              ? "#059669"
                              : "#92400e",
                          fontWeight: 500,
                          height: 22,
                        }}
                      />
                    </Stack>
                  </Box>

                  <IconButton onClick={(e) => handleMenuOpen(e, index)}>
                    <MoreVert />
                  </IconButton>
                </Stack>
              </Paper>
            ))}
          </Stack>
        ) : (
          <Paper elevation={1}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              px={2}
              py={1.5}
              sx={{ bgcolor: "#f3f4f6", borderBottom: "1px solid #ddd" }}
            >
              <Typography fontWeight={400} fontSize={14} width="25%" color="rgb(92, 89, 89)">
                Court
              </Typography>
              <Typography fontWeight={400} fontSize={14} width="20%" color="rgb(92, 89, 89)">
                Date & Time
              </Typography>
              <Typography fontWeight={400} fontSize={14} width="10%" color="rgb(92, 89, 89)">
                Payment
              </Typography>
              <Typography fontWeight={400} fontSize={14} width="15%" color="rgb(92, 89, 89)">
                Status
              </Typography>
              <Typography fontWeight={400} fontSize={14} width="10%" color="rgb(92, 89, 89)">
                Action
              </Typography>
            </Box>

            {bookings.map((booking, index) => (
              <Box
                key={index}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                p={2}
                borderBottom={index !== bookings.length - 1 ? "1px solid #eee" : "none"}
              >
                <Stack direction="row" spacing={2} alignItems="center" width="25%">
                  <Avatar src={booking.image} variant="rounded" />
                  <Box>
                    <Typography fontWeight={600}>{booking.court}</Typography>
                    <Typography variant="caption" color="text.secondary">
                      {booking.location}
                    </Typography>
                  </Box>
                </Stack>

                <Box width="20%">
                  <Typography variant="body2">{booking.date}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    {booking.time}
                  </Typography>
                </Box>

                <Typography width="10%">{booking.amount}</Typography>

                <Box width="15%">
                  <Chip
                    label={booking.status}
                    size="small"
                    sx={{
                      bgcolor: booking.status === "Confirmed" ? "#d1fae5" : "#fef3c7",
                      color: booking.status === "Confirmed" ? "#059669" : "#92400e",
                      fontWeight: 500,
                      height: 24,
                    }}
                  />
                </Box>

                <Box width="10%">
                  <IconButton onClick={(e) => handleMenuOpen(e, index)}>
                    <MoreVert />
                  </IconButton>
                </Box>
              </Box>
            ))}
          </Paper>
        )}

        {/* Action Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          PaperProps={{
            sx: {
              mt: 1,
              borderRadius: 2,
              minWidth: 180,
              boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
            },
          }}
        >
          <MenuItem
            onClick={handleMenuClose}
            sx={{
              "&:hover": {
                color: "#dc2626",
                svg: { color: "#dc2626" },
              },
            }}
          >
            <Cancel fontSize="small" sx={{ mr: 1, color: "#6b7280" }} />
            Cancel Booking
          </MenuItem>
          <MenuItem
            onClick={handleMenuClose}
            sx={{
              "&:hover": {
                color: "#059669",
                svg: { color: "#059669" },
              },
            }}
          >
            <Edit fontSize="small" sx={{ mr: 1, color: "#6b7280" }} />
            Edit
          </MenuItem>
          <MenuItem
            onClick={handleMenuClose}
            sx={{
              "&:hover": {
                color: "#dc2626",
                svg: { color: "#dc2626" },
              },
            }}
          >
            <Delete fontSize="small" sx={{ mr: 1, color: "#6b7280" }} />
            Delete
          </MenuItem>
        </Menu>

        {/* Pagination */}
        <Box mt={3} display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="caption">Showing 1 to 2 of 2 results</Typography>
          <Box display="flex" alignItems="center" gap={1}>
            <Box
              sx={{
                border: "1px solid #ccc",
                borderRadius: "4px",
                px: 1,
                py: 1,
                cursor: "pointer",
                bgcolor: "white",
                color: "black",
                "&:hover": { bgcolor: "#f3f4f6" },
              }}
            >
              <ArrowBackIosNew sx={{ fontSize: 14 }} />
            </Box>
            <Box
              sx={{
                border: "1px solid #ccc",
                borderRadius: "4px",
                px: 2,
                py: 0.5,
                fontWeight: 600,
                cursor: "pointer",
                bgcolor: "black",
                color: "white",
              }}
            >
              1
            </Box>
            <Box
              sx={{
                border: "1px solid #ccc",
                borderRadius: "4px",
                px: 1,
                py: 1,
                cursor: "pointer",
                bgcolor: "white",
                color: "black",
                "&:hover": { bgcolor: "#f3f4f6" },
              }}
            >
              <ArrowForwardIos sx={{ fontSize: 14 }} />
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default MyBookings;
