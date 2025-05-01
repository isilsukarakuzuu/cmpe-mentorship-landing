import { Box, Container, IconButton, Typography } from "@mui/material";
import { Instagram, Twitter, YouTube } from "@mui/icons-material";

import bogaziciLogo from "../assets/logos/bogazici-logo.png";
import cmpeotkLogo from "../assets/logos/cmpeotk-logo.jpeg";
import { footerTexts } from "../constants/texts";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#f5f5f5",
        pt: 4,
        pb: 2,
        mt: 10,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logos - Circular */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            mb: { xs: 2, md: 0 },
          }}
        >
          <Box
            component="img"
            src={bogaziciLogo}
            alt="Boğaziçi University"
            sx={{
              height: 48,
              width: 48,
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <Box
            component="img"
            src={cmpeotkLogo}
            alt="CMPE ÖTK"
            sx={{
              height: 48,
              width: 48,
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </Box>

        {/* Social media */}
        <Box>
          <IconButton
            component="a"
            href="https://www.instagram.com/boun_cmpe_otk/"
            target="_blank"
            rel="noopener noreferrer"
            color="primary"
          >
            <Instagram fontSize="large" />
          </IconButton>
          <IconButton
            component="a"
            href="https://x.com/boun_cmpe_otk"
            target="_blank"
            rel="noopener noreferrer"
            color="primary"
          >
            <Twitter fontSize="large" />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.youtube.com/@boun_cmpe_otk"
            target="_blank"
            rel="noopener noreferrer"
            color="primary"
          >
            <YouTube fontSize="large" />
          </IconButton>
        </Box>
      </Container>

      {/* Legal + Consent */}
      <Container maxWidth="md" sx={{ textAlign: "center", mt: 3 }}>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {footerTexts.consent}
        </Typography>
        <Typography variant="caption" color="text.disabled">
          {footerTexts.allRightsReserved}
        </Typography>
      </Container>
    </Box>
  );
}
