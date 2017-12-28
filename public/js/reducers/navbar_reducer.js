import { REQUEST_SUCCESS } from '../actions/navbar_action'

export default(state={}, action) => {
    switch (action.type) {
        case REQUEST_SUCCESS:
            return  Object.assign({},state,{
                nickname:action.nickname
            });
        default:
            return state
    }
};
