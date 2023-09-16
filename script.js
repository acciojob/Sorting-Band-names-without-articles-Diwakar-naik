//your code here
let diwa=["The Virupaksha Temple", "Victoria Memorial", "Tajmahal"];
let empty=[];
for(let i=0;i<diwa.length;i++){
	let naik=diwa[i].replace("The","").trim();
	empty.push(naik);
}
empty.sort();
conole.log(empty);


