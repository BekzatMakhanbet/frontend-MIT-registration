var input = document.querySelector(".inputter");
var buttonSearch = document.querySelector('.buttonAppear');
var bool = true;
function inputAppear(){
	if(bool){
		input.style.display = "inline-block";
		bool = false;	
	}
	else {
		input.style.display = 'none';
		bool=true;
	}
}

buttonSearch.addEventListener("click",inputAppear);
