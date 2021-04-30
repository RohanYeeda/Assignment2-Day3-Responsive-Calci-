function val(id){
    document.getElementById('result').value+=id;
}

function cal(){
    var a=document.getElementById('result').value;
    var y=eval(a)
    document.getElementById('result').value=y;
}
