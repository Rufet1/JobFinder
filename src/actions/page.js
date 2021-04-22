export const changePage = (number) =>{
    return (dispatch) => {dispatch ({
        type : 'CHANGE_PAGE',
        number
    })}
}