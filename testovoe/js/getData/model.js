export default class Data {
    constructor() {
        this.data = {
            posts: [],
            comments: []
        }
    }

    async getPosts() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            if (response.ok) {
                const posts = await response.json();
                posts.forEach((post, index) => {
                    if (index < 9) {
                        this.data.posts.push(post);
                    }
                })

            }
        } catch (error) {
            alert(error);
            throw error;
        }

    }

    async getComments() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/comments');
            if (response.ok) {
                const comments = await response.json();
                this.data.comments = await comments;
            }
        } catch (error) {
            alert(error);
            throw error;
        }

    }

}