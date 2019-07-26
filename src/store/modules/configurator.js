/* eslint no-shadow: 0 */
import {
  SINGLE_WING_TYPE,
  MAX_DOOR_WIDTH,
  MAX_DOOR_HEIGHT,
  MAX_DOOR_BEAMS,
  MAX_DOOR_POSTS,
  DOOR_COLORS
} from '../../constants';

const state = {
  door_type: SINGLE_WING_TYPE,
  door_width: 120,
  door_height: 280,
  door_beams: 4,
  door_posts: 3,
  door_color: DOOR_COLORS.BLACK.hex
};

// getters
const getters = {
  doorType: state => state.door_type,
  doorWidth: state => state.door_width,
  doorHeight: state => state.door_height,
  doorBeams: state => Number(state.door_beams),
  doorPosts: state => Number(state.door_posts),
  doorColor: state => state.door_color
};

// actions
const actions = {
  setDoorType({ commit }, type) {
    commit('setDoorType', type);
  },
  setDoorWidth({ commit }, width) {
    if (width > MAX_DOOR_WIDTH) return;
    commit('setDoorWidth', width);
  },
  setDoorHeight({ commit }, height) {
    if (height > MAX_DOOR_HEIGHT) return;
    commit('setDoorHeight', height);
  },
  setDoorBeams({ commit }, beamsCount) {
    if (beamsCount > MAX_DOOR_BEAMS) return;
    commit('setDoorBeams', beamsCount);
  },
  setDoorPosts({ commit }, postsCount) {
    if (postsCount > MAX_DOOR_POSTS) return;
    commit('setDoorPosts', postsCount);
  },
  setDoorColor({ commit }, colorHex) {
    commit('setDoorColor', colorHex);
  }
};

// mutations
const mutations = {
  setDoorType(state, type) {
    state.door_type = type;
  },
  setDoorWidth(state, width) {
    state.door_width = width;
  },
  setDoorHeight(state, height) {
    state.door_height = height;
  },
  setDoorBeams(state, beamsCount) {
    state.door_beams = beamsCount;
  },
  setDoorPosts(state, postsCount) {
    state.door_posts = postsCount;
  },
  setDoorColor(state, colorHex) {
    state.door_color = colorHex;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
