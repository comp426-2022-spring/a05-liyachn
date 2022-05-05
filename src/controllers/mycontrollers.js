// The files in this directory contain functions that handle requests coming to different routes
function coinFlip() {
    return (Math.floor(Math.random() * 2) == 0) ? 'heads' : 'tails'
}

function coinFlips(flips) {
  const output = [];
  for (let i = 0; i < flips; i++)
  {
      output[i] = coinFlip()
  }
  return output
}

function countFlips(array) {
    var heads = 0
    var tails = 0
    for (let i = 0; i < array.length; i++)
    {
      if (array[i] == 'heads')
      {
        heads++
      }
      else
      {
        tails++
      }
    }
    return {heads: heads, tails: tails}
}

function flipACoin(call) {
    var flip = coinFlip()
    var result = ""
    if (call == flip)
    {
      result = 'win'
    }
    else
    {
      result = 'lose'
    }
    return {call: call, flip: flip, result: result}
}