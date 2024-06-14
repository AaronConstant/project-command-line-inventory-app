const inform = console.log;
const { writeJSONFile, readJSONFile } = require("./src/helpers");

const { create, index, show } = require('./src/herbStockController');


function run() {

    const action = process.argv[2];
    const herb = process.argv[3];
    const time = process.argv[4];
    const benefits = process.argv[5];
    let herbListUpdated = [];
    let writeToFile = false;

    let herbList = readJSONFile('./data','herbStocks.json')


    switch(action) {

        case 'index':
            const herbView = index(herbList)
            inform(herbView);
            break;

        case "create":
            herbListUpdated = create(herbList, herb, time, benefits)
            writeToFile = true; 
            break;

        case 'show': 
            const specificHerb = show(herbList, herb)
            inform(specificHerb);
            break;
    

        default: 
            inform("There was an error!")
    }
    if(writeToFile) {
        writeJSONFile('./data','herbStocks.json', herbListUpdated)
    }
}

run()

