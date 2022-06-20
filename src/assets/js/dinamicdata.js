class Box {
    constructor(text) {
        this.text = text
        this.checked = true
    }
}

class Filter {
    constructor(name, icon, boxes) {
        this.name = name
        this.icon = icon
        this.boxes = boxes
    }

    getBoxesChecked() {
        return this.boxes.filter(box => box.checked == true).length
    }
}

const filters = [
    [
        new Filter('filter1', 'icon', [new Box('box1'), new Box('box2'), new Box('box3')]),
        new Filter('filter2', 'icon', [new Box('box1'), new Box('box2'), new Box('box3')]),
        new Filter('filter3', 'icon', [new Box('box1'), new Box('box2'), new Box('box3')]),
        new Filter('filter4', 'icon', [new Box('box1'), new Box('box2'), new Box('box3')]),
        new Filter('filter5', 'icon', [new Box('box1'), new Box('box2'), new Box('box3')]),
        new Filter('filter6', 'icon', [new Box('box1'), new Box('box2'), new Box('box3')]),
    ], 
    [
        new Filter('filter7', 'icon', [new Box('box1'), new Box('box2'), new Box('box3')]),
        new Filter('filter8', 'icon', [new Box('box1'), new Box('box2'), new Box('box3')]),
        new Filter('filter9', 'icon', [new Box('box1'), new Box('box2'), new Box('box3')]),
        new Filter('filter10', 'icon', [new Box('box1'), new Box('box2'), new Box('box3')]),
        new Filter('filter11', 'icon', [new Box('box1'), new Box('box2'), new Box('box3')]),
        new Filter('filter12', 'icon', [new Box('box1'), new Box('box2'), new Box('box3')]),
    ], 
    [
        new Filter('filter13', 'icon', [new Box('box1'), new Box('box2'), new Box('box3')]),
        new Filter('filter14', 'icon', [new Box('box1'), new Box('box2'), new Box('box3')]),
        new Filter('filter15', 'icon', [new Box('box1'), new Box('box2'), new Box('box3')]),
        new Filter('filter16', 'icon', [new Box('box1'), new Box('box2'), new Box('box3')]),
        new Filter('filter17', 'icon', [new Box('box1'), new Box('box2'), new Box('box3')]),
        new Filter('filter18', 'icon', [new Box('box1'), new Box('box2'), new Box('box3')]),
    ], 
    [
        new Filter('filter19', 'icon', [new Box('box1'), new Box('box2'), new Box('box3')]),
        new Filter('filter20', 'icon', [new Box('box1'), new Box('box2'), new Box('box3')]),
        new Filter('filter21', 'icon', [new Box('box1'), new Box('box2'), new Box('box3')]),
        new Filter('filter22', 'icon', [new Box('box1'), new Box('box2'), new Box('box3')]),
        new Filter('filter23', 'icon', [new Box('box1'), new Box('box2'), new Box('box3')]),
        new Filter('filter24', 'icon', [new Box('box1'), new Box('box2'), new Box('box3')]),
    ], 
]

export { filters } 
