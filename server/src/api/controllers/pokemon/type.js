'use strict'

const _ = require('lodash');
const PokeApi = require('pokedex-promise-v2');
const Pokedex = new PokeApi();

exports.getWidgetInfo = function(params) {
    if (!_.hasIn(params, 'type'))
        return false;
    return new Promise(function (resolve, reject) {
        Pokedex.getTypeByName(params.type) // with Promise
            .then(function (response, err) {
                if (err) {
                    console.log(err);
                    reject(false);
                }
                resolve(response.damage_relations);
            })
    })
};