import { useState } from "react";
import { mentors, Mentor } from "../constants/mentors";
import MentorsGrid from "../components/MentorsGrid";
import MentorModal from "../components/MentorModal";

export default function MentorsPage() {
  const [open, setOpen] = useState(false);
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);

  const handleSelectMentor = (mentor: Mentor) => {
    setSelectedMentor(mentor);
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedMentor(null);
    setOpen(false);
  };

  return (
    <div className="px-6 py-8">
      <MentorsGrid mentors={mentors} onSelect={handleSelectMentor} />

      {selectedMentor && (
        <MentorModal
          open={open}
          onClose={handleClose}
          title={selectedMentor.name}
          description={selectedMentor.description}
          interests={selectedMentor.interests}
          offerings={selectedMentor.offerings}
          expectations={selectedMentor.expectations}
          photo={selectedMentor.photo}
        />
      )}
    </div>
  );
}
