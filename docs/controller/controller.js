import {post} from "../models/post.js";

export function controller(form, event) {
    const URL = "http://localhost:3000/users";

    const data = form !== null ? Object.fromEntries(new FormData(form)) : null;
    console.log(data)
    post(data);

}