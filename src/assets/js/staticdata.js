import { filters } from './dinamicdata.js'

class Button {
    constructor(name, icon, text, filters, id, is_first) {
        this.icon = icon
        this.name = name;
        this.text = text;
        this.filters = filters
        this.id = id
        this.is_first = is_first
    }
}


const buttons = [
    new Button('geographical', 'public', 'text1',   filters[0], 0, true),
    new Button('trends', 'trending_up', 'text2',    filters[1], 1, false),
    new Button('BOM', 'lan', 'text3',               filters[2], 2, false),
    new Button('other?', 'battery_saver', 'text4',  filters[3], 3, false),
]

const nav_icons = [
    {icon: 'radar', url: '#'},
    {icon: 'list', url: '#'},
    {icon: 'save', url: '#'},
    {icon: 'feed', url: '#'},
    {icon: 'newspaper', url: '#'},
]

export { buttons }
export { nav_icons }