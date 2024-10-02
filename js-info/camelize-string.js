// Translate border-left-width to borderLeftWidth
// importance: 5
// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

function camelize(str) {

    let arr = str.split('-') 
    let capitalizedArr = arr.map(word => 
        word.length > 0
        ? word.at(0).toUpperCase() + word.slice(1)
        : null
    )
    let capitalizedStr = capitalizedArr.join('')
    let camelized = capitalizedStr.at(0).toLowerCase() + capitalizedStr.slice(1)

    return camelized
}

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';