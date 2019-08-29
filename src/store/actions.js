import {
  CHANGE_INDEX,
  TOGGLE_AGREE,
  GET_TAB,
  CHANGE_TAB,
  SWITCH_SHOW,
  SWITCH_RECMD,
  SWITCH_USERACTIVE,
  SWITCH_USERINFO,
  SWITCH_ARTICLESHARE,
  COMMENT_NUM
} from "./actionTypes";
const changeIndex = index => {
  return {
    type: CHANGE_INDEX,
    payload: index
  };
};
const toggleAgree = () => {
  return {
    type: TOGGLE_AGREE
  };
};
const getTab = tab => {
  return {
    type: GET_TAB,
    payload: tab
  };
};
const changeTab = tab => {
  return {
    type: CHANGE_TAB,
    payload: tab
  };
};
const switchShow = () => {
  return {
    type: SWITCH_SHOW
  };
};
const switchRecmd = () => {
  return {
    type: SWITCH_RECMD
  };
};
const switchUserActive = () => {
  return {
    type: SWITCH_USERACTIVE
  };
};
const switchUserInfo = payload => {
  return {
    type: SWITCH_USERINFO,
    payload
  };
};
const switchArticleShare = payload => {
  return {
    type: SWITCH_ARTICLESHARE,
    payload
  };
};
const commentNum = payload => {
  return {
    type: COMMENT_NUM,
    payload
  };
};
export {
  changeIndex,
  toggleAgree,
  getTab,
  changeTab,
  switchShow,
  switchRecmd,
  switchUserActive,
  switchUserInfo,
  switchArticleShare,
  commentNum
};
