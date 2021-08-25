//Random Message Generator Project.

function randomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
  }

const collectionArrays = {
  tomorrowsWeatherArray: ["Sunny", "Cloudy", "Rainy", "Snowing", "Windy"],
  howToDressArray: ["T-shirt & Shorts", "Jumper", "Rain Coat", "Gloves & Scarf", "Stay inside"],
  howFarToWalkDogArray: ["10 minutes", "20 minutes", "30 minutes", "50 minutes", "A full Hour!"]
}

//Story the full random message in this array.
const fullMessageArray = [];

// Iterate over the object
for (let gather in collectionArrays) {
    let indexofItem = randomNumber(collectionArrays[gather].length)


switch (gather) {
    case 'tomorrowsWeatherArray':
        fullMessageArray.push(`The weather is currently "${collectionArrays[gather][indexofItem]}".`)
        break
      case 'howToDressArray':
        fullMessageArray.push(`You should wear: "${collectionArrays[gather][indexofItem]}".`)
        break
      case 'howFarToWalkDogArray':
        fullMessageArray.push(`Walk your Dog for: "${collectionArrays[gather][indexofItem]}".`)
        break
    default:
        fullMessageArray.push('There is not enough info.')
}

}

function formatMessage(weather) {
    // Add some ASCII here?
    // Add in more symbols to the array? like emojies or what not?
    const formatted = fullMessageArray.join('\n')
    console.log(formatted)
  }
  
  formatMessage(fullMessageArray);

//Create a random picker from an array,
//Then use that collected Output to trigger a further Item retreval from a Switch statement.
//This new data collected doesn't have to be from another array!