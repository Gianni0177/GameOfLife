function tabellagen(){
    numc = document.getElementById("num").value;

    document.write('<button onclick="inizia()">Inizia</button>');

    /*x = */document.write('<table style = "border-collapse:collapse"  cellpadding=6>');
    for (i=1; i<=numc; i++) {
        document.write('<tr>')
        
        for (j=1; j<=numc; j++) {
            document.write('<td style="border:1px solid black" id="r' + i + 'c' + j +'"onclick="life(id)">');
            document.write('a<sub>' + i + ',' + j +'</sub>');
            document.write('</td>');
            r=document.createTextNode
        }
        document.write('</tr>');
    }
    document.write('</table>');
    document.close();

    //document.getElementById("tabellaa").innerHTML = x;
}
function life(id){
    x = document.getElementById(id);

    if(x.style.backgroundColor != 'yellow'){
        x.style.backgroundColor = 'yellow';
    }else x.style.backgroundColor = 'white'
}
function inizia(){
    if(
    document.getElementById('r'+r+'c'+c)&&
    document.getElementById('r'+(r+1)+'c'+(c) == style.backgroundColor=='yellow' )||
    document.getElementById('r'+r+'c'+c)&&
    document.getElementById('r'+(r+1)+'c'+(c+1) == style.backgroundColor=='yellow')
    ){

    }
}
