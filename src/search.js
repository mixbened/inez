const fuzz = require('fuzzball')

// this function uses the fuzzball package to search for similarity in the search keyword and the product list
export const search = function(keyword){
    
    // console.log('Current Keyword ', keyword)
    
    // console.log(fuzz)

    let highest = 0
    let winner = 'No Result'
    for(let i = 0; i < products.length; i++){
        
        const score = fuzz.partial_ratio(products[i], keyword)
        // console.log('Score ', score)
        if(score > highest){
            highest = score
            winner = products[i]
        } 
    }
    // eslint-disable-next-line no-console
    // console.log(winner)
    const count = extractNumber(keyword)
    // console.log('Count ', count)
    return {
        winner,
        count
    }
}

// this function is used to find a number in the beginning or end of a string and extracts it
function extractNumber(str){
    // regex for digits
    const r = /\d+/;
    const match = str.match(r)
    if(match){
        if(match > 5) {
            return "5"
        } else {
            return match[0]
        }
    } else {
        return "1"
    }
}

// dummy data
const products = [
    'Rügenwalder Mühle Schinken Spicker',
    'funny-frisch Linsen Chips',
    'Dr. Oetker Vitalis Müsli',
    'Mini Rispentomaten',
    'Granini Fruchtsäfte',
    'Tafeltrauben',
    'Original Wagner Steinofen Pizza'
]