const inform = console.log;
const { writeJSONFile, readJSONFile } = require("./src/helpers");

const { create, index, show, destroy, edit } = require('./src/herbStockController');


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
            inform('Herb added to stock!')
            break;

        case "create":
            herbListUpdated = create(herbList, herb, time, benefits)
            writeToFile = true; 
            break;

        case 'show': 
            const specificHerb = show(herbList, herb)
            inform(specificHerb);
            break;

        case 'update':
            herbListUpdated = edit(herbList, herb, process.argv[3], process.argv[4])
            writeToFile = true;
            break;
        
        case 'destroy' : 
            herbListUpdated = destroy(herbList, herb)
            writeToFile = true;
            break;

        default: 
            inform("There was an error!")
    }
    if(writeToFile) {
        writeJSONFile('./data','herbStocks.json', herbListUpdated)
    }
}
run()

