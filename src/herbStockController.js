const { nanoid } = require('nanoid');

const inform = console.log;
// const herbs = require('../data/herbStocks.json');

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

    herbList.map(herb => {
        return `${herb.id}: ${herb.name}`
    })    
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

const destroy = (herbList, herbId) => {

    // FindIndex returns the index if the conditions are met and will return the index at which the element can be found or -1 if nothing was found. 
    const herbIndex = herbList.findIndex(herb => herb.id === herbId)

    if(herbIndex > -1) {
        herbList.splice(herbIndex, 1)
        inform('Herb was successfully removed!')
    } else {
        inform('Herb was not found, ')
        return herbList;
    }
}


module.exports = { create, index, show, destroy }



