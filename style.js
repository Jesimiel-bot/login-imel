//Get modal Element
var modal = document.getElementById('demo-live');
//Get close Button
var closeBtn = document.getElementsByClassName('close-button')[0];

//Listen for close click
closeBtn.addEventListener('click', closeModal)

//Listen for close Modal
function closeModal() {
 modal.style.display = 'none';
}