class Section {
  constructor({ items, renderer, containerSelector }) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    this._items.forEach((item) => {
      const Items = this._renderer(item);
      this.addItems(Items);
    });
  }

  addItems(element) {
    this._container.append(element);
  }
}

export default Section;
