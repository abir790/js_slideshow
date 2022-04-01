const slideShowAll = document.querySelectorAll(".SlideShow-items");
//console.log(slideShowAll);

let count = 1;
setInterval(()=>{
	count ++;
	const slideShow = document.querySelector(".current");
	slideShow.classList.remove("current");
	if (count >slideShowAll.length) {
		slideShowAll[0].classList.add("current");
        slideShow.classList.remove("current");  // na dileo auto 1t remove er jonno kaj korbe
		count =1;

	}else{
		slideShow.nextElementSibling.classList.add("current");
		slideShow.classList.remove("current"); // na dileo auto 1t remove er jonno kaj korbe
	}	

},2000);

const boxContainers = document.querySelector(".box-containers");
console.log(boxContainers);
const posts =[
 {
	abir:"hollow abir",
	apon:"hellow apon",
},
 {
	abir:" abbbir",
	apon:"apppon",
},
 {
	abir:"hollow aaabir",
	apon:"hellow aaapon",
},

];





const autoPost =()=>{
	posts.map((post)=>{ // map filter or forEach  jeita iccha use korte pari
	let div=document.createElement('div');
	div.classList.add("box-items");
	div.innerHTML=`<h2>${post.abir}</h2>
				<p>post</p>	
                 `;
    let aded = boxContainers.appendChild(div);
	});
}
autoPost();





/*
function fun(){
	let div=document.createElement('div');
	div.classList.add("box-items");
	div.innerHTML=`<h2>jjjjj</h2>
				<p>1st box details</p>	
`;
	/*
	    let node = document.createTextNode("hellow new Nodes");
        div.appendChild(node);

	*/

 //   let aded = boxContainers.appendChild(div);


//}

/*cl.addEventListener("click",fun);
let cl = document.querySelector(".click");

document.getElementById("click").addEventListener("click", fun);


*/

//let cl = document.getElementById("click"); // add addEventListener e querySelector hobe na error dekhabe
//cl.addEventListener("click", fun);
