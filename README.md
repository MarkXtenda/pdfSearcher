# pdfSearcher
This Node.js application allows you to search for a specific keyword within PDF files in a given directory.

## Prerequisites
Node.js installed on your system
## Program Overview
- The program utilizes the <strong>pdf-parse</strong> library to extract text from PDF files.
- It prompts the user for a keyword and the path to the directory containing PDF files.
- The application then searches for the specified keyword within the text of all PDF files in the given directory.
- If the keyword is found in a PDF file, the filename is added to the list of matching files.
- Finally, the program displays the list of PDF files that contain the specified keyword.

<strong>Note:</strong> PDF files in the specified directory must have the ".pdf" extension to be considered.

## How to Use
1. Clone this repository to your local machine.
2. Open a terminal window and navigate to the project directory.
3. Run npm install to install the required dependencies.
4. Run the program using the following command:
   `node pdf-search.js`
6. Enter the keyword you want to search for when prompted.
7. Enter the path to the directory containing the PDF files when prompted.

## Dependencies
- <strong>pdf-parse</strong>: <a href="https://www.npmjs.com/package/pdf-parse">pdf-parse on npm</a>
- <strong>prompt-sync</strong>: <a href="https://www.npmjs.com/package/prompt-sync">prompt-sync on npm</a>
## Example Usage
`Enter the keyword to search for: Software`

`Enter the path to the pdf folder: /path/to/pdf/files`