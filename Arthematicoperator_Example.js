function add(){
    var aval = parseInt(document.getElementById("val1").value);
    var bval = parseInt(document.getElementById("val2").value);
    var c = aval + bval;
    document.getElementById("lbl1").innerText="Addition value : "+ c;
}

function sub(){
    var aval = parseInt(document.getElementById("val1").value);
    var bval = parseInt(document.getElementById("val2").value);
    var c = aval-bval;
    document.getElementById("lbl1").innerText="Subraction value : "+c;
}

function mul(){
    var aval = parseInt(document.getElementById("val1").value);
    var bval = parseInt(document.getElementById("val2").value);   
    var c = aval*bval;
    document.getElementById("lbl1").innerText="multiplication value : "+c;
}

function div(){
    var aval = parseInt(document.getElementById("val1").value);
    var bval = parseInt(document.getElementById("val2").value);
    var c= aval/bval;
    document.getElementById("lbl1").innerText="divission value : "+c;
}