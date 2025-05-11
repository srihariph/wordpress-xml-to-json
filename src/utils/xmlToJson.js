import fs from 'fs-extra';
import { parseStringPromise } from 'xml2js';
/**
 * Converts a WordPress XML export file to JSON.
 * @param xmlFilePath - Path to the input XML file.
 * @param jsonFilePath - Path to the output JSON file.
 */
export async function convertXmlToJson(xmlFilePath, jsonFilePath) {
    try {
        console.log(`Reading XML file: ${xmlFilePath}`);
        const xmlData = await fs.readFile(xmlFilePath, 'utf-8');
        console.log(`Parsing XML to JSON...`);
        const jsonData = await parseStringPromise(xmlData, { mergeAttrs: true, explicitArray: false });
        console.log(`Writing JSON file: ${jsonFilePath}`);
        await fs.writeJson(jsonFilePath, jsonData, { spaces: 2 });
        console.log(`✅ Conversion complete. JSON saved to ${jsonFilePath}`);
    }
    catch (error) {
        console.error(`❌ Error converting XML to JSON:`, error);
    }
}
