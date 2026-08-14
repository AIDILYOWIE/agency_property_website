import path from "path";
import fs from "fs";

const skillCache = new Map<string, string>();

/**
 * Memuat file skill .md dari folder src/skills/
 * @param skillName Nama file skill tanpa ekstensi (misal: 'sales-jalanan')
 * @returns Isi konten file skill sebagai string
 */
export function getSkillPrompt(skillName: string): string {
  // return dari cache jika sudah pernah dibaca
  if (skillCache.has(skillName)) {
    return skillCache.get(skillName) as string;
  }

  try {
    const filePath = path.join(
      process.cwd(),
      "src",
      "skills",
      `${skillName}.md`,
    );
    const skillContent = fs.readFileSync(filePath, "utf-8");

    // simpan ke cache
    skillCache.set(skillName, skillContent);
    return skillContent;
  } catch (error) {
    console.error(`Gagal memuat skill file ${skillName}.md`, error);
    throw new Error(
      `Skill file "${skillName}.md" tidak ditemukan di src/skills/`,
    );
  }
}

/**
 * Memuat file knowledge .md dari folder src/knowledge/
 * @param knowledgeName Nama file knowledge tanpa ekstensi (misal: 'company_profile')
 * @returns Isi konten file knowledge sebagai string
 */
export function getKnowledgePrompt(knowledgeName: string): string {
  const cacheKey = `knowledge_${knowledgeName}`;

  if (skillCache.has(cacheKey)) {
    return skillCache.get(cacheKey) as string;
  }

  try {
    const filePath = path.join(
      process.cwd(),
      "src",
      "knowledge",
      `${knowledgeName}.md`,
    );
    const content = fs.readFileSync(filePath, "utf-8");

    skillCache.set(cacheKey, content);
    return content;
  } catch (error) {
    console.error(`Gagal memuat knowledge file ${knowledgeName}.md`, error);
    throw new Error(
      `Knowledge file "${knowledgeName}.md" tidak ditemukan di src/knowledge/`,
    );
  }
}
