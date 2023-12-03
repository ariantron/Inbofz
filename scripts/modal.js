// Get the modal
function modal() {
    return document.getElementById("myModal");
}

// Get the button that opens the modal
function btn() {
    return document.getElementById("myBtn");
}

// Get the <span> element that closes the modal
function span() {
    return document.getElementsByClassName("close")[0];
}

// When the user clicks the button, open the modal
function showModal(){
    modal().style.display = "block";
    document.getElementById('content').style.position='unset';
    document.getElementById('footer').style.display='none';
    document.getElementById('logo').style.display='none';
}

// When the user clicks on <span> (x), close the modal
function closeModal() {
    modal().style.display = "none";
    document.getElementById('content').style.position='absolute';
    document.getElementById('footer').style.display='block';
    document.getElementById('logo').style.display='block';
}

// When the user clicks anywhere outside the modal, close it
window.onclick = function (event) {
    if (event.target === modal()) {
        closeModal();
    }
}