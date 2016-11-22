import {
    ADD_ITEM,
    UPDATE_ITEM,
    REMOVE_ITEM
} from '../actions/items';

export default function (state = [], action) {
    switch (action.type) {
        case ADD_ITEM:
            return state.concat(action.item);
        case UPDATE_ITEM:
            return state.map(function (item) {
                if (item == action.item) {
                    return Object.assign({}, item, action.item);
                }
                return item;
            });
        case REMOVE_ITEM:
            return state.filter(function (item) {
                return item != action.item;
            });
        default:
            return state;
    }
}
