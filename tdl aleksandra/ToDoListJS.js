var nr = 0;
var doneTask = 0;
function counter() {}
console.log(doneTask);

var myNodelist = document.getElementsByTagName('LI');
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement('SPAN');
  var txt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

//slett greie

var close = document.getElementsByClassName('close');
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = 'none';
  };
}

//check symbol poppe opp

var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
  console.log(document.getElementsByTagName('li')[0]);
  if (document.getElementsByTagName('li')[0].classList.contains('checked')) {
    doneTask = doneTask + 1;
    console.log(doneTask);
  } else {
    doneTasks = doneTask - 1;
  }
});

//legg t en ny ting

function newElement() {
  var li = document.createElement('li');
  var inputValue = document.getElementById('myInput').value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert('You must write something!');
  } else {
    document.getElementById('myUL').appendChild(li);
  }
  document.getElementById('myInput').value = '';

  var span = document.createElement('SPAN');
  var txt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = 'none';
    };
  }
  nr = myNodelist.length;
  document.getElementById('counter').innerHTML = '0 / ' + nr;
}
