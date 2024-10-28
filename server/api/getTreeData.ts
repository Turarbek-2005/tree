import { promises as fs } from "fs";

export default defineEventHandler(async () => {
  try {
    const data = await fs.readFile("locales/tree.json", "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error loading tree data:", error);
    return { error: "Failed to load tree data" };
  }
});
