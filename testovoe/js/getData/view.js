export const elements = {
    container: document.querySelector('#container-posts')
}

export function renderPost(dataPosts) {

    dataPosts.forEach(post => {

        const markup = `
                    <div class="item">
                        <div class="item-wrapper" data-item="post">
                            <h1 class="title">${post.id}.  ${post.title}</h1>
                            <p class="text">${post.body}</p>
                            <button data-btn="comments" >Comments</button>
                        </div>
                        <div class="comments " id="container-comments" data-key="${post.id}"></div> 
                    </div>
                    
        `
        elements.container.insertAdjacentHTML('beforeend', markup)

    })
}

export function renderComments(dataComments) {

    const containerComments = elements.container.querySelectorAll("#container-comments");

    containerComments.forEach(item => {

        let count = 0;

        dataComments.forEach((coment) => {

            if (item.dataset.key == coment.postId) {

                count++;

                if (count <= 5) {
                    
                    const markup = `
                            <div class="comment-item">
                                <h1 class="name">${coment.name}</h1>
                                <p class="text-comment">${coment.body}</p>
                            </div>
                            `
                    item.insertAdjacentHTML('beforeend', markup)
                    
                }
            }
        })
    })

}