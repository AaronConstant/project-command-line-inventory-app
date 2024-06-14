const { readFileSync, writeFileSync } = require("node:fs");
// The starting point would be knowing that we want to store and save our Backend data. Psuedo Backend. 

const readJSONFile = (path, fileName) => {

    const herbs = readFileSync( `${path}/${fileName}`, "utf8" );

    return herbs ? JSON.parse(herbs) : [];
}

function writeJSONFile(path, fileName, data) {
    // converts the data into a JSON String.
    data = JSON.stringify(data, 0, 2);

    //writes the data into the directory for local storage.
    return writeFileSync( `${path}/${fileName}`, data, {encoding: "utf-8"} )
}

module.exports = {
    readJSONFile,
    writeJSONFile
}