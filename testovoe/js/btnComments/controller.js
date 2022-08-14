import * as view from './view.js'


export default function btnComments() {

    view.elements.container.addEventListener('click', function (e) {
        view.toggleComments(e.target)
    })

}