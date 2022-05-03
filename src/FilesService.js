import files from "./assets/files.json";

export class FilesService {
  static async getFiles() {
    return await new Promise((res) => setTimeout(() => res(files), 1000));
  }
}
