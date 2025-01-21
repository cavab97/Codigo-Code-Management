import {UPCOMING_REQUEST, UPCOMING_SUCCESS, UPCOMING_FAILED} from './Constants';
/**
 * @function UPCOMINGRequest
 * @param {*} payload
 * @description Return type for UPCOMING request to reducer
 * @returns state
 */
export const upcomingRequest = (payload: any) => ({
  type: UPCOMING_REQUEST,
  payload,
});

/**
 * @function UpcomingSuccess
 * @param {*} payload
 * @description Return type for UPCOMING success to reducer
 * @returns state
 */
export const upcomingSuccess = (payload: any) => ({
  type: UPCOMING_SUCCESS,
  payload,
});

/**
 * @function upcomingError
 * @param {*} payload
 * @description Return type for UPCOMING failed to reducer
 * @returns state
 */
export const upcomingError = (payload: any) => ({
  type: UPCOMING_FAILED,
  payload,
});
