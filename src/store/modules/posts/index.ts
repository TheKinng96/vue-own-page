import { PostState } from '@/typings/posts';
import { actions } from './actions';
import { mutations } from './mutations';
import { getters } from './getters';

export const state: PostState = {
  post: '',
};

export const post = {
  state,
  namespaced: true,
  getters,
  actions,
  mutations,
};
