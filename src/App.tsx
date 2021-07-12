import { useState } from "react";
import { SideBar } from "./components/SideBar";
import { Content } from "./components/Content";

import "./styles/global.scss";

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar
        selectedGenreId={selectedGenreId}
        handleSelectGenreId={(id: number) => setSelectedGenreId(id)}
      />
      <Content selectedGenreId={selectedGenreId} />
    </div>
  );
}
