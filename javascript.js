/*const gridContainer=document.querySelector('.grid-container');

function createGrid(num){
    const fragment=document.createDocumentFragment();
    document.documentElement.style.setProperty('--gridAmount',num);
    for(let i=0;i<num;i++){
        const row=document.createElement('div');
        fragment.appendChild(row);

        for (let j=0;j<num;j++){
            const square=document.createElement('div');
            square.classList.add('square');
            square.style.width=`${500/num}px`;
            square.style.height=`${500/num}px`;
            row.appendChild(square);
        }
    }

    gridContainer.appendChild(fragment);
}

function getSize(){
    gridAmount=prompt('Enter a grid size between 16 & 100: ',16);
    while(Number(gridAmount)>100 || Number(gridAmount)<=0){
        gridAmount=prompt("Invalid input! Please enter a grid size between 16 & 100: ");
    }
    createGrid(gridAmount);
}


//getSize();
document.addEventListener('DOMContentLoaded',()=>{
    getSize();
});*/


/*2nd attempt at the js*/

let gridContainer=document.getElementById('grid-container');

function createGrid(size){
    let squareSize=500/size;

    for(let i=0;i<size*size;i++){
        let square=document.createElement('div');
        square.classList.add('square');
        square.style.width=squareSize+'px';
        square.style.height=squareSize+'px';
        gridContainer.appendChild(square);
    }
}

//come back to this later
/*
function getSize(){
    gridAmount=prompt('Enter a grid size between 16 & 100: ',16);
    while(Number(gridAmount)>100 || Number(gridAmount)<=0){
        gridAmount=prompt("Invalid input! Please enter a grid size between 16 & 100: ");
    }
    createGrid(gridAmount);
}


//getSize();
document.addEventListener('DOMContentLoaded',()=>{
    getSize();
});*/



function getSize(){
    let gridAmount=prompt('Enter a grid size between 16 & 100: ',16);
    while(Number(gridAmount)>100 || Number(gridAmount)<16){
        gridAmount=prompt("Invalid input! Please enter a grid size between 16 & 100: ");
    }
    gridContainer.innerHTML='';
    createGrid(gridAmount);
}


function randomInteger(max){
    return Math.floor(Math.random()*(max+1));
}

function randomRGBColor(){
    let r=randomInteger(255);
    let g=randomInteger(255);
    let b=randomInteger(255);
    return `rgb(${r},${g},${b})`;
}




let selectedSize=16;
createGrid(selectedSize);

const modSquares=document.getElementsByClassName('square');

for (let i=0;i<modSquares.length;i++){
    modSquares[i].addEventListener('mouseover',(event)=>{
        event.target.style.backgroundColor='black';
    });
}



const newGridButton=document.querySelector('#new-grid');
newGridButton.addEventListener('click',(event)=>{
    getSize();
    const modSquares=document.getElementsByClassName('square');

    for (let i=0;i<modSquares.length;i++){
        modSquares[i].addEventListener('mouseover',(event)=>{
        event.target.style.backgroundColor='black';
    });
}
});



let flag=true;
const changeColorButton=document.querySelector('#change-color');
changeColorButton.addEventListener('click',(event)=>{


    const modSquares=document.getElementsByClassName('square');
    if(flag){
    for (let i=0;i<modSquares.length;i++){
        modSquares[i].addEventListener('mouseover',(event)=>{
            let color=randomRGBColor();
            event.target.style.backgroundColor=color;

        });
    }

    }
    else{
        for (let i=0;i<modSquares.length;i++){
            modSquares[i].addEventListener('mouseover',(event)=>{
            event.target.style.backgroundColor='black';
        });

    }
}
flag=!flag;
});
