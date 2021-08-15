import { GetterTree } from 'vuex';
import { PostState } from '@/typings/posts';

export const getters: GetterTree<PostState> = {
  getAllPosts(state) {
    return state.post;
  }
};