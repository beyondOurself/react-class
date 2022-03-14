import React, { useState , useEffect} from 'react'

function useDefineStatus() {
    
    const [isOnline,setIsOnline] = useState(null)
    
    function handleStatusChange(status) {
        setIsOnline(status.isOnline)
    }

    useEffect(() => {

        console.log('useEffect runing...',isOnline)

    })


    return isOnline

}

function Example(props) {

    useDefineStatus()
    const [count, setCount] = useState(0)
    
    return (
        <div className='summarize_wrap'>
            <button  onClick={() => { setCount(count + 1)} }>点击 ++</button>
            <div>
                {count}
            </div>
        </div>
    )

}


export default  Example