import { useEffect, useState } from "react";
import { FilesService } from "./FilesService";

export function useFiles() {
  const [files, setFiles] = useState(null);
  const [loading, setLoading] = useState(false);

  async function loadFiles() {
    setLoading(true);
    const res = await FilesService.getFiles();

    setFiles(res);
    setLoading(false);
  }

  useEffect(() => void loadFiles(), []);

  return { files, loading };
}