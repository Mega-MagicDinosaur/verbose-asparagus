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
    new Button('button1', 'icon1', 'text1', filters[0]),
    new Button('button2', 'icon2', 'text2', filters[1]),
    new Button('button3', 'icon3', 'text3', filters[2]),
    new Button('button4', 'icon4', 'text4', filters[3]),
]

const nav_icons = [
    {icon: 'icon1', url: '#'},
    {icon: 'icon2', url: '#'},
    {icon: 'icon3', url: '#'},
    {icon: 'icon4', url: '#'},
]

export { buttons }
export { nav_icons }