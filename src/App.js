import { useState } from "react";
import { useFiles } from "./hooks";
import { List } from "./List";

export default function App() {
  const { loading, files } = useFiles();

  return (
    <div className="App">
      {loading && "loading..."}
      {!loading && "loaded" && <List files={files}/>}
      
    </div>
  );
}
