// Two-Sentence Horror — writes the chosen story to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const story =
  "The coroner says the teeth they pulled from the lake are a perfect match for my wife's dental records. She's taking the news well, though she keeps running her tongue over her new smile and asking me, very sweetly, which lake.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", story, "utf8");
