import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Box, Avatar, List, ListItem, ListItemText } from "@mui/material";

type MentorModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  interests?: string;
  offerings?: string[];
  expectations?: string;
  photo?: string;
};

export default function MentorModal({ open, onClose, title, description, interests, offerings, expectations, photo }: MentorModalProps) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <Box display="flex" flexDirection="column" alignItems="center">
          {photo && (
            <Avatar
              alt={title}
              src={photo}
              sx={{ width: 120, height: 120, mb: 2 }}
            />
          )}
          <Typography variant="h5" component="div">
            {title}
          </Typography>
        </Box>
      </DialogTitle>

      <DialogContent dividers>
        {/* Description */}
        {description && (
          <Box mb={3}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              About
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </Box>
        )}

        {/* Interests */}
        {interests && (
          <Box mb={3}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Interests
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {interests}
            </Typography>
          </Box>
        )}

        {/* Offerings */}
        {offerings && offerings.length > 0 && (
          <Box mb={3}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              What I Offer
            </Typography>
            <List dense>
              {offerings.map((offer, index) => (
                <ListItem key={index}>
                  <ListItemText primary={offer} />
                </ListItem>
              ))}
            </List>
          </Box>
        )}

        {/* Expectations */}
        {expectations && (
          <Box>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              What I Expect
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {expectations}
            </Typography>
          </Box>
        )}
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} variant="contained" color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
