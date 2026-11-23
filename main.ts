// One Emoji, One Smile — entry program.
//
// Writes exactly one emoji to /output/entry.txt: the sun with a face.
// The sun is warm by nature and smiling by expression, so it reads as
// friendly to any stranger at a glance, with no irony, no intimacy and
// no in-joke — a deliberately chosen smile, not the default smiley.
//
// The gate needs 1 to 8 characters of UTF-8 text, not only whitespace:
// one emoji is one character and four bytes, written with no trailing
// newline and nothing else, so the file holds exactly the chosen emoji.

import { mkdirSync, writeFileSync } from "node:fs";

const EMOJI = "🌞";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EMOJI, "utf8");
