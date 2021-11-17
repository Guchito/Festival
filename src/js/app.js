

document.addEventListener('DOMContentLoaded', function(){
    startApp()
})

function startApp(){
    fixedNav();
    createGallery();
    scrollNav();
}


//fixed nav

function fixedNav(){
    const bar = document.querySelector('.header');
    const about = document.querySelector('.about');
    const body = document.querySelector('body')

    window.addEventListener('scroll', function(){
        const scroll=about.getBoundingClientRect()
        if(scroll.top<0){
            bar.classList.add('fixed')
            body.classList.add('body-scroll')
        }else{
            bar.classList.remove('fixed')
            body.classList.remove('body-scroll')
        }
    })
}

//smooth scrolling

function scrollNav(){
    const links = document.querySelectorAll('.main-nav a')
    links.forEach( link => {
        link.addEventListener('click', function(e){
            e.preventDefault();
            const section = document.querySelector(e.target.attributes.href.value)
            section.scrollIntoView({ behavior: 'smooth'})
        })
    })
}

function createGallery(){
    const gallery = document.querySelector('.gallery-images');

    for(let i = 1; i<13; i++){
        const image = document.createElement('picture')
        image.innerHTML = `
            <source srcset="build/img/thumb/${i}.webp" type="image/webp">
            <img width="200" height="300" src= "build/img/thumb/${i}.jpg" alt="gallery image">
        `;
        image.onclick = function () {
            showImage(i);
        }

        gallery.appendChild(image)
    }
}

function showImage(id){
    const image = document.createElement('picture')
        image.innerHTML = `
            <source srcset="build/img/grande/${id}.webp" type="image/webp">
            <img width="200" height="300" src= "build/img/grande/${id}.jpg" alt="gallery image">
        `;
    // create overlay with image
    const overlay = document.createElement('DIV');
    overlay.appendChild(image);
    overlay.classList.add('overlay');
    overlay.onclick = function (){
        const body = document.querySelector('body');
        body.classList.remove('fix-body')
        overlay.remove();
    }

    //close button
    const closeImage = document.createElement('P')
    closeImage.textContent = 'X'
    closeImage.classList.add('btn-close')
    closeImage.onclick = function (){
        const body = document.querySelector('body');
        body.classList.remove('fix-body')
        overlay.remove();
    }

    overlay.appendChild(closeImage)


    //add to html
    const body = document.querySelector('body');
    body.appendChild(overlay)
    body.classList.add('fix-body')


 




}