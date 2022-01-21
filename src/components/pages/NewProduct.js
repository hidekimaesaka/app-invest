import styles from "./NewProduct.module.css"
import { useState } from "react"
import api from "../services/api"
import { useNavigate, useParams } from 'react-router-dom'


export default function NewProduct() {

    const navigate = useNavigate()

    const [product, setProduct] = useState()
    const [bp, setBp] = useState()
    const [qtd, setQtd] = useState()
    const { id, token } = useParams()
    console.log(id)
    const [alert, setAlert] = useState()

   async function submit(e){
        e.preventDefault()

        if (!product || !bp || !qtd){
            setAlert("Preencha todos os campos!")
        }else{
            const response = await api.post(`/wallet/new/${id}`, {
                product,
                bp,
                qtd
            })
            .then((response) => { 
                
                
                navigate(`/user/${id}/${token}`)
                //auth(id, token)

            })
            .catch((error) => {
                const {msg} = error.response.data
                setAlert(msg);
                console.log(error.response.status);
                console.log(error.response.headers);
            })
        }

        

    }

    return (
        <div className={styles.newproduct_container}>
            <h1>Cadastar novo produto</h1>
            <p>Cadastre um novo produto em sua carteira</p>
            <form onSubmit={submit} className={styles.form}>
            <input
                type='text'
                placeholder='Nome do produto'
                onChange={(e) => setProduct(e.target.value)}
            />
            <input
                type='text'
                placeholder='Quantidade'
                onChange={(e) => setQtd(e.target.value)}
            />
            <input type='text'
                placeholder='Preço pago'
                onChange={(e) => setBp(e.target.value)}
            />
            <p>{alert}</p>
            <button onClick={(e) => setAlert()} 
            type="submit">Cadastar</button>
        </form>
        </div>
    )
}