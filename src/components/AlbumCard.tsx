import type { Album } from "../data/albums";

type Props = {
  album: Album;
};

export default function AlbumCard({ album }: Props) {
  return (
    <article className="album-card">
      <div className="album-cover">
        <span>{album.title.charAt(0)}</span>
      </div>

      <div className="album-content">
        <div className="album-meta">
          <span>{album.year}</span>
          <span>{album.era}</span>
        </div>

        <h3>{album.title}</h3>

        <strong>{album.style}</strong>

        <p>{album.description}</p>

        <div className="album-tracks">
          {album.tracks.map((track) => (
            <span key={track}>{track}</span>
          ))}
        </div>
      </div>
    </article>
  );
}