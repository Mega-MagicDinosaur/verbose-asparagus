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
        new Filter('filter1', 'vpn_key',            [new Box('box1'), new Box('box2'), new Box('box3')]),
        new Filter('filter2', 'travel_explore',     [new Box('box1'), new Box('box2'), new Box('box3')]),
        new Filter('filter3', 'currency_exchange',  [new Box('box1'), new Box('box2'), new Box('box3')]),
        new Filter('filter4', 'interests',          [new Box('box1'), new Box('box2'), new Box('box3')]),
        new Filter('filter5', 'hub',                [new Box('box1'), new Box('box2'), new Box('box3')]),
        new Filter('filter6', 'group',              [new Box('box1'), new Box('box2'), new Box('box3')]),
    ], 
    [
        new Filter('filter7', 'vpn_key',            [new Box('box1'), new Box('box2'), new Box('box3')]),
        new Filter('filter8', 'travel_explore',     [new Box('box1'), new Box('box2'), new Box('box3')]),
        new Filter('filter9', 'currency_exchange',  [new Box('box1'), new Box('box2'), new Box('box3')]),
        new Filter('filter10', 'interests',         [new Box('box1'), new Box('box2'), new Box('box3')]),
        new Filter('filter11', 'hub',               [new Box('box1'), new Box('box2'), new Box('box3')]),
        new Filter('filter12', 'group',             [new Box('box1'), new Box('box2'), new Box('box3')]),
    ], 
    [
        new Filter('filter13', 'vpn_key',           [new Box('box1'), new Box('box2'), new Box('box3')]),
        new Filter('filter14', 'travel_explore',    [new Box('box1'), new Box('box2'), new Box('box3')]),
        new Filter('filter15', 'currency_exchange', [new Box('box1'), new Box('box2'), new Box('box3')]),
        new Filter('filter16', 'interests',         [new Box('box1'), new Box('box2'), new Box('box3')]),
        new Filter('filter17', 'hub',               [new Box('box1'), new Box('box2'), new Box('box3')]),
        new Filter('filter18', 'group',             [new Box('box1'), new Box('box2'), new Box('box3')]),
    ], 
    [
        new Filter('filter19', 'vpn_key',           [new Box('box1'), new Box('box2'), new Box('box3')]),
        new Filter('filter20', 'travel_explore',    [new Box('box1'), new Box('box2'), new Box('box3')]),
        new Filter('filter21', 'currency_exchange', [new Box('box1'), new Box('box2'), new Box('box3')]),
        new Filter('filter22', 'interests',         [new Box('box1'), new Box('box2'), new Box('box3')]),
        new Filter('filter23', 'hub',               [new Box('box1'), new Box('box2'), new Box('box3')]),
        new Filter('filter24', 'group',             [new Box('box1'), new Box('box2'), new Box('box3')]),
    ], 
]

export { filters } 
