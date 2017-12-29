import {REQUEST_SUCCESS,WINDOWS_UPDATE} from '../actions/navbar_action'

export default(state = {}, action) => {
    switch (action.type) {
        case REQUEST_SUCCESS:
            return  Object.assign({},state,{
                nickname:action.nickname
            });
        case WINDOWS_UPDATE:
            return Object.assign({},state,{
                i_card_back_height:window.innerHeight
            });
        default:
            return state
    }
};
