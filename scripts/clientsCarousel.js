var clientRows = document.querySelectorAll('.clients__row');
var rowCounter = 0;

(function () {
    setInterval(fadeClients, 4500)
}());

function fadeClients() {
  fadeOut();
  incrementRowCounter();
  fadeIn();
}

function fadeOut() {
  clientRows[rowCounter].classList.add('clients__row-fade-out');
  clientRows[rowCounter].classList.remove('clients__row-fade-in');
}

function incrementRowCounter() {
  rowCounter = (rowCounter + 1) % clientRows.length
}

function fadeIn() {
  clientRows[rowCounter].classList.add('clients__row-fade-in');
  clientRows[rowCounter].classList.remove('clients__row-fade-out');
  clientRows[rowCounter].classList.remove('clients__row-inactive');
}