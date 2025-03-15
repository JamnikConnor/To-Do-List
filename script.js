ul = document.querySelector('ul')
,inputczcionka = document.querySelector('#select-czcionka')
,inputkolortekstu = document.querySelector('#kolortekstu')
,inputkolortla = document.querySelector('#tlolisty')
,main = document.querySelector('main')
,dodajbutton = document.getElementById('dodaj')
,inputwpis = document.getElementById('text-input')




/* zmiana czcionki */

function formatowanieczcionka(){
    czcionka = document.querySelector('#select-czcionka').value
    ul.style.fontFamily=czcionka
}

/* zmiana koloru tekstu */
function formatowaniekolortekstu(event){
    if (event.key === 'Enter' || event.type === 'blur' || event.type === 'click') {
    kolortekstu= document.querySelector('#kolortekstu').value
    if(inputkolortekstu.value == inputkolortla.value)
        alert('Kolor tekstu nie może być taki sam jak kolor tła')
    else
   ul.style.color = kolortekstu
}
}
/* zmiana koloru tła */
function formatowaniekolortla(event) {

    if (event.key === 'Enter' || event.type === 'blur' || event.type === 'click') {
        kolortla = document.querySelector('#tlolisty').value;

            if (inputkolortla.value == inputkolortekstu.value) 
                alert('Kolor tła nie może być taki sam jak kolor tekstu')
                
            else{
                main.style.backgroundColor = kolortla
                main.style.scrollbarColor = kolortla
            if (kolortla === 'black') 
                main.style.color = 'white'
            else 
                main.style.color = 'black'
        }
    }
}

function dodajwpis(event){
    if(event.key === 'Enter' || event.type === 'click'){
    wpis = inputwpis.value
    checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    li = document.createElement('li')
    span = document.createElement('span')
    span.innerText = wpis
    spanusun = document.createElement('span')
    spanusun.innerText = ' X'
    spanusun.classList.add('usun')
    span.classList.add('tekst')
    ul.appendChild(li)
    li.appendChild(checkbox)
    li.appendChild(span)
    li.appendChild(spanusun)
    }
  
}



inputczcionka.addEventListener("change",formatowanieczcionka)
/* zmiana koloru tekstu */
inputkolortekstu.addEventListener("keydown",formatowaniekolortekstu)
inputkolortekstu.addEventListener("blur",formatowaniekolortekstu)
dodajbutton.addEventListener("click",formatowaniekolortekstu)
/* zmiana koloru tła */
inputkolortla.addEventListener("keydown",formatowaniekolortla)
inputkolortla.addEventListener("blur",formatowaniekolortla)
inputkolortekstu.addEventListener("click",formatowaniekolortla)
/* dodawanie tekstu */
dodajbutton.addEventListener('click',dodajwpis)
inputwpis.addEventListener('keydown' , dodajwpis)

ul.addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('usun')) {
        li = event.target.closest('li')
        li.remove()
    }
})

ul.addEventListener('click', function(event) {
    if (event.target && event.target.type === 'checkbox') {
       if(event.target.checked){
        span = event.target.closest('li').querySelector('.tekst')
        span.style.textDecoration = "line-through"
       }
       else{
        span = event.target.closest('li').querySelector('.tekst')
        span.style.textDecoration = "none"
       }
    }
})