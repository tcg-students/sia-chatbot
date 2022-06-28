import React , {useEffect} from 'react'
import axios from 'axios'

const Chatbot = () => {

    useEffect( () => {
      axios.get('http://localhost:4000/treeMessages')
      },[]);

    

  return (

    <div>chatbot</div>
  )
}

export default Chatbot