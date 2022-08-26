document.querySelector('.collapsible__action--hidden').style.display = 'none';

document.querySelector('.collapsible__button').onclick = function() {
  let but = document.querySelector('.collapsible__action--hidden');
  let but2 = document.querySelector('.collapsible__action--visible');
  but.style.display === 'none' ? but.style.display = '' : but.style.display = 'none';
  but2.style.display === '' ? but2.style.display = 'none' : but2.style.display = '';
  
  let el = document.querySelector('.collapsible__content');
  el.style.display === 'none' ? el.style.display = '' : el.style.display = 'none';

}



