import { writeFileSync } from "fs";
import path from "path";
import { generateAiTxt, generateLlmsFullTxt, generateLlmsTxt } from "../src/lib/llms-content";

const publicDir = path.join(process.cwd(), "public");

writeFileSync(path.join(publicDir, "llms.txt"), generateLlmsTxt(), "utf8");
writeFileSync(path.join(publicDir, "llms-full.txt"), generateLlmsFullTxt(), "utf8");
writeFileSync(path.join(publicDir, "ai.txt"), generateAiTxt(), "utf8");

console.log("✓ llms.txt, llms-full.txt e ai.txt gerados em public/");
