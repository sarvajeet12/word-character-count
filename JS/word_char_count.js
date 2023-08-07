let textArea = document.getElementById("text-area");

textArea.addEventListener("input", function () {
    let text = this.value;

    // Characters
    let char = text.length;
    document.getElementById("char").innerHTML = char;

    //Words
    text = text.trim();

    let word = text.split(" ");

    let cleanList = word.filter(function (elm) {
        return elm != "";
    })
    document.getElementById("word").innerHTML = cleanList.length;



});