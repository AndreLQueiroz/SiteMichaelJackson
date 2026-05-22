export type Song = {
  id: number;
  title: string;
  album: string;
  year: number;
  mood: string;
  description: string;
  link: string;
};

export const songs: Song[] = [
  {
    id: 1,
    title: "Billie Jean",
    album: "Thriller",
    year: 1982,
    mood: "Pop / Funk",
    description: "Baixo marcante, clima misterioso e uma das músicas mais famosas da carreira.",
    link: "https://www.youtube.com/results?search_query=Michael+Jackson+Billie+Jean",
  },
  {
    id: 2,
    title: "Beat It",
    album: "Thriller",
    year: 1982,
    mood: "Pop Rock",
    description: "Mistura energia pop com guitarra forte e visual urbano.",
    link: "https://www.youtube.com/results?search_query=Michael+Jackson+Beat+It",
  },
  {
    id: 3,
    title: "Thriller",
    album: "Thriller",
    year: 1982,
    mood: "Cinematic Pop",
    description: "Um clássico conhecido pelo clima cinematográfico e pelo videoclipe histórico.",
    link: "https://www.youtube.com/results?search_query=Michael+Jackson+Thriller",
  },
  {
    id: 4,
    title: "Smooth Criminal",
    album: "Bad",
    year: 1987,
    mood: "Dance Pop",
    description: "Ritmo intenso, coreografia marcante e uma estética visual inesquecível.",
    link: "https://www.youtube.com/results?search_query=Michael+Jackson+Smooth+Criminal",
  },
  {
    id: 5,
    title: "Black or White",
    album: "Dangerous",
    year: 1991,
    mood: "Pop Rock",
    description: "Música com mensagem social, energia global e refrão forte.",
    link: "https://www.youtube.com/results?search_query=Michael+Jackson+Black+or+White",
  },
  {
    id: 6,
    title: "Remember the Time",
    album: "Dangerous",
    year: 1991,
    mood: "R&B / New Jack Swing",
    description: "Faixa elegante com clima nostálgico e produção moderna para a época.",
    link: "https://www.youtube.com/results?search_query=Michael+Jackson+Remember+the+Time",
  },
];