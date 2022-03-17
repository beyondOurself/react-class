import { ADD, SQUARE } from '../constants/ActionTypes'

// const addOne = {
//     type: ADD,
//     num: 1,
// }

// const addTwo = {
//     type: ADD,
//     num: 2,
// }


// const square = {
//     type: SQUARE
// }

const addAction = (num) => {
    return {
        type: ADD,
        num
    }
}

const squareAction = () => {
    return { type: SQUARE }
}

const getAction = () => {

    return (dispatch, getState) => {

        fetch('./data.json').then(
            res => res.json()
        ).then(res =>
 
            dispatch({
                type: 'GET',
                num:res[1]
          })
        )
    }

}

export {
    addAction,
    squareAction,
    getAction
}