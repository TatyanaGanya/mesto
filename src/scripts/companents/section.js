export default class Section {
    constructor({items, renderer}, containerSelector) {
        this._container = document.querySelector(containerSelector);
        this._items = items;
        this._renderer = renderer;
    }

    addCardFromArray(dataCard) {
        dataCard.forEach(element => {
            this.addItemAppend(element)
        });
    }

    addItemPrepend(element) {
        this._container.prepend(this._renderer(element));
    }
    addItemAppend(element) {
        this._container.append(this._renderer(element));
    }
}
