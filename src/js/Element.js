import Popover from './Popover';

export default class Element {
  constructor(element) {
    this.element = element;
    this.popover = new Popover(element);
  }

  init() {
    this.element.addEventListener('click', this.onClick.bind(this));
    this.element.addEventListener('blur', this.onBlur.bind(this));
  }

  onClick(e) {
    e.preventDefault();
    const currentPopover = document.querySelector('.popover');

    if (currentPopover && currentPopover.querySelector('.popover-title').textContent === this.element.dataset.popoverTitle) {
      this.popover.hidePopover();
    } else {
      this.popover.showPopover();
    }
  }

  onBlur() {
    this.popover.hidePopover();
  }
}
