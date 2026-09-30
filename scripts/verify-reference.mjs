#!/usr/bin/env node

import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";

const EXPECTED_GIT_BLOB = "122528fce2ec42e4872e60d106cf603ac2dc772f";
const path = new URL("../index.html", import.meta.url);
const content = await readFile(path);
const header = Buffer.from(`blob ${content.length}\0`);
const actual = createHash("sha1").update(header).update(content).digest("hex");

if (actual !== EXPECTED_GIT_BLOB) {
  console.error(
    `reference fixture changed: expected ${EXPECTED_GIT_BLOB}, got ${actual}`,
  );
  process.exit(1);
}

console.log(`reference fixture ok: ${actual}`);
