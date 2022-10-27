import Element from './Element';

document.querySelectorAll('.button').forEach((el) => {
  const element = new Element(el);
  element.init();
});
