const menu = document.getElementById("navList");
const menuButton = document.getElementById("menuButton");
const gallery = document.querySelector('.gallery');
const dialog = document.getElementById("dialog");
const dialogImg = document.getElementById('dialogImg');
const closeButton = document.getElementById("close-viewer");
menuButton.addEventListener('click', () => {
    hideElement(menu);
});

function hideElement(el) {
    el.classList.toggle('hide');
}
function handleResize(){

    if(window.innerWidth >= 1000){
        hideElement(menu);
        
    }
}
function menuSetClosed() {
    
    if(window.innerWidth < 1000){
        menu.classList.add('hide');
    }
}

function openDialog(img) {
    dialog.show();
    let splitSrc = img.src.split('-');
    dialogImg.src = splitSrc[0] + '-full.jpeg';
    dialogImg.alt = img.alt;

}

window.addEventListener('resize', handleResize);
window.addEventListener('resize', menuSetClosed);

window.addEventListener('load', handleResize);

gallery.addEventListener('click', (event) => {
    let img = event.target.closest('img');
    openDialog(img);
});

closeButton.addEventListener('click', () => {
    dialog.close();
})

dialog.addEventListener('click', (event) => {
  if (event.target !== dialogImg) {
    dialog.close();
  }
})