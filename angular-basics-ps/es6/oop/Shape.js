class Shape {
    constructor(id, x, y) {
        this._id = id;
        this._x = x;
        this._y = y;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get x() {
        return this._x;
    }

    set x(value) {
        this._x = value;
    }

    get y() {
        return this._y;
    }

    set y(value) {
        this._y = value;
    }
}