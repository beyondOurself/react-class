
import { addAction, squareAction, getAction } from '../actions/actions'

import { connect } from 'react-redux'

function Container(props) {
    const {num,add,square ,get} = props
    return (
        <div >
            <div>{num}</div>
            <div>
                <button onClick={() => add(1)}>加1</button>
                <button onClick={() => add(2)}>加2</button>
                <button onClick={() => square()}>相乘</button>
                <button onClick={() => get()}>获取get的数据</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        num:state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add: (value) => dispatch(addAction(value)),
        square: () => dispatch(squareAction()),
        get:() => dispatch(getAction())
        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Container)