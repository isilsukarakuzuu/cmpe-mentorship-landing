import { Timeline as MuiTimeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from "@mui/lab";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

export default function Timeline() {
  return (
    <MuiTimeline position="alternate">
      {[ 
        { title: "Apply for Mentorship", desc: "Fill out the application form and follow CMPE ÖTK socials." },
        { title: "Mentor Assignment", desc: "You will be matched with a mentor based on your interests." },
        { title: "Communication & Meetings", desc: "Stay in regular contact and attend monthly harvest meetings." },
        { title: "Harvest and Completion", desc: "Final meetings and feedback on the mentorship journey." }
      ].map((step, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            {index !== 3 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              variants={fadeInUp}
            >
              <strong>{index + 1}. {step.title}</strong><br />
              <span>{step.desc}</span>
            </motion.div>
          </TimelineContent>
        </TimelineItem>
      ))}
    </MuiTimeline>
  );
}
