const submitbtn = document.getElementById('submitbtn')
const rateBlock = document.getElementById('rate')
const thankBlock = document.getElementById('thank')
const items = document.getElementsByClassName('item')
const rating = document.getElementById('rating')

const all_items = Array.from(items)
let cur_items = Array.from(items)


submitbtn.addEventListener('click', function() {
  let x = 5000;
  let y = 0;

  rateBlock.style.transform = `translate(${x}px, ${y}px)`
  thankBlock.style.transform = `translate(0px, 0px)`

})


all_items.forEach(function(item) {
  item.addEventListener('click', function() {
    cur_items = all_items
    cur_items = cur_items.filter(item => item != this)

    this.classList.add('selected')
    cur_items.forEach(function(circle) {
      circle.classList.remove('selected')
    })
    rating.innerText = this.innerText


  })
})
