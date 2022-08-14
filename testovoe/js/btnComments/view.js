export const elements = {
    container: document.getElementById('container-posts')
}

export function toggleComments(target) {
    if (target.dataset.btn == "comments") {
        const commentsContainer = target.closest('[data-item="post"]').nextElementSibling;
        commentsContainer.classList.toggle('open');
    } 
}