export type Album = {
  id: number;
  title: string;
  year: number;
  era: string;
  style: string;
  description: string;
  tracks: string[];
};

export const albums: Album[] = [
  {
    id: 1,
    title: "Off the Wall",
    year: 1979,
    era: "Disco Era",
    style: "Soul · Funk · Disco",
    description:
      "O álbum que mostrou Michael como um artista solo maduro, com energia dançante e produção refinada.",
    tracks: ["Don't Stop 'Til You Get Enough", "Rock with You", "Off the Wall"],
  },
  {
    id: 2,
    title: "Thriller",
    year: 1982,
    era: "Pop Domination",
    style: "Pop · Funk · Rock",
    description:
      "Um marco da música pop, unindo videoclipes, performance, dança e músicas de impacto global.",
    tracks: ["Billie Jean", "Beat It", "Thriller"],
  },
  {
    id: 3,
    title: "Bad",
    year: 1987,
    era: "Iconic Visual Era",
    style: "Pop · Rock · Dance",
    description:
      "Uma fase mais forte visualmente, com atitude, coreografias marcantes e identidade própria.",
    tracks: ["Bad", "Smooth Criminal", "Man in the Mirror"],
  },
  {
    id: 4,
    title: "Dangerous",
    year: 1991,
    era: "New Jack Swing",
    style: "R&B · Pop · New Jack Swing",
    description:
      "Trouxe uma sonoridade moderna, urbana e mais pesada, com grande presença visual.",
    tracks: ["Black or White", "Remember the Time", "Jam"],
  },
  {
    id: 5,
    title: "HIStory",
    year: 1995,
    era: "Legacy Era",
    style: "Pop · R&B · Cinematic",
    description:
      "Misturou sucessos históricos com músicas inéditas e uma imagem mais monumental.",
    tracks: ["Scream", "They Don't Care About Us", "Earth Song"],
  },
];