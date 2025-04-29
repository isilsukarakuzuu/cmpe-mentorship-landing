// import { homepageTexts } from "../constants/texts";

// export default function Home() {
//   return (
//     <div className="pt-20 px-8 max-w-2xl mx-auto text-center">
//       <section className="mb-12">
//         <h1 className="text-4xl font-bold mb-6">{homepageTexts.welcomeTitle}</h1>
//         <p className="text-lg leading-relaxed text-gray-700">{homepageTexts.welcomeParagraph}</p>
//       </section>

//       <section className="mb-12">
//         <h2 className="text-3xl font-semibold mb-4">{homepageTexts.whyChooseTitle}</h2>
//         <p className="text-lg leading-relaxed text-gray-600">{homepageTexts.whyChooseParagraph}</p>
//       </section>
//     </div>
//   );
// }


import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Box className="flex flex-col gap-16 mt-20">
      {/* Section 1: Mentörlük Programı Tanıtım */}
      <Box className="bg-gray-100 p-8 rounded-lg shadow-md">
        <Typography variant="h4" gutterBottom>
          Mentörlük Programı Tanıtımı
        </Typography>
        <Typography>
          Programın amacı, hedefleri ve katılımcılara sunduğu fırsatlarla ilgili açıklamalar burada olacak.
        </Typography>
      </Box>

      {/* Section 2: Zaman Çizelgesi */}
      <Box className="bg-gray-100 p-8 rounded-lg shadow-md">
        <Typography variant="h4" gutterBottom>
          Zaman Çizelgesi
        </Typography>
        <Typography>
          Başlangıç tarihi, başvuru tarihleri ve diğer önemli tarihler burada listelenecek.
        </Typography>
      </Box>

      {/* Section 3: Mentörlerimiz */}
      <Box className="bg-gray-100 p-8 rounded-lg shadow-md">
        <Typography variant="h4" gutterBottom>
          Mentörlerimiz
        </Typography>
        <Typography className="mb-4">
          Mentörlerimiz hakkında daha fazla bilgi almak için aşağıdan inceleyebilirsiniz.
        </Typography>
        <Link to="/mentors">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Mentörleri Gör
          </button>
        </Link>
      </Box>

      {/* Section 4: Kredi */}
      <Box className="bg-gray-100 p-8 rounded-lg shadow-md">
        <Typography variant="h5" gutterBottom>
          Kredi
        </Typography>
        <Typography>
          Bu projeyi destekleyen kişiler ve organizasyonlar burada listelenecek.
        </Typography>
      </Box>
    </Box>
  );
}
