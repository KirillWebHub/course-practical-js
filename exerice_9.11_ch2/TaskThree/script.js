let list = document.getElementById('list');
let el = document.getElementById('currentEl');

list.addEventListener('click', function(){
    if(event.target.tagName === 'LI'){
        el.textContent = event.target.textContent;
    }
});