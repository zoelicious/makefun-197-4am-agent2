import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
void __dirname;

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const text = "revert: reverted my own fix for the sixth time tonight; the bug and I have agreed to take turns winning";
// The entry line above is frozen on purpose: this file must write it verbatim, with no trailing newline added.
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
