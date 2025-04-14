import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Divider,
  Radio,
  RadioGroup,
  FormControlLabel,
  TextField,
  Stack,
  Breadcrumbs,
  Link,
  useMediaQuery,
  useTheme
} from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import HomeIcon from "@mui/icons-material/Home";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import DoNotDisturbAltOutlinedIcon from "@mui/icons-material/DoNotDisturbAltOutlined";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";



const SubDetails: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();


  return (
    <>
      <Navbar />
      <Box sx={{ bgcolor: "#f0f2f5", pt: 3, pb: 4 ,mt: -1 }}>
        <Breadcrumbs sx={{ mb: 2, px: 3 }}>
          <Link underline="hover" color="inherit" href="/" sx={{ display: "flex", alignItems: "center" }}>
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Home
          </Link>
          <Link underline="hover" color="inherit" href="/my-bookings">
            My Bookings
          </Link>
          <Typography color="text.primary">Booking Details</Typography>
        </Breadcrumbs>

        <Box
          px={isMobile ? 2 : 4}
          maxWidth="1450px"
          mx="auto"
          bgcolor="#fff"
        
          boxShadow={0}
          borderRadius={2}
          p={isMobile ? 2 : 4}
          m={isMobile ? 0 : 3 }
        >
          <Typography variant="h6" fontWeight={700} mb={3}>
            Booking Summary
          </Typography>

          <Grid container spacing={4}>
            {/* Left Section */}
            <Grid item xs={12} md={6}>
            <Card
  sx={{
    borderRadius: 3,
    height: "100%",
    boxShadow: "none",
    border: "none",
  }}
>
  <CardMedia
    component="img"
    image="https://media.istockphoto.com/id/1040174716/photo/line-on-green-badminton-court.jpg?s=612x612&w=0&k=20&c=kfE4sJDWUpKvFJy5v4SIZO_t-PHwE9rubf1x540U3lc="
    alt="Court"
    sx={{
      width: "100%",
      height: isMobile ? 200 : 300, // ✅ Responsive height
      objectFit: "cover",
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12
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

            {/* Right Section */}
            <Grid item xs={12} md={6}>
              {/* Cart Summary */}
              <Card variant="outlined" sx={{ borderRadius: 3, mb: 3, bgcolor: "#f8f9fb" }}>

                <CardContent>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography fontWeight={600}>Cart Summary</Typography>
                    <Button
                      size="small"
                      variant="contained"
                      sx={{
                        bgcolor: "#fffbcc",
                        color: "#795548",
                        borderRadius: 5,
                        fontWeight: 500,
                        px: 2,
                        py: 0.5,
                        fontSize: "0.75rem",
                        textTransform: "none",
                        boxShadow: "none",
                        "&:hover": {
                          bgcolor: "#fff59d"
                        }
                      }}
                    >
                      🛒 Ready to Add
                    </Button>
                  </Stack>

                  <Stack spacing={1} mt={2}>
                    <Stack direction="row" justifyContent="space-between">
                      <Typography variant="body2">Court Rental (2 hours)</Typography>
                      <Typography variant="body2">AED 367.30</Typography>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between">
                      <Typography variant="body2">Service Fee</Typography>
                      <Typography variant="body2">AED 18.37</Typography>
                    </Stack>
                    <Divider sx={{ my: 1 }} />
                    <Stack direction="row" justifyContent="space-between">
                      <Typography fontWeight={600}>Total</Typography>
                      <Typography fontWeight={600}>AED 385.67</Typography>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>

              {/* Payment Section */}
         

<Card variant="outlined" sx={{ borderRadius: 3,  bgcolor: "#f8f9fb" }}>
  <CardContent>
    <Typography fontWeight={600} mb={2}>
      Select Payment Method
    </Typography>

    <RadioGroup defaultValue="card" name="payment-method">
      {/* Credit/Debit Card Option */}
      <Box
        sx={(theme) => ({
          display: "flex",
          alignItems: "center",
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 2,
          bgcolor: "white",
          px: 2,
          py: 1.5,
          mb: 2,
          cursor: "pointer",
          "&:hover": {
            borderColor: theme.palette.primary.main,
          },
          '& input[type="radio"]:checked ~ div': {
            fontWeight: 600,
            color: theme.palette.text.primary,
          }
        })}
      >
        <FormControlLabel
          value="card"
          control={<Radio />}
          label={
            <Box>
              <Typography>Credit/Debit Card</Typography>
              <Typography variant="caption" color="text.secondary">
                Pay securely with your card
              </Typography>
            </Box>
          }
          sx={{ flex: 1 }}
        />
        <CreditCardIcon />
      </Box>

      {/* PayPal Option */}
      <Box
        sx={(theme) => ({
          display: "flex",
          alignItems: "center",
          border: "1px solid",
          borderColor: "divider",
          bgcolor: "white",
          borderRadius: 2,
          px: 2,
          py: 1.5,
          mb: 2,
          cursor: "pointer",
          "&:hover": {
            borderColor: theme.palette.primary.main,
          },
          '& input[type="radio"]:checked ~ div': {
            fontWeight: 600,
            color: theme.palette.text.primary,
          }
        })}
      >
        <FormControlLabel
          value="paypal"
          control={<Radio />}
          label={
            <Box>
              <Typography>PayPal</Typography>
              <Typography variant="caption" color="text.secondary">
                Pay with your PayPal account
              </Typography>
            </Box>
          }
          sx={{ flex: 1 }}
        />
        <AccountBalanceWalletIcon />
      </Box>
    </RadioGroup>

    {/* Card Input Fields */}
    <Typography variant="subtitle2" fontWeight={600} gutterBottom>
      Card Details
    </Typography>
    <TextField
      fullWidth
      label="Card Number"
      placeholder="1234 5678 9012 3456"
      sx={{ mt: 1.5, bgcolor: "white",}}
    />
   <Stack direction="row" spacing={2} mt={2}>
  <TextField
    fullWidth
    label="Expiry Date"
    placeholder="MM/YY"
    sx={{ bgcolor: "white" }}
  />
  <TextField
    fullWidth
    label="CVV"
    placeholder="123"
    sx={{ bgcolor: "white" }}
  />
</Stack>


    {/* Pay Button */}
    <Button
  fullWidth
  variant="contained"
  startIcon={<CreditCardIcon />}
  onClick={() => navigate("/confirm-booking")} // replace with your actual route
  sx={{
    mt: 3,
    bgcolor: "#000",
    color: "#fff",
    fontWeight: 600,
    py: 1.2,
    borderRadius: 2,
    textTransform: "none",
    "&:hover": {
      bgcolor: "#222",
    },
  }}
>
  Pay - AED 367.30 Securely
</Button>


    {/* Terms */}
    <Typography
      variant="caption"
      display="block"
      textAlign="center"
      mt={2}
      color="text.secondary"
    >
      By adding to cart, you agree to our{" "}
      <Link href="#" underline="hover" fontWeight={600}>
        Terms & Conditions
      </Link>
    </Typography>
  </CardContent>
</Card>

            </Grid>
          </Grid>

          {/* Venue Policies */}
          <Card variant="outlined" sx={{ mt: 5, borderRadius: 3 }}>
            <CardContent>
              <Typography fontWeight={600} mb={2}>
                Venue Policies
              </Typography>
              <Stack spacing={1}>
                <PolicyItem icon={<InfoOutlinedIcon />} text="Please arrive 15 minutes before your scheduled time." />
                <PolicyItem icon={<WarningAmberOutlinedIcon />} text="Cancellations must be made at least 24 hours in advance for a full refund." />
                <PolicyItem icon={<DoNotDisturbAltOutlinedIcon />} text="Proper tennis shoes and attire required." />
                <PolicyItem icon={<DoNotDisturbAltOutlinedIcon />} text="No food or drinks allowed on the court except water." />
              </Stack>
            </CardContent>
          </Card>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

const PolicyItem = ({ icon, text }: { icon: React.ReactElement; text: string }) => (
  <Stack direction="row" spacing={1} alignItems="center">
    {icon}
    <Typography variant="body2">{text}</Typography>
  </Stack>
);

export default SubDetails;
