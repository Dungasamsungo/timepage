function updatePage(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('image')
var date = new Date()
var hora = 5//date.getHours()
msg.innerHTML = `The Time is <strong>${hora} O'clock</strong>`
if(hora >= 0 && hora < 12){
    img.src = 'morning.png'
    document.body.style.background = '#dfb05d'

}

else if (hora >=12 && hora < 18){
    img.src = 'afternoon.png'
    document.body.style.background = '#767454'
}
else{
    img.src = 'night.png'
    document.body.style.background = '#37302a'
}
}