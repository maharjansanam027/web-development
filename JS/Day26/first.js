// // in interview it can be asked how sorting system works

// let cross = 'O';

// let winner = [
//     [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
// ]




// const board =document.querySelector('.board');

// const new_array = new Array(9).fill('E');
// function checkwinner(){
//     for (const [index0,index1,index2] of winner) {
//         if(new_array[index0]!='E'&&new_array[index0]===new_array[index1]&&new_array[index1]===new_array[index2]){
//             return 1;
//         }
//     }
//     return 0;
// }
// // console.log(board);

// board.addEventListener('click',(event)=>{

//     if(cross === 'O')
//     {

//         const element = event.target;
//         element.innerHTML = "O";
//         new_array[element.id] = "O";
//         if(checkwinner()){
//             document.getElementById('result').innerHTML = "Winner is 0";
//         }
//         cross = 'X';
//     }
//     else{
//         const element = event.target;
//         element.innerHTML = "X";
//         new_array[element.id] = "X";
//         if(checkwinner()){
//             document.getElementById('result').innerHTML = "Winner is X";
//         }
//         cross = 'O';
//     }
// })



let turn = "O";
let total_turn = 0;

const winner = [[0,1,2],[3,4,5],[6,7,8],
[0,3,6],[1,4,7],[2,5,8],
[0,4,8],[2,4,6]];

let tictactoe = new Array(9).fill("E");

function checkwinner(){

    for(let [index0, index1, index2] of winner)
    {
        if(tictactoe[index0]!="E"&&tictactoe[index0]===tictactoe[index1]&&tictactoe[index1]===tictactoe[index2])
        return 1;
    }

    return 0;
}


const board = document.querySelector('.board');

const boardLogic = function(event){
    
    if(tictactoe[event.target.id]==="E")
        {    
        total_turn++;    
    
        if(turn==="O"){
            event.target.innerHTML = "O";
            tictactoe[event.target.id] = "O";
            if(checkwinner())
            {
                document.getElementById('result').innerText = "Winner is O";
                board.removeEventListener('click',boardLogic);
                return;
            }
    
            turn = "X";
        }
        else
        {
            event.target.innerHTML = "X";
            tictactoe[event.target.id] = 'X';
            if(checkwinner())
            {
                document.getElementById('result').innerText = "Winner is X";
                board.removeEventListener('click',boardLogic);
                return;
            };
            
            turn = "O";
        }
       }

    if(total_turn==9){
        document.getElementById('result').innerText = "Match is Draw";
    }   
}

board.addEventListener('click', boardLogic);

const Restart = document.getElementById("restartButton");
Restart.addEventListener('click',()=>{
    turn = "O";
    const cell = document.getElementsByClassName('cell');
    Array.from(cell).forEach((element)=>{
      element.innerHTML = "";
    })

    document.getElementById('result').innerText = "";
    total_turn = 0;

    tictactoe = new Array(9).fill("E");
    
    board.addEventListener('click', boardLogic);
})

