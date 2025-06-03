// Alternate promise Structure
 Promise.resolve(null)
// // Promise resolve callback called
 .then(value => {
     return 1
 })
 // Flow to run after each other
 .then(value => {
     console.log(value)
     return 2
 })
 .then(value => {
     console.log(value)
     return 3
 })
 .then(value => {
     // Errors will glow to first catch
    // throw "Error Occured"
     console.log(value)
     return 4
 })
 .then(value => {
     console.log(value)
     return 5
 })
 // Promise reject callback called
 .catch(err => {
     console.log(err)
 })