//your code here


let diwa=["The Virupaksha Temple", "an Victoria Memorial", "a Tajmahal"];
let reg=/\bthe\b|\ban\b|\ba\b/gi;
console.log(reg);
let empty=[];
for(let i=0;i<diwa.length;i++){
	let naik=diwa[i].replace("reg","").trim();
	empty.push(naik);
}
empty.sort();
console.log(empty);


