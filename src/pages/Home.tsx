import { homepageTexts } from "../constants/texts";

export default function Home() {
  return (
    <div className="pt-20 px-8 max-w-2xl mx-auto text-center">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-6">{homepageTexts.welcomeTitle}</h1>
        <p className="text-lg leading-relaxed text-gray-700">{homepageTexts.welcomeParagraph}</p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">{homepageTexts.whyChooseTitle}</h2>
        <p className="text-lg leading-relaxed text-gray-600">{homepageTexts.whyChooseParagraph}</p>
      </section>
    </div>
  );
}

