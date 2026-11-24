// Two-Sentence Horror — writes the chosen story to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const story =
  "The coroner says the teeth they pulled from the lake are a perfect match for my wife's dental records. I haven't told him she came home that night, or asked her what she's been smiling with ever since.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", story, "utf8");
