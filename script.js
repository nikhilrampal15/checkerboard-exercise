for(var i=0;i<81;i++){
var black = document.createElement('div');
black.style.width='11.1%';
black.style.float='left';
black.style.paddingBottom='11.1%';
    if(i%2) {
        black.style.backgroundColor = 'black';
        document.body.appendChild(black)
    }
    else{
        black.style.backgroundColor='red';
        document.body.appendChild(black)
    }
}
for(var i=0;i<81;i++){
var div = document.createElement('div');
div.style.width='11.1%';
div.style.float='left';
div.style.paddingBottom='11.1%';
    div.style.backgroundColor =
        '#'+'0123456789abcdef'.split('').map(function(v,i,a){
            return i>5 ? null : a[Math.floor(Math.random()*16)] }).join('');

    document.body.appendChild(div)
}
for(var i=0;i<81;i++){
    var hue = (255 / 81) * i;
    var div = document.createElement('div');
    div.style.width='11.1%';
    div.style.float='left';
    div.style.paddingBottom='11.1%';
    
    if(i%2) {
        div.style.backgroundColor = 'rgba(0, 0, ' + Math.floor(hue) + ', 1)';
    }
    else{
        div.style.backgroundColor = 'rgba(0, ' + Math.floor(hue) + ',0 , 1)';
    }
    document.body.appendChild(div);
}
    document.body.appendChild(div);

