import { homepageTexts } from "../constants/texts";
import Timeline from "../components/Timeline";

export default function Home() {
  return (
    <div className="pt-20 px-8 max-w-5xl mx-auto">
      {/* Program Introduction */}
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-6">{homepageTexts.welcomeTitle}</h1>
        <p className="text-lg leading-relaxed text-gray-700">
          {homepageTexts.welcomeParagraph}
        </p>
      </section>

      {/* Application Information */}
      <section className="mb-12 text-center">
        <h2 className="text-3xl font-semibold mb-6">Mentorship Program Overview</h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          This program aims to help Boğaziçi University Computer Engineering (CMPE) students benefit from alumni experiences, within a structured mentorship framework.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          By applying to this program, you commit to regular communication with your mentor and participating in monthly harvest meetings.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          <strong>Consent:</strong> You agree to share your information with CMPE ÖTK and allow sharing of program photos on CMPE ÖTK’s platforms.
        </p>

      </section>

      {/* Timeline */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">How the Mentorship Works</h2>
        <Timeline />
      </section>
    </div>
  );
}
