const { nanoid } = require('nanoid');
const Table = require('cli-table')
const chalk = require('chalk')

const inform = console.log;

const create = (herbs, currentHerb, time, benefits) => {
    const herb = {

        name: currentHerb,
        id: nanoid(6),
        steep: time,
        description: benefits
    }
        herbs.push(herb)
        return herbs;
}

const index = (herbList) => {

    const headers = Object.keys(herbList[0]) // an array of the herbList data Keys. 

    // head, colWidths, etc.  are properties similar to CSS. 

    // table returns a table object that allows you to build and format ASCII tables in Node.js which allows you to apply the below changes before converting it into a string representation output. 
    const table = new Table({
        head: headers, // Can determine the headers using an array as the basic structure utilizing use table.
        colWidths: [40, 8, 12, 38], // self explanatory.
        style: {
            head: ['cyan', 'bold'], // initializing styles to the head key of headers array.
            border:['blue']
        }
    });
        // creates the styling for each herb specificed value using the chalk dependency which will take each value and will need it returned within itself. 

    herbList.forEach(herb => {
        herb.name = chalk.green.bold(herb.name)
        herb.id = chalk.black.bold(herb.id)
        herb.description = chalk.yellow.italic(herb.description)
        herb.steep = chalk.red(herb.steep)

        // to add rows you require an array and utilization of a native array method assists with the application of conditions.
        table.push(headers.map(header => herb[header]))

        // herbList.map(herb => {
        //     return console.table(herb)
        // })    
    })
    // the toString() converts the table object into a table formatted string representation where it will print in the console.log.
    inform(table.toString())
}

const show = (herbList, herbId) => {
    // Tried using the ternary to produce a message but the functionality of find will produce the element itself rather than the message so seperate the logic to produce other logic you would want to implement. --Side Note. 

    const herb = herbList.find(herb => herb.id === herbId);


    if (herb) {
        return `${herb.name} was found with the Id:${herbId}, which helps with ${herb.description}!`;
    } else {
        return `ID is case sensitive. The ID ${herbId} is not a valid ID. Please re-enter ID and try again.`;
    }
};
                                
const update = (herbList, herbId, herbListUpdate, updateInfo) => {


    const herbIndex = herbList.findIndex(herb => herb.id === herbId)

    switch (herbListUpdate) {
        case "id" :
            herbList[herbIndex].id = updateInfo;
            break;
        case "steep" : 
            herbList[herbIndex].steep = updateInfo;
            break;
        case "name": 
            herbList[herbIndex].name = updateInfo;
            break;
        case "description":
            herbList[herbIndex].description = updateInfo;
            break;
        default:
            inform("There was an Error! Check Information! ")


    }
    // return the updated herbList with the modifications. When updating information always return with data/ array of objects. 
    return herbList;

}

const destroy = (herbList, herbId) => {

    // FindIndex returns the index if the conditions are met and will return the index at which the element can be found or -1 if nothing was found. 

    const herbIndex = herbList.findIndex( herb => herb.id === herbId )

    if(herbIndex > -1) {
        herbList.splice(herbIndex, 1)
        inform('Herb was successfully removed!')
        return herbList;

    } else {

        inform('Herb was not found! ')
        return herbList;
    }
}


module.exports = { 
    create, 
    index, 
    show, 
    destroy, 
    update 
}



