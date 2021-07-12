import { useEffect, useState } from "react";
import { Button } from "./Button";
import "../styles/sidebar.scss";

import { api } from "../services/api";
import { Content, MovieProps } from "./Content";

export interface GenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

export interface sideBarProps {
  selectedGenreId: number;
  handleSelectGenreId: (id: number) => void;
}

export function SideBar(props: sideBarProps) {
  // Complete aqui
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);


  useEffect(() => {
    api.get<GenreResponseProps[]>("genres").then((response) => {
      setGenres(response.data);
    });
  }, []);

  function handleClickButton(id: number) {
    props.handleSelectGenreId(id);
  }

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={props.selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
