import {createPost} from './data.js';

const POSTS_COUNT = 25;

const posts = new Array(POSTS_COUNT).fill('').map((item, index) => createPost(index + 1));

