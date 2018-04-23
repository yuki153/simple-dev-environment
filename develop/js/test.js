export let showSlideMenu = () => {
    const SLIDE_MENU_BUTTON = document.getElementById('js-slideMenu__button');
    const SLIDE_MENU = document.getElementById('js-slideMenu');
    SLIDE_MENU_BUTTON.addEventListener('click', (event) => {
      console.log(event.currentTarget,'clickEvent currentTarget');
      SLIDE_MENU.style.transform = "translateX(-300px)"
    })
}