import axios from "axios";

const API_BASE = 'https://gomostaging.com/looklet-com/wp-json/wp/v2';

export const getPosts = () => axios.get(`${API_BASE}/posts`);
export const getPages = () => axios.get(`${API_BASE}/pages`);
export const getPostBySlug = (slug) => axios.get(`${API_BASE}/posts?slug=${slug}`);
