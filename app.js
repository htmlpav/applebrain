
let c = 1;




//let b1 = document.getElementById('b').value;
let button = document.querySelector('#c');
let button1 = document.querySelector('#c1');


button.onclick = function() {
    console.log('Здарова чел');
     alert('1 Множитель : ' + Number(document.getElementById("a").value) +"\n" +'2 Множитель : '+Number(document.getElementById('b').value)+"\n"+'Произведение = '+Number(document.getElementById("a").value)*Number(document.getElementById('b').value));
}
button1.onclick = function() {
    console.log('Здарова чел');
     alert('Делимое : ' + Number(document.getElementById("a1").value) +"\n" +'Делитель : '+Number(document.getElementById('b1').value)+"\n"+'Частное = '+Number(document.getElementById("a1").value)/Number(document.getElementById('b1').value));
    if (document.getElementById('b1').value>10){
        alert('Почему так много?');
    }
}
