import moment from 'moment';


/**
 * @description 检查是否登录
 * @returns 1正常; 2过期; 3未登录
 */
export const checkLogin = () => {
  const { token, expires_at } = sessionStorage;
  if (token && moment().isBefore(expires_at)) {
    return 1;
  } else if (token && moment().isAfter(expires_at)) {
    return 2;
  } else {
    return 3;
  }
};