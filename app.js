const navSlide = () => {
    const burguer = document.querySelector('.burguer');
    const nav = document.querySelector('.nav-links');

    burguer.addEventListener('click',() => {
        nav.classList.toggle('active');
    });
}
navSlide();

function createGallery (){
    const gallery=document.querySelector('.gallery-img');
    //Repeat 4 times
    for(let i=1; i<=6; i++){
        const img= document.createElement('picture')
        //Add source image and properties to mini picture
        img.innerHTML=`
        <img width="185" height="100" src="./img/galeria${i}.jpg" alt=""></img>`;
       
        //When img is clicked
        img.addEventListener('click', () =>{
            showImage(i);
        });

        //Adding each picture to ul
        gallery.appendChild(img);

    }
} 
function showImage(id){
    const img= document.createElement('picture')
    //Add source image and properties to big picture
    img.innerHTML=`
    <img width="500" height="500" src="./img/galeria${id}.jpg" alt=""></img>`;

    //Create overlay with image clicked
    const overlay = document.createElement('DIV');
    overlay.appendChild(img);
    overlay.classList.add('overlay');
    
    //Remove overlay when overlay is clicked
    overlay.addEventListener('click', () => {
        overlay.remove();
        //Allow scroll while image is'nt viewing
        const body = document.querySelector('body');
        body.classList.remove('fixed');
    });

    //Overlay close button
    const closeOverlay = document.createElement('i');
    closeOverlay.classList.add('fas');
    closeOverlay.classList.add('fa-times-circle');
    closeOverlay.style.backgroundColor='white';
    closeOverlay.style.cursor='pointer';
    overlay.appendChild(closeOverlay);

    //Remove overlay when closeOverlay is clicked
    closeOverlay.addEventListener('click', () =>{
        overlay.remove();
    })

    //Add overlay to HTML
    const body= document.querySelector('body');
    body.appendChild(overlay)

    //Don´t allow scroll wile viewing
    body.classList.add('fixed');
}
createGallery();
/*
function navFixes(){
    const nav = document.querySelector('.nav');
    const populares = document.querySelector('.products');

    window.addEventListener('scroll', () =>{
        //When populares section top touch window top
        if(populares.getBoundingClientRect().top<0){
            nav.classList.add('nav-fixed');
            nav.classList.add('nav-opacity');
        }else{
            nav.classList.remove('nav-fixed');
            nav.classList.remove('nav-opacity');
        };
    });
}
navFixes();
*/
function alerta(){
    const buyButtons = document.querySelectorAll('.buy');
    buyButtons.forEach(buyButton => {
        buyButton.addEventListener('click', () => {
            Swal.fire({
                title:'Lo sentimos',
                text:'Esta es una página informativa. Ninguno de los productos mostrados esta en venta',
                icon:'warning',
                iconColor:'#000'
            });
        })
    })
}
alerta()
