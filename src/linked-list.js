class LinkedList {
    constructor() {
        this.arr = [];
        this.length = 0;
    }


    append(data = 20) {
        this.arr.push(data);
        this.length++;
    }

    head() {
        return this.arr[0];
    }

    tail() {
        return this.arr[this.arr.length - 1];
    }

    at(index) {
        return this.arr[index];
    }

    insertAt(index, data) {
        return this.arr[index] = data;
    }

    isEmpty() {
        if (this.arr.length > 0)
            return false;
        return true;
    }

    clear() {
        this.arr.length = 1;
        this.arr[0] = null;
        this.length = 0;
    }

    deleteAt(index) {
        for (let i = index; i < this.arr.length; i++) {
            this.arr[i] = this.arr[i + 1];
        }
        this.arr.length--;
        this.length--;
    }

    reverse() {
        let sizeOfArr = this.arr.length - 1;
        for (let i = 0; i < (sizeOfArr / 2); i++) {
            let tempValue = this.arr[i];
            this.arr[i] = this.arr[sizeOfArr - i];
            this.arr[sizeOfArr - i] = tempValue;
        }
    }

    indexOf(data) {
        for (let i = 0; i <= this.arr.length; i++) {
            if (this.arr[i] === data)
                return i;
        }
        return -1;
    }
}

module.exports = LinkedList;