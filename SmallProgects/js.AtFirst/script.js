document.querySelector('button').onclick = myClick;

function myClick(){
  let a = document.querySelector('.custom-input').value;
  const out = document.querySelector('.out');
const div = document.createElement('div');
div.textContent = a;
  out.prepend(div);
}
