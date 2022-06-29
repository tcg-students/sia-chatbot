import React , {useEffect} from 'react'
import axios from 'axios'

const Chatbot = () => {

  useEffect(() => {
      gettingFirstNode()
    }, []);
    
    const gettingFirstNode = (id) => {
      const data = axios.get(`http://localhost:4000/get_initial_nodes/${2}`)
  console.log('data :>> ', data);
    }

    

  return (

    <div>chatbot</div>
  )
}

export default Chatbot