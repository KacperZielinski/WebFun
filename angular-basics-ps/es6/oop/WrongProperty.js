class WrongProperty {
    _id; // can't be 'id', because it will override setter/getter invocation, so we use '_id'

    constructor(id) {
        console.log('construct');
        this.id = id;   // this will call setter
    }

    static foo() {
        console.log("fuuu");
    }

    get id() {
        console.log('get');
        return this.id;
    }

    set id(value) {
        console.log('set');
        this._id = value;
    }
}

const bad = new WrongProperty(5);
bad.id = 7; // stackoverflow should go here :>
// console.log(bad.id);