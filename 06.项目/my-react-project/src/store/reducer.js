const defaultState = {
    msg:'你好世界'
}

const reducer = (state = defaultState, action) => {
    const newState  = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case 'changeMsg':
            newState.msg = '愚蠢的地球人'
            break; 
        default: break;
    }

    return newState
}

export default reducer