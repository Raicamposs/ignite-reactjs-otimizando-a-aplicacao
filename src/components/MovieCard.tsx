import { useMemo } from 'react';
import { Clock, Star } from 'react-feather';
import '../styles/movie-card.scss';


interface MovieCardProps {
  title: string;
  poster: string;
  rating: string;
  runtime: string;
}

export function MovieCard(props: MovieCardProps) {

  const starMemo = useMemo(() => <Star />, [])
  const clockMemo = useMemo(() => <Clock />, [])

  return (
    <div className="movie-card">
      <img
        src={props.poster}
        alt={props.title}
      />

      <div>
        <div className="movie-info">
          <span>{props.title}</span>
          <div className="meta">
            <div>
              {starMemo} {props.rating}
            </div>

            <div>
              {clockMemo}   {props.runtime}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}