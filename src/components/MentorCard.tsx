import { Card, CardContent, CardActions, Typography, Button, CardMedia } from "@mui/material";

type MentorCardProps = {
  title: string;
  description: string;
  photo: string;
  onClick: () => void;
};

export default function MentorCard({ title, description, photo, onClick }: MentorCardProps) {
  return (
    <Card 
      onClick={onClick} 
      sx={{ 
        cursor: "pointer", 
        display: "flex", 
        flexDirection: "column", 
        height: "100%", 
        '&:hover': { boxShadow: 6 } 
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={photo}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" noWrap>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" noWrap>
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ mt: "auto" }}>
        <Button size="small" fullWidth>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
