/*
 * Copyright (c) 2016 Florian Klampfer
 * Licensed under MIT
 */
import drawerCore from '../core';

export default class Drawer extends drawerCore() {
  constructor(el, props) {
    super();
    this.initComponent(el, props);
  }

  // @override
  setupDOM(el) {
    if (!el) throw Error('No element provided');

    const scrim = document.createElement('div');
    scrim.classList.add('y-drawer-scrim');

    const content = document.createElement('div');
    content.classList.add('y-drawer-content');
    while (el.children.length > 0) {
      content.appendChild(el.children[0]);
    }

    el.appendChild(scrim);
    el.appendChild(content);

    return el;
  }
}