const upperFirstWord = function( string){
    const [first, ...others] = string.split(" ");
    return [first.toUpperCase(), ...others].join(" ");
}

const transformer = function(str, callback){
    // console.log(`ORIGINAL STRING : ${str}`);
    console.log(`TRANSFORMED BY : ${callback.name}`);
    console.log(`TRANSFORMED STRING : ${callback(str)}`);
}

const oneWord = function(string){
    return string.replace("javscript", "NODE JS");
}

const reversedString = function(string){
    return string.split(" ").reverse().join(" ");
}

const wordCounter = function(string){
    return [`WORDS : ${string.split(" ").length}`, `LETTERS : ${string.split("").length}`, `SENTENCES : ${string.split(".").length}`];
}


transformer("javscript is the best", upperFirstWord);
transformer("javscript is the best", oneWord);
transformer("javscript is the best", reversedString);
transformer("javscript is the best. NODE is the best", wordCounter);