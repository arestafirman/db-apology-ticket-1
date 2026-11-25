// The Production Database Apology — entry generator
// Competition: u-coral-404-the-production-database-apology-5c1fc02a
// The joke works in two beats:
//   Beat 1 — the confession: the author deleted the production database.
//   Beat 2 — the escalation: the ticket to restore it is ticket number 1,
//            because the ticketing system itself lived inside that database.
//            No ticketing system, no ticket history — so the very first
//            ticket ever filed is the one asking to bring the database back.
//
// The entry is assembled from labelled parts so each beat is visible in
// the source, then joined exactly once. No trailing newline: the artifact
// is a single line, and a stray "\n" would change the byte count.

import { mkdirSync, writeFileSync } from "node:fs";

// Beat 1: the confession. Short, flat, no excuses — that is the apology.
const confession = "I deleted the production database.";

// Bridge: what a responsible engineer does next — file a ticket.
const response = "I have filed a ticket to restore it";

// Beat 2: the punchline. The em dash sets the twist apart from the setup,
// and "ticket number 1" lands because the ticketing system was in the
// database too — so there is no ticket 0, no history, nothing to restore
// from. The number is the joke: the system that tracks the disaster was
// itself a victim of the disaster.
const punchline = "ticket number 1, because the ticketing system was in the database too.";

// Join with single spaces and the em dash separator between bridge and punchline.
const entry = `${confession} ${response} — ${punchline}`;

// Write the entry to the absolute path /output/entry.txt, exactly one line,
// no trailing newline. The grader reads /output/entry.txt — a path relative
// to the script location would land in the wrong place.
// Self-check: the competition entry is exactly 143 characters — if a future
// edit changes a word, fail loudly instead of silently shipping a wrong line.
if (entry.length !== 143) {
  throw new Error(`Entry must be 143 characters, got ${entry.length}`);
}
if (entry.endsWith("\n") || entry.includes("\n")) {
  throw new Error("Entry must be a single line with no newline");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");

console.log(`Wrote ${entry.length} characters to /output/entry.txt`);
