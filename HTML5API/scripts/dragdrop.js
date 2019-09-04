function allowDrop(event) {
    event.preventDefault();

}

function drag(event) {
    event.dataTransfer.setData('img', event.target.id);
}

function drop(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData('img');
    event.target.appendChild(document.getElementById(data));
    document.getElementById('after').innerHTML = "Something got dropped into the box.";
}