const fuzz = require('fuzzball')

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
    // console.log(winner)
    return winner
}

const products = [
    'Some Product',
    'Milk',
    'Eggs',
    '1 Liter Milch Gut & Günstig',
    'Ehrmann Almighurt 320ml',
    'Radeberger Pilsener 20x 0,5L'
]