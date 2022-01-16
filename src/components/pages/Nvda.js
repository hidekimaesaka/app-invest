import styles from './Nvda.module.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Nvda() {
    const [post, setPost] = useState({})

    useEffect(() => {
        axios
            .get('https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=nvdc34.sa&apikey=2V82MYWM0SJ18ZSZ')
            .then(res => {
                setPost(res.data['Global Quote'])
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    return (
        <div>
            <p>Symbol</p>
            <h1>{post['01. symbol']}</h1>
            <p>price</p>
            <h1>BRL {post['05. price']}</h1>
        </div>
    )
}