import MentorCard from "./MentorCard";
import { Mentor } from "../constants/mentors";

type MentorGridProps = {
  mentors: Mentor[];
  onSelect: (mentor: Mentor) => void;
};

export default function MentorGrid({ mentors, onSelect }: MentorGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {mentors.map((mentor, index) => (
        <MentorCard
          key={index}
          title={mentor.name}
          description={mentor.shortDescription}
          photo={mentor.photo}
          onClick={() => onSelect(mentor)}
        />
      ))}
    </div>
  );
}
