// Will display none the ads div by class name
function update_ui(){
    var elementList = document.querySelectorAll("li.standalone-ad-container");
    for(i=0; i<elementList.length; i++) {
        elementList[i].style.display =    'none';
    }
}
// Will do it on scrolling event
window.addEventListener('scroll', function (evt) {
    update_ui();
});
// Do it on load
update_ui();
