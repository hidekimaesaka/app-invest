import { useParams, useNavigate } from "react-router-dom"
import api from "../services/api"
import { useEffect, useState } from "react"
import Table from "../layout/Table"
import LinkButton from '../layout/LinkButton'
import styles from "./User.module.css"


export default function User({ match }) {

    const [nome, setNome] = useState()
    const navigate = useNavigate()
    const { id, token } = useParams()

    function sendID(){
        navigate(`/newproduct/${id}/${token}`)
    }


    async function auth(id) {

        const response = await api.get(`/user/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`
            }
        }

        )
            .then((response) => {

                setNome(response.data.user.name)

            })
            .catch((error) => {
                const { msg } = error.response.data
                console.log(error.response.status);
                console.log(error.response.headers);
            })
    }

    useEffect(() => {
        auth(id)

    }, [])

    return (
        <div className={styles.walletpage}>
            <button onClick={sendID}>Novo Produto</button>
        </div>
    )
}