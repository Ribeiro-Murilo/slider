const previousEl = document.getElementById('previous');
const nextEl = document.getElementById('next');
const fotoEl = Array.from(document.getElementsByClassName('foto'));
const fotoSEl = document.getElementsByClassName('fotos');
const stylefoto = document.querySelectorAll(".foto");
var index = 0;
console.log(stylefoto);

previousEl.addEventListener('click', onPreviousClick)
nextEl.addEventListener('click', onNextClick)


//funcionando parte 1 parado
function onNextClick () {
    if(index<fotoEl.length){
        index= index+1;
    }else{
        index=0
    }
    console.log(index);


}
//funcionando parte 1 trabalhando parte 2
function onPreviousClick(foto) {
    if(index<=0){
        index=fotoEl.length +1 
    }
    if(index>= 0 ){
        index= index+1*-1;
    }
    console.log(index);
    hideElemants();
}

function hideElemants() {
    console.log('alguma coisa');
    for(var i=0;fotoEl.length; i++){
        fotos.style.display = none;

    }
}



//nao esta sendo usado, so para tirar ideia
function changeSlide(){

    //[i] oq é??
    for(let i=0; fotoEl.length;i++){
      fotoEl[i].classList.display = none;
    }
    // oq é [index]
    fotoEl[index].styles.display="block";




}