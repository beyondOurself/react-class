'user strict'

const e = React.createElement;


class LikeButton extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            liked: false
        }
    }

    render(h) {

        return e(
            'button', 
            {
                onclick: () => {

                    console.log('愚蠢的地球人')
                }  
                 
             }, 
            'Like'
        )
    }


}

 
const App = document.querySelector('#app')
 
ReactDOM.render(
    e(LikeButton,{commentID:111}), 
    App
)

