import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Divider,
  FormControlLabel,
  Checkbox,
  MenuItem,
  Select,
  TextField,
  Grid,
  Paper,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate } from "react-router-dom";


const timeSlots = [
  { time: "08:00 - 08:30", price: 250 },
  { time: "08:30 - 09:00", price: 250 },
  { time: "09:00 - 09:30", price: 250, soldOut: true },
  { time: "09:30 - 10:00", price: 250 },
  { time: "10:00 - 10:30", price: 250 },
  { time: "10:30 - 11:00", price: 250 },
  { time: "11:00 - 11:30", price: 250 },
  { time: "11:30 - 12:00", price: 250 },
  { time: "12:00 - 12:30", price: 250 },
  { time: "12:30 - 13:00", price: 250 },
  { time: "13:00 - 13:30", price: 250 },
  { time: "13:30 - 14:00", price: 250 },
];

const BookingPage = () => {
    
  const [courtType, setCourtType] = useState("indoor");
  const [racketChecked, setRacketChecked] = useState(false);
  const [ballsChecked, setBallsChecked] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");
  const navigate = useNavigate();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const baseCourtPrice = 500;
  const racketPrice = 40;
  const ballsPrice = 25;

  const equipmentTotal =
    (racketChecked ? racketPrice : 0) + (ballsChecked ? ballsPrice : 0);
  const total = baseCourtPrice + equipmentTotal;

  return (
    <Box
      px={isMobile ? 2 : isTablet ? 4 : 8}
      pt={2}
      pb={8}
      sx={{ bgcolor: "#f9f9fb", minHeight: "100vh" }}
    >
      <Grid container spacing={isMobile ? 2 : 4}>
        {/* Left Section */}
        <Grid item xs={12} md={8}>
          {/* Step 1: Date & Time */}
          <Paper sx={{ p: isMobile ? 2 : 4, borderRadius: 3, mb: 4 }}>
            <Box
              display="flex"
              justifyContent="space-between"
              mb={2}
              flexDirection={isMobile ? "column" : "row"}
            >
              <Typography variant="h6" fontWeight={600}>
                Step 1: Select Date & Time
              </Typography>
              <Typography color="text.secondary" mt={isMobile ? 1 : 0}>
                Step 1 of 3
              </Typography>
            </Box>

            <Typography fontWeight={600} mb={1}>
              Select Date
            </Typography>
            <Box
  display="flex"
  flexDirection="row"
  flexWrap="wrap"
  gap={2}
  mb={3}
>

              <Button variant="outlined" sx={btnStyle}>
                <Box>
                  <Typography variant="caption" color="text.secondary">
                    Today
                  </Typography>
                  <Typography fontWeight={500}>Mar 15</Typography>
                </Box>
              </Button>
              <Button variant="outlined" sx={btnStyle}>
                <Box>
                  <Typography variant="caption" color="text.secondary">
                    Tomorrow
                  </Typography>
                  <Typography fontWeight={500}>Mar 16</Typography>
                </Box>
              </Button>
              <Button
                variant="outlined"
                sx={{ ...btnStyle, minWidth: 140, gap: 1.2 }}
              >
                <CalendarTodayIcon sx={{ fontSize: 18 }} />
                <Typography fontWeight={500}>Choose Date</Typography>
              </Button>
            </Box>

            <Typography fontWeight={600} mb={1}>
              Available Time Slots
            </Typography>

            {isDesktop ? (
              // Desktop View: Show time slots in grid
              <Grid container spacing={2} mb={3}>
                {timeSlots.map(({ time, price, soldOut }, idx) => (
                  <Grid item xs={6} sm={4} md={3} key={idx}>
                    <Box
                      onClick={() => !soldOut && setSelectedTime(time)}
                      sx={{
                        p: 2,
                        border: "1px solid #ddd",
                        borderRadius: 2,
                        bgcolor: soldOut
                          ? "#f5f5f5"
                          : selectedTime === time
                          ? "#000"
                          : "white",
                        color: soldOut
                          ? "#999"
                          : selectedTime === time
                          ? "white"
                          : "black",
                        cursor: soldOut ? "not-allowed" : "pointer",
                        textAlign: "center",
                      }}
                    >
                      <Typography fontWeight={600}>{time}</Typography>
                      <Typography variant="body2">
                        {soldOut ? "Sold out" : `AED ${price}/30min`}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            ) : (
              // Mobile & Tablet View: Use dropdown
              <Select
                fullWidth
                size="small"
                displayEmpty
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                sx={{ mb: 3 }}
              >
                <MenuItem value="" disabled>
                  Select a time slot
                </MenuItem>
                {timeSlots.map(({ time, soldOut }, idx) => (
                  <MenuItem
                    key={idx}
                    value={time}
                    disabled={soldOut}
                    sx={soldOut ? { color: "#aaa" } : {}}
                  >
                    {time} {soldOut ? "(Sold out)" : ""}
                  </MenuItem>
                ))}
              </Select>
            )}

            <FormControlLabel
              control={<Checkbox />}
              label="Make this a recurring booking"
            />

            <Box
              display="flex"
              flexDirection={isMobile ? "column" : "row"}
              gap={2}
              my={2}
            >
              <Box flex={1}>
                <Typography fontWeight={500} mb={1}>
                  Repeat Every
                </Typography>
                <Select fullWidth defaultValue="Daily" size="small">
                  <MenuItem value="Daily">Daily</MenuItem>
                  <MenuItem value="Weekly">Weekly</MenuItem>
                  <MenuItem value="Monthly">Monthly</MenuItem>
                </Select>
              </Box>

              <Box flex={1}>
                <Typography fontWeight={500} mb={1}>
                  Until Date
                </Typography>
                <TextField fullWidth type="date" size="small" />
              </Box>
            </Box>

            <Typography fontWeight={500} mb={1}>
              Select Days
            </Typography>
            <Box display="flex" gap={1} flexWrap="wrap">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                <Button key={day} variant="outlined" sx={dayBtnStyle}>
                  {day}
                </Button>
              ))}
            </Box>
          </Paper>

          {/* Step 2: Court & Extras */}
          <Paper sx={{ p: isMobile ? 2 : 4, borderRadius: 3, mb: 4 }}>
            <Box display="flex" justifyContent="space-between" mb={2}>
              <Typography variant="h6" fontWeight={600}>
                Step 2: Choose Court & Extras
              </Typography>
              <Typography color="text.secondary">Step 2 of 3</Typography>
            </Box>

            <Typography color="text.secondary" fontWeight={500} mb={1}>
              Court Type
            </Typography>
            <Box display="flex" gap={2} flexDirection="row" mb={3}>
              <Button
                onClick={() => setCourtType("indoor")}
                fullWidth
                startIcon={<HomeIcon />}
                sx={{
                  ...courtBtnStyle,
                  backgroundColor:
                    courtType === "indoor" ? "black" : "#f5f5f5",
                  color: courtType === "indoor" ? "white" : "black",
                }}
              >
                Indoor Court
              </Button>
              <Button
                onClick={() => setCourtType("outdoor")}
                fullWidth
                startIcon={<SettingsIcon />}
                sx={{
                  ...courtBtnStyle,
                  backgroundColor:
                    courtType === "outdoor" ? "black" : "#f5f5f5",
                  color: courtType === "outdoor" ? "white" : "black",
                }}
              >
                Outdoor Court
              </Button>
            </Box>

            <Typography color="text.secondary" fontWeight={500} mb={1}>
              Equipment Rental
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Paper variant="outlined" sx={{ borderRadius: 2, p: 1 }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={racketChecked}
                        onChange={(e) =>
                          setRacketChecked(e.target.checked)
                        }
                      />
                    }
                    label="Tennis Racket (+AED 40)"
                  />
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper variant="outlined" sx={{ borderRadius: 2, p: 1 }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={ballsChecked}
                        onChange={(e) => setBallsChecked(e.target.checked)}
                      />
                    }
                    label="Tennis Balls (+AED 25)"
                  />
                </Paper>
              </Grid>
            </Grid>
          </Paper>

          {/* Step 3: Review */}
          <Paper sx={{ p: isMobile ? 2 : 4, borderRadius: 3 }}>
            <Box display="flex" justifyContent="space-between" mb={2}>
              <Typography variant="h6" fontWeight={600}>
                Step 3: Review & Confirm
              </Typography>
              <Typography color="text.secondary">Step 3 of 3</Typography>
            </Box>

            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Typography color="text.secondary">Date</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography>March 15, 2024</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography color="text.secondary">Time</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography>{selectedTime || "Not selected"}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography color="text.secondary">Court Type</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography>
                  {courtType === "indoor" ? "Indoor Court" : "Outdoor Court"}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography color="text.secondary">Players</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography>2</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography color="text.secondary">Equipment</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography>
                  {[racketChecked ? "Tennis Racket" : null,
                    ballsChecked ? "Tennis Balls" : null]
                    .filter(Boolean)
                    .join(", ") || "None"}
                </Typography>
              </Grid>
            </Grid>

            <Divider sx={{ my: 2 }} />
            <Box display="flex" justifyContent="space-between">
              <Typography fontWeight={600}>Total</Typography>
              <Typography fontWeight={600}>AED {total}</Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Right Section - Summary */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: isMobile ? 2 : 4, borderRadius: 3 }}>
            <Typography fontWeight={600} mb={2}>
              Booking Summary
            </Typography>
            <Box display="flex" justifyContent="space-between" mb={1}>
              <Typography color="text.secondary">Court Rental</Typography>
              <Typography fontWeight={500}>AED 500</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" mb={2}>
              <Typography color="text.secondary">Equipment</Typography>
              <Typography fontWeight={500}>AED {equipmentTotal}</Typography>
            </Box>
            <Divider sx={{ mb: 2 }} />
            <Box display="flex" justifyContent="space-between" mb={2}>
              <Typography fontWeight={600}>Total</Typography>
              <Typography fontWeight={600}>AED {total}</Typography>
            </Box>
            <Button
  fullWidth
  variant="contained"
  sx={{
    bgcolor: "black",
    color: "white",
    borderRadius: 2,
    py: 1.5,
    textTransform: "none",
    fontWeight: 500,
    mb: 2,
    "&:hover": { bgcolor: "#111" },
  }}
  onClick={() => navigate("/details")}
>
  Confirm Booking
</Button>

            <Typography
              variant="caption"
              display="block"
              textAlign="center"
              color="text.secondary"
            >
              🔒 Secure payment powered by Stripe
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

// Styles
const btnStyle = {
  borderRadius: 2,
  minWidth: 120,
  textTransform: "none",
  fontWeight: 500,
  color: "black",
  borderColor: "#ccc",
};

const courtBtnStyle = {
  textTransform: "none",
  borderRadius: 2,
  height: 50,
  width: "100%",
};

const dayBtnStyle = {
  minWidth: 50,
  borderRadius: 2,
  borderColor: "#ddd",
  color: "black",
  fontWeight: 500,
};

export default BookingPage;
