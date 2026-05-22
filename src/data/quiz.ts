export type QuizQuestion = {
  id: number;
  question: string;
  options: string[];
  answer: string;
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Qual álbum contém Billie Jean?",
    options: ["Bad", "Thriller", "Dangerous", "HIStory"],
    answer: "Thriller",
  },
  {
    id: 2,
    question: "Qual dança ficou associada ao Michael Jackson?",
    options: ["Moonwalk", "Shuffle", "Robot", "Breakdance"],
    answer: "Moonwalk",
  },
  {
    id: 3,
    question: "Qual música possui um videoclipe com zumbis?",
    options: ["Beat It", "Thriller", "Bad", "Smooth Criminal"],
    answer: "Thriller",
  },
  {
    id: 4,
    question: "Michael Jackson era conhecido como:",
    options: [
      "King of Soul",
      "King of Pop",
      "Master of Dance",
      "Prince of Music",
    ],
    answer: "King of Pop",
  },
  {
    id: 5,
    question: "Qual acessório virou marca registrada dele?",
    options: [
      "Luva brilhante",
      "Óculos dourados",
      "Capa vermelha",
      "Corrente prateada",
    ],
    answer: "Luva brilhante",
  },
  {
    id: 6,
    question: "Em que ano Thriller foi lançado?",
    options: ["1979", "1982", "1987", "1991"],
    answer: "1982",
  },
  {
    id: 7,
    question: "Qual música começa com um baixo extremamente famoso?",
    options: [
      "Black or White",
      "Billie Jean",
      "Beat It",
      "Earth Song",
    ],
    answer: "Billie Jean",
  },
  {
    id: 8,
    question: "Qual álbum veio depois de Thriller?",
    options: ["Dangerous", "Bad", "HIStory", "Invincible"],
    answer: "Bad",
  },
  {
    id: 9,
    question: "Qual dessas músicas pertence ao álbum Dangerous?",
    options: [
      "Smooth Criminal",
      "Remember the Time",
      "Beat It",
      "Thriller",
    ],
    answer: "Remember the Time",
  },
  {
    id: 10,
    question: "Michael Jackson começou a carreira em qual grupo?",
    options: [
      "The Supremes",
      "The Jackson 5",
      "Soul Brothers",
      "The Pop Kings",
    ],
    answer: "The Jackson 5",
  },
  {
    id: 11,
    question: "Qual música possui forte mensagem ambiental?",
    options: [
      "Earth Song",
      "Bad",
      "Jam",
      "Beat It",
    ],
    answer: "Earth Song",
  },
  {
    id: 12,
    question: "Qual álbum trouxe Black or White?",
    options: ["Dangerous", "Bad", "Thriller", "Off the Wall"],
    answer: "Dangerous",
  },
  {
    id: 13,
    question: "Qual destas músicas ficou famosa pela inclinação impossível no clipe?",
    options: [
      "Smooth Criminal",
      "Billie Jean",
      "Thriller",
      "Scream",
    ],
    answer: "Smooth Criminal",
  },
  {
    id: 14,
    question: "Qual dessas eras teve visual mais urbano e agressivo?",
    options: ["Off the Wall", "Bad", "Dangerous", "Thriller"],
    answer: "Bad",
  },
  {
    id: 15,
    question: "Qual música reúne Michael Jackson e Janet Jackson?",
    options: [
      "Scream",
      "Remember the Time",
      "Jam",
      "Human Nature",
    ],
    answer: "Scream",
  },
];