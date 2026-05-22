import { Routes, Route, NavLink } from "react-router-dom";
import "./global.css";

import { albums } from "./data/albums";
import { songs } from "./data/songs";

import AlbumCard from "./components/AlbumCard";
import MusicCard from "./components/MusicCard";
import Quiz from "./components/Quiz";

function Navbar() {
  return (
    <header className="header">
      <h1>Michael Jackson</h1>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/musicas">Músicas</NavLink>
        <NavLink to="/albums">Álbuns</NavLink>
        <NavLink to="/quiz">Quiz</NavLink>
        <NavLink to="/sobre">Sobre</NavLink>
      </nav>
    </header>
  );
}

function Home() {
  return (
    <>
      <section className="hero">
        <div className="overlay">
          <h2>
            King of <em>Pop</em>
          </h2>

          <p>1958 — 2009 · Uma lenda imortal</p>

          <NavLink to="/musicas">
            <button>Explorar legado</button>
          </NavLink>
        </div>
      </section>
    </>
  );
}

function Musicas() {
  return (
    <section className="section music-page">
      <div className="page-hero-small">
        <span className="section-label">Discografia</span>
        <h2>Músicas Icônicas</h2>
        <p>
          Uma seleção de faixas que marcaram gerações, misturando pop, dança,
          performance e impacto cultural.
        </p>
      </div>

      <div className="now-playing">
        <div>
          <span>Now Playing</span>
          <h3>Billie Jean</h3>
          <p>Thriller · 1982 · Pop / Funk</p>
        </div>

        <div className="equalizer">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className="grid">
        {songs.map((song) => (
          <MusicCard key={song.id} song={song} />
        ))}
      </div>
    </section>
  );
}

function Albums() {
  return (
    <section className="section albums-page">
      <div className="page-hero-small">
        <span className="section-label">Álbuns</span>
        <h2>As Eras do King of Pop</h2>
        <p>
          Cada álbum representa uma fase visual, sonora e cultural da carreira
          de Michael Jackson.
        </p>
      </div>

      <div className="albums-list">
        {albums.map((album) => (
          <AlbumCard key={album.id} album={album} />
        ))}
      </div>
    </section>
  );
}

function QuizPage() {
  return <Quiz />;
}

function Sobre() {
  const timeline = [
    {
      year: "1958",
      title: "Nascimento",
      text: "Michael Jackson nasceu em Gary, Indiana, e desde cedo demonstrou talento para música e dança.",
    },
    {
      year: "1964",
      title: "Jackson 5",
      text: "Começou sua trajetória artística ao lado dos irmãos, ganhando destaque ainda criança.",
    },
    {
      year: "1979",
      title: "Carreira solo",
      text: "Com Off the Wall, mostrou uma identidade solo mais madura e sofisticada.",
    },
    {
      year: "1982",
      title: "Thriller",
      text: "Lançou um dos álbuns mais importantes da história da música pop.",
    },
    {
      year: "1983",
      title: "Moonwalk",
      text: "Popularizou um dos passos de dança mais famosos da cultura pop.",
    },
    {
      year: "2009",
      title: "Legado",
      text: "Sua influência permanece viva na música, dança, moda e videoclipes.",
    },
  ];

  return (
    <section className="section about-page">
      <div className="about-hero">
        <span className="section-label">Sobre</span>

        <h2>Mais que música, um fenômeno cultural.</h2>

        <p>
          Michael Jackson transformou apresentações musicais em experiências
          visuais completas. Sua carreira uniu voz, dança, moda, videoclipes e
          performance em um estilo reconhecido no mundo inteiro.
        </p>
      </div>

      <div className="legacy-grid">
        <div className="legacy-card">
          <span>01</span>
          <h3>Música</h3>
          <p>
            Uniu pop, funk, soul, rock e R&B em músicas com identidade própria.
          </p>
        </div>

        <div className="legacy-card">
          <span>02</span>
          <h3>Dança</h3>
          <p>
            Coreografias precisas e passos marcantes se tornaram referência para
            gerações.
          </p>
        </div>

        <div className="legacy-card">
          <span>03</span>
          <h3>Videoclipes</h3>
          <p>
            Elevou o videoclipe a um formato cinematográfico, com narrativa e
            produção visual.
          </p>
        </div>

        <div className="legacy-card">
          <span>04</span>
          <h3>Imagem</h3>
          <p>
            Criou uma estética forte com figurinos, luva brilhante, chapéu e
            presença de palco.
          </p>
        </div>
      </div>

      <div className="about-quote-box">
        <blockquote>
          "Se você quer fazer do mundo um lugar melhor, dê uma olhada em você
          mesmo e faça uma mudança."
        </blockquote>
      </div>

      <div className="timeline-section">
        <span className="section-label">Linha do tempo</span>
        <h2>Momentos marcantes</h2>
        <div className="section-divider" />

        <div className="timeline">
          {timeline.map((item) => (
            <div className="timeline-item" key={item.year}>
              <span>{item.year}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
  <footer className="footer">
    <img
      src="./src/assets/assinatura.png"
      alt="Assinatura"
      className="signature"
    />

    <p>King of Pop — Para sempre na história da música.</p>
  </footer>
);}

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/musicas" element={<Musicas />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>

      <Footer />
    </>
  );
}