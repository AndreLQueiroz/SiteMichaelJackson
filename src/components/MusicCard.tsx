import type { Song } from "../data/songs";

type Props = {
  song: Song;
};

export default function MusicCard({ song }: Props) {
  return (
    <article className="music-card">
      <div className="music-card-top">
        <span className="music-year">{song.year}</span>
        <span className="music-mood">{song.mood}</span>
      </div>

      <h3>{song.title}</h3>

      <span className="music-album">{song.album}</span>

      <p>{song.description}</p>

      <a href={song.link} target="_blank" rel="noreferrer">
        <button>Ouvir agora</button>
      </a>
    </article>
  );
}