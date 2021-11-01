// Change Navbar Color On Scroll

window.onscroll = 
function(){
	 scrollFuntion()
};

function scrollFuntion(){
	if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
		document.getElementById("navbar").style.backgroundColor = "white";
	}else{
		document.getElementById("navbar").style.backgroundColor = "transparent";
	}
}