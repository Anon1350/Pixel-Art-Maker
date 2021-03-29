//These codes are used to take important values from the html.
const submitButton = document.querySelector('#submitButton');
const tableHeight = document.querySelector('#inputHeight');
const tableWidth = document.querySelector('#inputWidth');

//These codes are the foundation of the canvas.
const mainTable = document.createElement("TABLE");
mainTable.setAttribute("id","gridCanvas");
document.body.appendChild(mainTable);
let blankCanvas = document.querySelector("#gridCanvas");

function makeGrid(event) {
    //These codes are for resetting the canvas after pressing the button again.
    if (blankCanvas.rows.length !== 0){
      for(var i = blankCanvas.rows.length;i>0;i--){
          let remove1 = blankCanvas.deleteRow(-1);
        }
     }

     //These codes are for adding the rows and columns.
    for (let x = 0; x < tableHeight.value; x++){
      let row = blankCanvas.insertRow(0);
      for (let y = 0; y < tableWidth.value; y++){
        let cell = row.insertCell(0);
      }
    }

    //These codes are for adding event listener to each of the cell, which would allow color to be filled in.
    for (let a = 0; a < blankCanvas.rows.length; a++){
      for (let b = 0; b < blankCanvas.rows[0].cells.length; b++){
        let colorCell = blankCanvas.rows[a].cells[b];
        colorCell.addEventListener('click',function(){fillColor(a,b)});
      }
    }
    //This is to prevent the page from reloading and in turn erasing the canvas.
    event.preventDefault();
}
//This function is for filling the square with color.
function fillColor (row,column) {
    let changeColor = blankCanvas.rows[row].cells[column];
    changeColor.style.backgroundColor = document.querySelector('#colorPicker').value;
}

//This is to make the submit button function as intended.
submitButton.addEventListener('click',makeGrid,true);
