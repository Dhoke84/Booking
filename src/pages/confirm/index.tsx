import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Stack,
  Divider,
  Breadcrumbs,
  Link,
  Chip,
  useTheme,
  useMediaQuery
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ConfirmBooking = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Navbar />
      <Box sx={{ bgcolor: "#f8f9fb", minHeight: "100vh", p: isMobile ? 2 : 4 , mt: -1 }}>
        {/* Breadcrumbs */}
        <Breadcrumbs sx={{ mb: 3 }}>
          <Link underline="hover" color="inherit" href="/" sx={{ display: "flex", alignItems: "center" }}>
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Home
          </Link>
          <Link underline="hover" color="inherit" href="/my-bookings">
            My Bookings
          </Link>
          <Typography color="text.primary">Booking Details</Typography>
        </Breadcrumbs>

        <Card sx={{ p: isMobile ? 2 : 4, borderRadius: 3 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" flexWrap="wrap">
            <Typography variant="h6" fontWeight={700}>
              Booking #BD12345
            </Typography>
            <Chip icon={<CheckCircleIcon />} label="Confirmed" color="success" variant="outlined" />
          </Stack>

          <Grid container spacing={4} mt={2}>
            {/* Left Side */}
            <Grid item xs={12} md={7}>
              <Card elevation={0} sx={{ borderRadius: 3, mb: 2 }}>
                <CardMedia
                  component="img"
                  height={isMobile ? 200 : 300}
                  image="https://media.istockphoto.com/id/1040174716/photo/line-on-green-badminton-court.jpg?s=612x612&w=0&k=20&c=kfE4sJDWUpKvFJy5v4SIZO_t-PHwE9rubf1x540U3lc="
                  sx={{
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: 2
                  }}
                />
                <CardContent>
                  <Typography fontWeight={700}>
                    Grand Tennis Center - Indoor Court 3
                  </Typography>
                  <Stack direction="row" spacing={1} alignItems="center" mt={2}>
                    <CalendarTodayIcon fontSize="small" />
                    <Typography variant="body2">Thursday, March 14, 2024</Typography>
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="center" mt={1}>
                    <AccessTimeIcon fontSize="small" />
                    <Typography variant="body2">2:00 PM - 4:00 PM (2 hours)</Typography>
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="center" mt={1}>
                    <LocationOnIcon fontSize="small" />
                    <Typography variant="body2">
                      123 Sports Avenue, New York, NY 10001
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>

            {/* Right Side */}
            <Grid item xs={12} md={5}>
              {/* Price Breakdown */}
              <Box sx={{ bgcolor: "#f9fafc", borderRadius: 2, p: 3, mb: 3 }}>
                <Typography fontWeight={600} mb={1}>
                  Price Breakdown
                </Typography>
                <Stack spacing={1}>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body2">Court Rental (2 hours × AED 40/hour)</Typography>
                    <Typography variant="body2">AED 80.00</Typography>
                  </Stack>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body2">Equipment Rental</Typography>
                    <Typography variant="body2">AED 15.00</Typography>
                  </Stack>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body2">Service Fee</Typography>
                    <Typography variant="body2">AED 5.00</Typography>
                  </Stack>
                  <Divider sx={{ my: 1 }} />
                  <Stack direction="row" justifyContent="space-between">
                    <Typography fontWeight={600}>Total Amount</Typography>
                    <Typography fontWeight={600}>AED 100.00</Typography>
                  </Stack>
                </Stack>
              </Box>

              {/* Payment Info */}
              <Box sx={{ bgcolor: "#fff", borderRadius: 2, p: 3 }}>
                <Typography fontWeight={600} mb={2}>
                  Payment Information
                </Typography>

                <Stack direction="row" spacing={1} alignItems="center">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
                    alt="Visa"
                    style={{ width: 30 }}
                  />
                  <Typography variant="body2" color="text.primary">
                    Visa ending in 4242
                  </Typography>
                </Stack>
                <Typography variant="body2" color="text.secondary" ml={5}>
                  Transaction ID: TXN987654321
                </Typography>

                {/* Buttons */}
                <Stack spacing={1.5} mt={3}>
                  <Button
                    variant="outlined"
                    fullWidth
                    startIcon={<i className="fas fa-edit" />}
                    sx={{ textTransform: "none", fontWeight: 600, borderRadius: 2 }}
                  >
                    ✏️ Modify Booking
                  </Button>

                  <Button
                    variant="contained"
                    fullWidth
                    startIcon={<i className="fas fa-download" />}
                    sx={{
                      textTransform: "none",
                      fontWeight: 600,
                      bgcolor: "#000",
                      "&:hover": { bgcolor: "#222" },
                      borderRadius: 2
                    }}
                  >
                    ⬇️ Download Invoice
                  </Button>

                  <Button
                    variant="outlined"
                    fullWidth
                    startIcon={<i className="fas fa-times-circle" />}
                    color="error"
                    sx={{
                      textTransform: "none",
                      fontWeight: 600,
                      borderColor: "#f44336",
                      color: "#f44336",
                      borderRadius: 2
                    }}
                  >
                    ❌ Cancel Booking
                  </Button>

                  <Button
                    fullWidth
                    variant="text"
                    startIcon={<i className="fas fa-comment-dots" />}
                    sx={{ textTransform: "none", fontWeight: 600, color: "#555" }}
                  >
                    🗨️ Contact Support
                  </Button>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Card>

        {/* Venue Policies */}
        <Card sx={{ mt: 4, borderRadius: 3 }}>
          <CardContent>
            <Typography fontWeight={600} mb={2}>
              Venue Policies
            </Typography>
            <Stack spacing={1}>
              <PolicyItem text="Please arrive 15 minutes before your scheduled time." />
              <PolicyItem text="Cancellations must be made at least 24 hours in advance for a full refund." />
              <PolicyItem text="Proper tennis shoes and attire required." />
              <PolicyItem text="No food or drinks allowed on the court except water." />
            </Stack>
          </CardContent>
        </Card>
      </Box>
      <Footer />
    </>
  );
};

const PolicyItem = ({ text }: { text: string }) => (
  <Stack direction="row" spacing={1} alignItems="center">
    <WarningAmberOutlinedIcon fontSize="small" />
    <Typography variant="body2">{text}</Typography>
  </Stack>
);

export default ConfirmBooking;
