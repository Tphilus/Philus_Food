// const burger = document.querySelector("#burger"); 
// const menu = document.querySelector("#menu");

// burger.addEventListener('click', () => {
//     if(menu.classList.contains('hidden')) {
//         menu.classList.remove('hidden');
//     } else {
//         menu.classList.add('hidden');
//     }
// }); 

function Menu(e) {
    let list = document.querySelector('ul')
     e.name === 'menu' ? (e.name = "close", list.classList.add('top-[80px]'), list.classList.add('opacity-100') ) : (e.name = "menu", list.classList.remove('top-[80]'), list.classList.remove ('opacity-100') ); 
};