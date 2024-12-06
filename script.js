const generateRandomNumber = (num) => {
    return Math.floor(Math.random() * num)
}

const collectiveWisdom = {
    signInfo: ['star', 'moon', 'sun', 'comet'],
    fortuneOutput: ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
    advice: ['go out and eat', 'not read this', 'play more', 'trust no one']
  }

let FinalOutput = []

for (let prop in collectiveWisdom) {
    let optionIdx = generateRandomNumber(collectiveWisdom[prop].length)

    switch(prop) {
        case "signInfo" :
            FinalOutput.push( `Your sign right now is a ${collectiveWisdom[prop][optionIdx]}.`)
            break
        case "fortuneOutput" :
            FinalOutput.push(`You are having: ${collectiveWisdom[prop][optionIdx]}.`)
            break
        case "advice" :
            FinalOutput.push(`You should: ${collectiveWisdom[prop][optionIdx]}`)
            break
    }
}

function formatWisdom(wisdom) {
    // Add some ASCII here?
    // Add in more symbols to the array? like emojies or what not?
    const formatted = wisdom.join('\n')
    console.log(formatted)
  }

formatWisdom(FinalOutput)