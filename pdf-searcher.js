const fileSystem = require('fs').promises;
const { error } = require('console');
const path = require('path');
const pdf = require('pdf-parse');
const prompt = require("prompt-sync")();

const keyWord = prompt("Enter the keyword to search for: ")
const pathToPdf = prompt("Enter the path to pdf folder: ")
let pdfFiles = [];

async function readPdf(data) {
    try {
        const pdfResponse =  await pdf(data);
        return pdfResponse.text;
    } catch (error) {
        console.log("PDF error: ", error.message);
    }
}

async function readDir(pathToDir) {
    try {
        const response = await fileSystem.readdir(pathToDir);
        filteredResponse = response.filter((file)=>file.endsWith(".pdf"))
        return filteredResponse;
    } catch (error) {
        console.log("Reading Dirrectory Error: ", error);
    }
}

async function readFiles(pathToPdf, file) {
    // console.log(file)
    const pdfPath = path.join(pathToPdf, file)
    try {
        const fileBuffer = await fileSystem.readFile(pdfPath);
        return fileBuffer;
    } catch (error) {
        console.log("Reading File Error: ", error);
    }
}

async function pdfSearcher() {
    if (keyWord && pathToPdf) {
        try {
            const file = await readDir(pathToPdf)
            for (let index = 0; index < file.length; index++) {
                const buffer = await readFiles(pathToPdf, file[0])
                const text = await readPdf(buffer);
                if (text?.includes(keyWord)) {
                    pdfFiles.push(file[index])
                }
            }
        }
        catch (error) {
            console.log(error.message)
        }
    console.log(`This text does ${pdfFiles.length > 0 ? `includes a keyword ${keyWord} in these files:\n` : `not includes a keyword ${keyWord}`}`)
    console.log(pdfFiles.join('\n'))
    }
    else {
        console.log("Provide a keyword and path!")
    }
}
pdfSearcher();
