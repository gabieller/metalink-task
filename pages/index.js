import { useState } from "react";
import SideBar from "../components/SideBar";
import SearchBar from "../components/SearchBar";
import SearchResult from "../components/SearchResult";

export default function Home() {
  const [tags, setTags] = useState([]);
  return (
    <div className="flex">
      <SideBar />
      <main className="container mx-auto p-3">
        <SearchBar tags={tags} setTags={setTags} />
        <br />
        <SearchResult tags={tags} />
      </main>
    </div>
  );
}
