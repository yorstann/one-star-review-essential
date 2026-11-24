import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line entry for make.fun's "One-Star Review of Something
// Essential" bounty. The program writes exactly one line to
// /output/entry.txt (or $OUTPUT_DIR/entry.txt).
// Pass 2 (final): a one-star review of oxygen. The grievance is
// total dependence — the sharpest true complaint there is
// against oxygen, recognised instantly by everyone. The review
// stays fully deadpan ("One star." opener, no exclamation, no
// wink) and saves the sting for the final three words: the
// reviewer has tried to quit many times, and the longest he
// lasted was about a minute. One joke, zero filler. It replaces
// the pass-1 sleep review, whose grievance was softer.
// buildEntryLine() is the single source of truth for the exact
// text; nothing below duplicates it.
export function buildEntryLine(): string {
  return "One star. Oxygen is free, unlimited, and hopelessly addictive. I have tried to quit many times. The longest I lasted was about a minute.";
}

export const ENTRY_LINE = buildEntryLine();

export function isValidEntry(text: string): boolean {
  return text.length >= 1 && text.length <= 160 && text.trim().length > 0;
}

if (!isValidEntry(ENTRY_LINE)) {
  throw new Error(
    `entry must be 1–160 non-blank characters, got ${ENTRY_LINE.length}`,
  );
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY_LINE, "utf8");
