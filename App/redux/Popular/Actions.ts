import {
  POPULAR_ADD,
  POPULAR_FAILED,
  POPULAR_REQUEST,
  POPULAR_SUCCESS,
} from './Constants';

/**
 * @function popularRequest
 * @param {*} payload
 * @description Return type for popular request to reducer
 * @returns state
 */
export const popularRequest = (payload: any) => ({
  type: POPULAR_REQUEST,
  payload,
});

/**
 * @function popularRequest
 * @param {*} payload
 * @description Return type for popular request to reducer
 * @returns state
 */
export const popularHealthyAdd = (payload: any) => ({
  type: POPULAR_ADD,
  payload,
});

/**
 * @function popularSuccess
 * @param {*} payload
 * @description Return type for popular success to reducer
 * @returns state
 */
export const popularSuccess = (payload: any) => ({
  type: POPULAR_SUCCESS,
  payload,
});

/**
 * @function popularError
 * @param {*} payload
 * @description Return type for popular failed to reducer
 * @returns state
 */
export const popularError = (payload: any) => ({
  type: POPULAR_FAILED,
  payload,
});
