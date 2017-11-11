var cou = parseInt(document.getElementById("counter").innerHTML) ;
cup = document.getElementsByClassName("fa fa-chevron-up")
cdown =document.getElementsByClassName("fa fa-chevron-down")
function ValUp (){
  cou++
    document.getElementById("counter").innerHTML = cou;
    cup[0].style.color='green'
    cdown[0].style.color='black'
}
function ValDown (){
  cou--
    document.getElementById("counter").innerHTML = cou;
    cup[0].style.color='black'
    cdown[0].style.color='red'
}