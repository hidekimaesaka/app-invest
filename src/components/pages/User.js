import { useParams } from "react-router-dom"
import api from "../services/api"
import { useEffect, useState } from "react"


export default function User({ match }) {

    const [nome, setNome] = useState()

    const { id, token } = useParams()
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
        <div>
            <h1>Olá {nome} em breve sua interface estará pronta!</h1>
        </div>
    )
}