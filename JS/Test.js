function load() {
    var inp1 = document.getElementById("inp1").value;
    var inp2 = document.getElementById("inp2").value;
}
function multiply(inp1,inp2) {
    this.inp11 = inp1;
    this.inp22 = inp2;
    this.inpI = parseInt(inp11);
    this.inpII = parseInt(inp22);
    this.multiply = (inpI * inpII);
    document.getElementById("out1").innerHTML = (this.multiply + "<br>");
}

// var inp1 = document.getElementById("inp1").value;
// var inp2 = document.getElementById("inp2").value;
// var inp11 = parseInt(inp1);
// var inp22 = parseInt(inp2);