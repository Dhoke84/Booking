import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  Tab,
  Tabs,
  TextField,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  CameraAlt,
  Edit,
  Email,
  Person,
  Phone,
  Lock,
} from "@mui/icons-material";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Profile: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [tab, setTab] = useState(0);
  const [emailNotifications, setEmailNotifications] = useState(true);

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  return (
    <>
    <Navbar />
   
    <Box
      minHeight="100vh"
      bgcolor="#f9fafb"
      display="flex"
      justifyContent="center"
      p={isMobile ? 2 : 4}
    >
      <Paper elevation={3} sx={{ width: "100%", maxWidth: 720, borderRadius: 3 }}>
        {/* Header */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          px={4}
          pt={4}
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <Box position="relative">
              <Avatar
                src= "https://media.istockphoto.com/id/1040174716/photo/line-on-green-badminton-court.jpg?s=612x612&w=0&k=20&c=kfE4sJDWUpKvFJy5v4SIZO_t-PHwE9rubf1x540U3lc="
                sx={{ width: 64, height: 64 }}
              />
              <Box
                position="absolute"
                bottom={0}
                right={0}
                bgcolor="black"
                borderRadius="50%"
                p={0.5}
              >
                <CameraAlt sx={{ color: "white", fontSize: 14 }} />
              </Box>
            </Box>
            <Box>
              <Typography fontWeight={700} color="black">
                John Anderson
              </Typography>
              <Typography variant="body2" color="text.secondary">
                john.anderson@example.com
              </Typography>
            </Box>
          </Stack>

          {/* Edit button — full on desktop, icon only on mobile */}
          {isMobile ? (
            <Tooltip title="Edit Profile">
              <IconButton
                sx={{
                  color: "black",
                  border: "1px solid black",
                  "&:hover": { backgroundColor: "#f5f5f5" },
                }}
              >
                <Edit />
              </IconButton>
            </Tooltip>
          ) : (
            <Button
              variant="outlined"
              size="small"
              startIcon={<Edit sx={{ color: "black" }} />}
              sx={{
                textTransform: "none",
                color: "black",
                borderColor: "black",
                "&:hover": {
                  borderColor: "black",
                  backgroundColor: "#f5f5f5",
                },
              }}
            >
              Edit Profile
            </Button>
          )}
        </Box>

        {/* Tabs */}
        <Tabs
          value={tab}
          onChange={handleTabChange}
          sx={{
            px: 4,
            mt: 3,
            borderBottom: "1px solid rgb(198, 200, 205)",
            "& .MuiTab-root": {
              textTransform: "none",
              fontWeight: 500,
              minWidth: 100,
              color: "black", // 🔥 force tab text to be black
            },
            "& .Mui-selected": {
              color: "black", // 🔥 selected tab stays black
            },
            "& .MuiTabs-indicator": {
              backgroundColor: "black",
              height: "2px",
            },
          }}
        >
          <Tab label="Profile" />
          <Tab label="Settings" />
        </Tabs>

        {/* Profile Tab */}
        {tab === 0 && (
          <Box px={4} py={4}>
            <Stack spacing={3}>
              <TextField
                label="Full Name"
                fullWidth
                value="John Anderson"
                InputProps={{
                  readOnly: true,
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person sx={{ fontSize: 18, color: "#9ca3af" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{ bgcolor: "#fff", borderRadius: 1 }}
              />
              <TextField
                label="Email"
                fullWidth
                value="john.anderson@example.com"
                InputProps={{
                  readOnly: true,
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email sx={{ fontSize: 18, color: "#9ca3af" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{ bgcolor: "#fff", borderRadius: 1 }}
              />
              <TextField
                label="Phone Number"
                fullWidth
                value="+1 (555) 123-4567"
                InputProps={{
                  readOnly: true,
                  startAdornment: (
                    <InputAdornment position="start">
                      <Phone sx={{ fontSize: 18, color: "#9ca3af" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{ bgcolor: "#fff", borderRadius: 1 }}
              />

              <Box>
                <Typography variant="subtitle2" fontWeight={700} mb={1} color="black">
                  Notification Preferences
                </Typography>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={emailNotifications}
                      onChange={(e) => setEmailNotifications(e.target.checked)}
                      sx={{
                        color: "black",
                        "&.Mui-checked": {
                          color: "black",
                        },
                      }}
                    />
                  }
                  label={
                    <Typography variant="body2" color="black">
                      Email notifications
                    </Typography>
                  }
                />
              </Box>

              <Box display="flex" justifyContent="flex-end">
                <Button
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    bgcolor: "black",
                    color: "white",
                    px: 3,
                    "&:hover": {
                      bgcolor: "#333",
                    },
                  }}
                >
                  Save Changes
                </Button>
              </Box>
            </Stack>
          </Box>
        )}

        {/* Settings Tab */}
        {tab === 1 && (
          <Box px={4} py={4}>
            <Typography variant="subtitle1" fontWeight={600} mb={2} color="black">
              Change Password
            </Typography>

            <Stack spacing={3}>
              <TextField
                label="Current Password"
                type="password"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock sx={{ fontSize: 18, color: "#9ca3af" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{ bgcolor: "#fff", borderRadius: 1 }}
              />
              <TextField
                label="New Password"
                type="password"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock sx={{ fontSize: 18, color: "#9ca3af" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{ bgcolor: "#fff", borderRadius: 1 }}
              />
              <TextField
                label="Confirm New Password"
                type="password"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock sx={{ fontSize: 18, color: "#9ca3af" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{ bgcolor: "#fff", borderRadius: 1 }}
              />

              <Box>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  mt={1}
                  mb={1}
                  sx={{ fontSize: 13 }}
                >
                  Password must be at least 8 characters long and contain:
                </Typography>
                <ul style={{ margin: 0, paddingLeft: 20, fontSize: 13 }}>
                  <li>At least one uppercase letter</li>
                  <li>At least one lowercase letter</li>
                  <li>At least one number</li>
                  <li>At least one special character</li>
                </ul>
              </Box>

              <Box display="flex" justifyContent="flex-end">
                <Button
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    bgcolor: "black",
                    color: "white",
                    px: 3,
                    "&:hover": {
                      bgcolor: "#333",
                    },
                  }}
                >
                  Save Changes
                </Button>
              </Box>
            </Stack>
          </Box>
        )}
      </Paper>
    </Box>
<Footer />
    </>
  );
};

export default Profile;
