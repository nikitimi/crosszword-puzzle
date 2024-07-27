import QNA from "./QNA.json"

export default function constructCrossWordPuzzle() {
  const add = 1
  const types = QNA?.type
  var array = new Array(30)

  for (var i = 0; i < array.length; i++) {
    array[i] = [
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
    ]
  }
  types.down.map(({ pos, answer, number }) => {
    try {
      const x = pos.x + add
      const y = pos.y + add
      // console.log(answer)
      // Loop to distribute word characters respective to direction
      for (let xCounter = 1; xCounter <= answer.length; xCounter++) {
        if (xCounter === 1) array[x][y] = { number: number }
        console.log(number)
        array[x][y] = {
          ...array[x][y],
          value: answer.charAt(xCounter - 1),
        }
        x += 1
        // Set Character at specific location
        // console.log(pos, answer.charAt(x - 1))
      }
    } catch (error) {
      console.log(`Crossword downwards error: ${(array, error)}`)
    }
  })
  types.across.map(({ pos, answer, number }) => {
    try {
      const x = pos.x + add
      const y = pos.y + add
      // console.log(answer)
      // Loop to distribute word characters respective to direction
      for (let xCounter = 1; xCounter <= answer.length; xCounter++) {
        if (xCounter === 1) array[x][y] = { number: number }
        array[x][y] = {
          ...array[x][y],
          value: answer.charAt(xCounter - 1),
        }
        y += 1
        // Set Character at specific location
        // console.log(pos, answer.charAt(x - 1))
      }
    } catch (error) {
      console.log(`Crossword across error: ${(pos, answer, number, error)}`)
    }
  })
  return array
}
