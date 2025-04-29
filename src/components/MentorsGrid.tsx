// src/components/MentorsGrid.tsx
import Box from "@mui/material/Box";
import MentorCard from "./MentorCard";
import { Mentor } from "../constants/mentors";

type MentorGridProps = {
  mentors: Mentor[];
  onSelect: (mentor: Mentor) => void;
};

export default function MentorsGrid({ mentors, onSelect }: MentorGridProps) {
  return (
    <Box
      sx={{
        display: "grid",
        gap: 3,
        gridTemplateColumns: {
          xs: "1fr",              // 1 card / row  <600 px
          sm: "repeat(2, 1fr)",   // 2            ≥600 px
          md: "repeat(3, 1fr)",   // 3            ≥900 px
          lg: "repeat(4, 1fr)",   // 4            ≥1200 px
        },
        px: { xs: 2, sm: 4 },     // side-padding for small screens
      }}
    >
      {mentors.map((m, i) => (
        <MentorCard
          key={i}
          title={m.name}
          description={m.shortDescription}
          photo={m.photo}
          onClick={() => onSelect(m)}
        />
      ))}
    </Box>
  );
}