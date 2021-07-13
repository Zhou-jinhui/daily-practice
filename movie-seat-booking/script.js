// const container = document.querySelector('.container');
// const seats = document.querySelectorAll('.row .seat:not(.occupied)');
// const count = document.getElementById('count');
// const total = document.getElementById('total');
// const movieSelect = document.getElementById('movie');

// const ticketPrice = +movieSelect.value;

function baz() {
  console.log('baz');
  bar();
}

function bar() {
  console.log('bar');
  console.log(this);
  foo();
}

function foo() {
  console.log(this);
  console.log('foo');
}

baz();
