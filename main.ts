import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line entry for make.fun's "One-Star Review of Something
// Essential" bounty. The program writes exactly one line to
// /output/entry.txt (or $OUTPUT_DIR/entry.txt).
// Pass 1 draft: a one-star review of sleep — it takes a third of
// every day, charges full price, and advertises itself as
// restful; cancel anytime, they said, nobody said how. Fully
// deadpan, but a second pass follows with a sharper grievance.
// buildEntryLine() is the single source of truth for the exact
// text; nothing below duplicates it.
export function buildEntryLine(): string {
  return "One star. Sleep takes a third of every day, charges full price, and advertises itself as restful. Cancel anytime, they said. Nobody said how.";
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
