import {Menu} from './core/menu'
import { CustomMessageModule } from './modules/custom.message.module';
import { TestModule } from './modules/test.module';

export default class ContextMenu extends Menu {
  #moduleList

  constructor(selector) {
    super(selector);
    this.#moduleList = [new TestModule('testModul_1', 'Test Module 1'),
    new CustomMessageModule('custom_message', 'Кастомное сообщение')];
  }

  renderContextMenu() {
    window.addEventListener("mousedown", this.open.bind(this));
    this.el.addEventListener('click', this.clickOnMenuItem.bind(this));

    document.addEventListener("contextmenu", function(e) {
      e.preventDefault()
    });
  }

  open(event) {
    if(event.button === 2) {
      this.el.classList.add('open');
      this.el.style.top = event.clientY + 'px';
      this.el.style.left = event.clientX + 'px';
      if(!this.#isModuleListEmpty()) {
        for (const module of this.#moduleList) {
        this.add(module);
        }
      }
    }
  }

  close() {
    this.el.classList.remove('open');
  }

  add(module) {
    this.el.innerHTML += module?.toHTML();
  }

  clickOnMenuItem(event) {
    const { target } = event;
    const closestTarget = target.closest(".menu-item");
    if (closestTarget) {
      const itemType = closestTarget.getAttribute('data-type');
      const module = this.#findElemInModuleList(itemType);
      module.trigger();
    }
    this.close();
  }

  #isModuleListEmpty() {
    return this.el.querySelectorAll('li').length > 0;
  }

  #findElemInModuleList(type) {
    return this.#moduleList.find(module => module.type === type);
  }

}