
import * as view from './view.js';
import Model from './model.js';

export default function getData() {

    window.onload = async function () {
        const model = new Model();
        await model.getPosts();
        await model.getComments();

        view.renderPost(model.data.posts);
        view.renderComments(model.data.comments);
    }

}

