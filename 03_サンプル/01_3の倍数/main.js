const number = 24

const genkiFunction = function(n) {
  for (let i = 0; i < n; i++) {
    setTimeout(function() {
      if (i % 3 === 0) {
        console.log(`${i}!!!!!!!`)
      } else {
        console.log(i)
      }
    }, 1000 * i)
  }
}

genkiFunction(number)
