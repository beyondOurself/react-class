import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import Container from './components/Container'
import store  from './store/store';
// 1. store  存放的数据仓库
// 2. state 数据的参考 当中存储的数据
// 3.action 对象 ： 描述当前的行为

// const action = {
//   type: 'ADD_ONE',
//   num:1
// }


// 4.dispatch store.dispatch('action', payload)


// 5. reducer 函数： 更新 state, 所有的action 需要reducer 去中转更新状态

// const reduer = (state = 10, action) => {

//   switch (action.type) {
//     case 'ADD_ONE':
//       return state + action.num
//       ; 
//     case 'ADD_TWO': ; 
//   } 

// }





// console.log(store.getState())

// store.dispatch(addAction(1))

// console.log('addOne', store.getState())

// store.dispatch(addAction(2))

// console.log('addTwo', store.getState())

// store.dispatch(squareAction())

// console.log('square', store.getState())


function App() {

  return (
    <div>
      
    </div>
  )
}

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <Container >

      </Container>
    </Provider>,
    document.getElementById('root')
  );
}

render()

store.subscribe(render)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
