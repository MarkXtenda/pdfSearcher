const fileSystem = require('fs').promises;
const path = require('path');
const pdf = require('pdf-parse');

const pathToPdf = process.argv[2];
let pdfFiles = [];
const keyWord = "Software";

async function readPdf(data) {
    try {
        const pdfResponse =  await pdf(data);
        return pdfResponse.text;
    } catch (error) {
        console.log("PDF error: ", error);
    }
}

async function readDir(pathToDir) {
    try {
        const response = await fileSystem.readdir(pathToDir);
        return response;
    } catch (error) {
        console.log("Reading Dirrectory Error: ", error);
    }
}

async function readFiles(pathToPdf, file) {
    const pdfPath = path.join(pathToPdf, file)
    try {
        const fileBuffer = fileSystem.readFile(pdfPath);
        return fileBuffer;
    } catch (error) {
        console.log("Reading File Error: ", err);
    }
}

async function pdfSearcher() {
    const file = await readDir(pathToPdf)
    const buffer = await readFiles(pathToPdf, file[0])
    const text = await readPdf(buffer);
    console.log(`Text from ${file[0]}:`);
    console.log(text);
    const keyWordExist = text.includes(keyWord);
    console.log(`This text does ${keyWordExist ? "includes" : "not includes"} a keyword ${keyWord}`)
}
pdfSearcher();
