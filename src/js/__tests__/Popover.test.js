import Popover from '../Popover';

document.body.innerHTML = `
<div class="container">
  <button class="button" data-popover-title="Влево" data-popover-content="Кнопка, которая перемещает объект влево">Влево</button>
  <button class="button" data-popover-title="Убрать" data-popover-content="Кнопка, которая удаляет объект">Убрать</button>
  <button class="button" data-popover-title="Вправо" data-popover-content="Кнопка, которая перемещает объект вправо">Вправо</button>
</div>
`;

describe('Popover class', () => {
  const container = document.querySelector('.container');
  const popover = new Popover(container.children[0]);

  afterEach(() => {
    popover.hidePopover();
  });

  test('should create popover', () => {
    expect(popover.html.children.length).toBe(2);
  });

  test('should show popover', () => {
    popover.showPopover();
    const result = document.querySelector('.popover');
    expect(result).toBeTruthy();
  });

  test('should hide popover', () => {
    popover.showPopover();
    popover.hidePopover();
    const result = document.querySelector('.popover');
    expect(result).toBeFalsy();
  });
});
