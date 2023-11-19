let color = 'black';
let Click = 'false'
document.addEventListener("DOMContentLoaded", function(){
    createBoard(32)

    document.querySelector('body').addEventListener('click', function(e) {
        if(e.target.tagName != 'BUTTON'){
            Click = !Click
            let draw = document.querySelector('#draw')
            if (Click){
                draw.innerHTML='now you can draw'
            } else{
                draw.innerHTML='not now'
            }
        }

    })

    let btn_popup = document.querySelector('#popup')
    btn_popup.addEventListener('click',function(){
        let size= getSize();
        createBoard(size)
    })

})
function createBoard(size) {
    let board =document.querySelector('.board');

    board.style.gridTemplateColumns = `repeat(${size},1fr)`
    board.style.gridTemplateRows = `repeat(${size},1fr)`
    let numDivs= size * size
    for (i = 0 ; i < numDivs ; i++){
        let div = document.createElement("div");
        div.addEventListener('mouseover',colorDiv)
        board.insertAdjacentElement("beforeend",div)
    }
}
function getSize(){
    let input = prompt(" provide a size for the board")
    let message = document.querySelector('#message')
    if (input == ""){
        message.innerHTML='please give a size for the board'
    }
    else if (input < 0 || input > 100 ){
        message.innerHTML='Numbers should be between 0 and 100'
    }else{
        message.innerHTML=' this is how we do '
        return input;
    }
}
function colorDiv() {
 if (Click)
    {
        if (color == 'random'){
        this.style.backgroundColor= `hsl(${Math.random() * 360},100%,50%)`
    }else{
        this.style.backgroundColor='black'
    }
}}
function setColor(colorChoice) {
    let color=colorChoice;
}
function resetBoard(){
    let divs = document.querySelectorAll('div')
    divs.forEach((div)=> this.backgroundColor ='white')
}
