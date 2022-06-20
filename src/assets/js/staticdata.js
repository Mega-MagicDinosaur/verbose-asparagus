import { filters } from './dinamicdata.js'

class Button {
    constructor(name, icon, text, filters) {
        this.icon = icon
        this.name = name;
        this.text = text;
        this.filters = filters
    }
}

const buttons = [
    new Button('geographical', 'public', 'text1', filters[0]),
    new Button('trends', 'trending_up', 'text2', filters[1]),
    new Button('BOM', 'lan', 'text3', filters[2]),
    new Button('other?', 'battery_saver', 'text4', filters[3]),
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