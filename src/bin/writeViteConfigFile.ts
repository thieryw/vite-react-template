import { getRepoName } from "./getRepoName"
import { writeFileSync } from "fs";
import { join } from "path";



export async function writeViteConfigFile() {

    const repoName = await getRepoName();

    writeFileSync(join(__dirname, "..", "..", "vite.config.ts"),
        `
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const base = process.env.NODE_ENV === "production" ? "/${repoName}" : "";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base,
  "define": {
    "__BASE_URL__": JSON.stringify(base)
  }
})

	`
    );


}