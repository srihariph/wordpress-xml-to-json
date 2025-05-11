import { convertXmlToJson } from './utils/xmlToJson';
// Path to your WordPress export file
const xmlFilePath = './srihariprabaharan-export.xml';
const jsonFilePath = './output.json';
// Run the conversion
convertXmlToJson(xmlFilePath, jsonFilePath);
