import { Box, Typography, Avatar } from "@mui/material";
import BenPhoto from "../assets/Ben.jpg"; // Import your photo here

const mentors = [
  {
    name: "Ahmet Baha Bayrakçıoğlu",
    photo: BenPhoto,
    bio: "Hazret-i izzet cellet kudretuhu ve allet kelimetuhunun [Allah'ın] inâyeti ve mühr-i sipihr-i nübüvvet ahter-i burc-i fütüvvet-pişvâ-yı zümre-i enbiyâ muktedâ-yı fırka-i asfiyâ Muhammed Mustafâ'nın sallallahu aleyhi vesellem mu‘cizât-ı kesîretü'l-berekâtı ve dört yârinin -ki, Ebubekir, Ömer, Osman ve Ali'dir- rıdvânullahi aleyhim ecma‘în onların ervâh-ı mukaddesesi mürâfakati ile, [Mektubun bu satırlarından sonra Sultan Süleyman'ın tuğrası vardır ve tuğrada bilindiği üzere Süleyman Şah bin Selim Şan Han el-muzaffer dâimâ yazılıdır. Bu dua ve selam satırlarından sonra mektup şöyle devam etmektedir:] Ben ki sultanü's-salâtin ve bürhânü'l-havâkîn tâc-bahş-ı hüsrevân-ı rû-yı zemîn zıllullahi fi'l-arazîn Akdeniz'in ve Karadeniz'in ve Rumeli'nin ve Anadolu'nun ve Karaman'ın ve Rum'un ve Vilâyet-i Zülkadriyye'nin ve Diyarbekir'in ve Kürdistan'ın ve Azerbaycan'ın ve Acem'in ve Şam'ın ve Haleb'in ve Mısır'ın ve Mekke'nin ve Medine'nin ve Kudüs'ün ve külliyyen Diyâr-ı Arab'ın ve Yemen'in ve dahi nice memleketlerin ki, âbâ-yı kirâm ve ecrâd-ı izâmım enârallahu berâhinehüm kuvvet-i kahireleriyle feth ettikleri ve cenâb-ı celâdet-me’âbım dahi tîğ-ı ateş-bâr ve şimşîr-i zafer-nigârım ile feth eylediğim nice diyârın sultanı ve padişahı Sultan Bayezid Han oğlu Sultan Selim Han oğlu Sultan Süleyman Han'ım, Sen ki, Françe vilayetinin Kralı Françesko'sun... Dergâh-ı selâtîn-penâhıma yarar adamın Frankiyan ile mektup gönderip ve bazı ağız haberi dahi ısmarlayıp memleketlere düşman müstevli olup el-an hapisde idüğünüz i‘lâm edip halâsınız husûsunda bu cânibden inâyet ve meded istida eylemişsiz. Her ne ki, demiş iseniz benim pâye-i serîr-i âlem-masîrime arz olunup alâ-sebîli't-tafsîl ilm-i şerîfim muhît olup tamam ma‘lûm oldu. İmdi padişahlara sınmak ve haps olunmak acep değildir. Gönlünüzü hoş tutup âzürde-hâtır olmayasız. Eyle olsa bizim âbâ-i kirâm ve ecdâd-ı izâmımız nevverallahu merkadehüm dâimâ def‘-i düşmân ve feth-i memâlik için seferden hâli olmayıp biz dahi onların tarikine sâlik olup her zamanda memleketler ve sa‘b ve hasîn kal‘alar feth eyleyip gece ve gündüz atımız eyerlenmiş ve kılıcımız kuşanılmış ve Hak sübhânehu ve te‘âlâ hayırlar müyesser eyleyip meşiyyet ve irâdeti neye müte‘allik olmuş ise vücûda gele. Bâkî ahvâl ve ahbâr ise mezkûr adamınızdan istintak olunup ma‘lumunuz ola. Şöyle bilesiz... Tahrîren fî evâil-i Âhiri'r-Rebî‘ayn li-sene isneyn ve selâsîn ve ti‘a-mi’e.",
  },
  {
    name: "Ali Veli",
    photo: "https://via.placeholder.com/100",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  
  {
    name: "Ayşe Fatma",
    photo: "https://via.placeholder.com/100",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

export default function Mentors() {
  return (
    <Box className="flex flex-col gap-16 px-8" sx={{ paddingTop: "70px" }}>
      <Typography variant="h2" align="center" gutterBottom>
        Mentörler
      </Typography>

{mentors.map((mentor, index) => (
  <Box key={index} className="bg-gray-100 p-8 rounded-lg shadow-md" sx={{ marginBottom: 8 }}>
    {/* Floating photo */}
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Avatar
        alt={mentor.name}
        src={mentor.photo}
        sx={{
          width: 150,
          height: 150,
          marginBottom: "8px",
          border: "3px solid rgb(255, 255, 255)",
        }}
      />

      {/* Name centered below photo */}
      <Typography variant="h6" className="text-center font-bold">
        {mentor.name}
      </Typography>
    </Box>

    {/* Bio text */}
    <Typography variant="body1" className="text-justify" sx={{ marginTop: "16px" }}>
      {mentor.bio}
    </Typography>
  </Box>
))}
    </Box>
  );
}
