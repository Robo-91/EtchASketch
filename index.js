const container = document.getElementById("grid-container");
const reset = document.getElementById("reset");
const randomColor = document.getElementById("random-color");

container.addEventListener("mouseover", function(e){
	if(e.target && e.target.matches("div.column")) {
		e.target.classList.add("isBlack");
	}
}); 

// Set default size to 16
createGrid(16);

randomColor.addEventListener("click", function(e) {
	container.addEventListener("mouseover", function(e){
		// Callback function that fills different divs with random colors
		if(e.target && e.target.matches("div.column")) {
			e.target.classList.remove("isBlack");
			e.target.style.background = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
		}
	});	
});

reset.addEventListener("click", function(e){
	container.addEventListener(`mouseover`, function(e){
		if(e.target && e.target.matches(`div.column`)) {
			e.target.style.background = `black`;
		}
	});

	container.innerHTML = "";
	chooseSize();
});

// function that creates grid size based on user input
function chooseSize() {
	let gridSize = prompt("Choose a number between 1 and 100");
	console.log(gridSize);
	if(gridSize < 1) {
		createGrid(16);
	} 
	 if(gridSize > 100) {
	 	gridSize = 16;
	 }

	createGrid(gridSize);
}

// function to create the grid using nested for loops
function createGrid(n) {
	for(var row = 1; row <= n; row++) {
		const divRow = document.createElement("div");
		divRow.className = "row";
		for(let c = 0; c < n; c++) {
			const divCol = document.createElement("div");
			divCol.className = "column";
			divRow.setAttribute(`style`, `width: ${ 960 / n }px; height: ${ 960 / n }px;`);
			divCol.setAttribute(`style`, `width: ${ 960 / n }px; height: ${ 960 / n }px;`);
			divRow.appendChild(divCol);
		}
		container.appendChild(divRow);
	}
}





