// window.onload function

window.onload = function() {
  // store reference to HTML square in a variable named square
  let main = document.querySelector('#main')
  
  // append squares to container
  let squareDiv;
  for (let i = 0; i < 10; i++) {
    // create an HTML element
    squareDiv = document.createElement('div')
    // add class of 'square' to HTML element
    squareDiv.classList.add('square')
    squareDiv.id = 'square-' + i
    // append HTML element to container
    // create unique identifier using i variable
    main.appendChild(squareDiv)

    squareDiv.addEventListener('click', function(event){
    
      console.log(event.target.id)
      document.querySelector('#' + event.target.id).style.backgroundColor = 'blue'
    })
  }

}