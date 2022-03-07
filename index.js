const buttonOpen = document.querySelectorAll('#btn')
const answer = document.querySelectorAll('.answer')
let x
function openClose (place) {
  if (x === 1) {
    answer[place].classList.add('answer')
    return (x = 0)
  }
 else {
   answer[place].classList.remove('answer')
   return (x = 1)  }
}

for (let i = 0; i < buttonOpen.length; i++) {
  buttonOpen[i].addEventListener('click', function () {
    openClose(i)
  })
}
