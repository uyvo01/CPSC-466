let cursor = document.querySelector('.ball');

window.addEventListener('mousemove', (e) => {
    let x = e.pageX;
    let y = e.pageY;

    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
});
function btn_click(item) {
  alert(item.id);
  const operators= "+-x/";
}