export const ADD_ITEM = 'ADD_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export function addItem(item) {
    return {
        type: ADD_ITEM,
        item: item
    };
}

export function updateItem(item) {
    return {
        type: UPDATE_ITEM,
        item: item
    };
}

export function removeItem(item) {
    return {
        type: REMOVE_ITEM,
        item: item
    };
}
