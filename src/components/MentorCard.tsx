import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  CardMedia,
} from "@mui/material";

type MentorCardProps = {
  title: string;
  description: string;
  photo: string;
  onClick: () => void;
};

export default function MentorCard({
  title,
  description,
  photo,
  onClick,
}: MentorCardProps) {
  return (
    <Card
      onClick={onClick}
      sx={{
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",          
        /* cap width only on medium+ screens */
        maxWidth: { xs: "100%", md: 300 },
        mx: "auto",             
        "&:hover": { boxShadow: 6 },
      }}
    >
      <CardMedia
        component="img"
        image={photo}
        alt={title}
        sx={{
          width: "100%",              
          height: { xs: 160, md: 200 },
          objectFit: "cover",
        }}
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
          Learn&nbsp;More
        </Button>
      </CardActions>
    </Card>
  );
}