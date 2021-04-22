import { categories } from "../database/database";

export const setCategory = (categories) => {
    return (dispatch) => {dispatch ({
        type : 'SET_CATEGORY',
        categories
    })}
}