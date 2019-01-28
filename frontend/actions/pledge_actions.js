import * as ApiUtil from '../util/pledge_api_util';

export const RECEIVE_PLEDGES = 'RECEIVE_PLEDGES';
export const RECEIVE_PLEDGE = 'RECEIVE_PLEDGE';
export const REMOVE_PLEDGE = 'REMOVE_PLEDGE';
export const RECEIVE_PLEDGE_ERROR = 'RECEIVE_PLEDGE_ERROR';

export const receivePledges = (payload) => {
    return {
      type: RECEIVE_PLEDGES,
      pledges: payload.pledges,
      users: payload.supporters,
      projects: payload.projects
    }
  }
  
  export const receivePledge = (pledge) => {
    return {
      type: RECEIVE_PLEDGE,
      pledge: pledge,
    }
  }
  
  export const removePledge = (id) => {
    return {
      type: REMOVE_PLEDGE,
      id: id
    }
  }

  export const receivePledgeErrors = (errorArr) => {
    return {
      type: RECEIVE_PLEDGE_ERRORS,
      errors: errorArr
    }
  }

  export const fetchPledges = () => {
    return dispatch => {
      return ApiUtil.fetchPledges().then((payload) => {
        return dispatch(receivePledges(payload));
        return payload;
      }).fail((err) => {
        return dispatch(receivePledgeErrors(err.responseJSON));
      })
    }
  }
  
  export const fetchPledge = (id) => {
    return dispatch => {
      return ApiUtil.fetchPledge(id).then((pledge) => {
        return dispatch(receivePledge(pledge));
        return pledge;
      }).fail((err) => {
        return dispatch(receivePledgeErrors(err.responseJSON));
      })
    }
  }
  
  export const createPledge = (pledge) => {
    return dispatch => {
      return ApiUtil.createPledge(pledge).then((pledge) => {
        return dispatch(receivePledge(pledge));
        return pledge;
      }).fail((err) => {
        return dispatch(receivePledgeErrors(err.responseJSON));
      })
    }
  }
  
  export const updatePledge = (pledge) => {
    return dispatch => {
      return ApiUtil.updatePledge(pledge).then((pledge) => {
        return dispatch(receivePledge(pledge));
        return pledge;
      }).fail((err) => {
        return dispatch(receivePledgeErrors(err.responseJSON));
      })
    }
  }
  
  export const deletePledge = (id) => {
    return dispatch => {
      return ApiUtil.deletePledge(id).then(() => {
        return dispatch(removePledge(id))
      }).fail((err) => {
        return dispatch(receivePledgeErrors(err.responseJSON));
      })
    }
  }