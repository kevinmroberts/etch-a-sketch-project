const etchContainer = document.getElementById('etch-container');
const createBtn = document.getElementById("create-btn");
const dimensionScreenValue = document.getElementById("dimension");
const slider = document.getElementById('dimensions-input');
let dimension;

function createDivs() {
    dimension = getDimensionValue();

    let amountOfChildren = etchContainer.childElementCount;

    for(i=0; i<amountOfChildren; i++)
    {
        etchContainer.removeChild(etchContainer.lastChild);
    };

    

    for (i = 0; i < dimension; i++) {
        let divRow = document.createElement('div');
        etchContainer.appendChild(divRow);
        divRow.setAttribute('class', 'divRow');

        for (j = 0; j < dimension; j++) {
            let divSquare = document.createElement('div');
            let boxDiv = document.createElement('div');
            boxDiv.setAttribute('class', 'square');
            divRow.appendChild(boxDiv);
        };
    };

    document.querySelectorAll('.square').forEach(item => {
        item.addEventListener('mouseover', event => {
            item.setAttribute('style', 'background-color: black;');
        })
      })

      console.log(dimension + "x" + dimension);

};

function getDimensionValue() {
    x = slider.value;
    return x;
};

function updateScreenValue() {
    dimensionScreenValue.textContent = getDimensionValue() + "x" + getDimensionValue();
};



createBtn.addEventListener('click', createDivs);
slider.addEventListener('change', updateScreenValue)

