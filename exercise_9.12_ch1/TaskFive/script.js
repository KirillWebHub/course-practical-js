let img = document.getElementById('adaptive-img');
let currentCount = 0;

img.addEventListener('mouseenter', function(){
    img.style.transform = 'scale(1.8)'
    
});

img.addEventListener('mouseleave', function(e){
    currentCount++;
    if(currentCount >= 3){
        e.preventDefault()
    } else(
        img.style.transform = 'scale(1)'
    )
});