/**
 * 
 * @param {number} counter Counter value
 * @param {number} callback Callback function
 */
const addCounter = (counter, callback) => {
    counter++
    callback(counter)
}

module.exports = {
    addCounter
}