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

    return herbList.map(herb => {
        return `${herb.id}: ${herb.name}`
    })

// const show = () => {


// }

}


module.exports = { create, index }



