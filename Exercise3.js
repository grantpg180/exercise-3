function makeAllCaps(allCaps) {
return new Promise(function(resolve,reject){
	 $.get('http://capsplaceholder.typicode.com/allCaps' + allCaps, function(caps){
		 resolve(caps[0]);
	 });
 })
}

function sortWords(fullWords) {
return new Promise(function(resolve,reject){
	 $.get('http://capsplaceholder.typicode.com/justWords' + fullWords.id, function(words){
		 resolve(words);
	 });
})
}


function render(words) {
console.log(words);
}

function showWords(){
makeAllCaps('')
 .then(sortWords)
 .then(render);
}

showWords();