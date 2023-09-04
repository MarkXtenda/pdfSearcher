const fileSystem = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

const pathToPdf = process.argv[2];
let pdfFiles = [];
const keyWord = "Software";

fileSystem.readdir(pathToPdf, (err, files) => {
    if (err) {
        return console.log("Reading Dirrectory Error: ", err);
    }
    pdfPath = path.join(pathToPdf, files[0])
        fileSystem.readFile(pdfPath, async (err, data)=>{
            if (err) {
                return console.log("Reading File Error: ", err);
            }
            pdf(data).then((pdfData) => {
                const text = pdfData.text;
                console.log(`Text from ${files[0]}:`);
                console.log(text);
                const keyWordExist = text.includes(keyWord);
                console.log(`This text does ${keyWordExist ? "includes" : "not includes"} a keyword ${keyWord}`)
            }).catch((err) => {
                console.log("PDF error: ", err);
            });
        })
})
