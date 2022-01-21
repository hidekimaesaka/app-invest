import { useParams, useNavigate } from "react-router-dom"
import api from "../services/api"
import { useEffect, useState } from "react"
import styles from "./User.module.css"
import Container from "../layout/Container"
import {BsFillTrashFill} from "react-icons/bs"



export default function User({ match }) {

    const [products, setProducts] = useState([])
    const [productID, setProductID] = useState()


    const [nome, setNome] = useState()
    const navigate = useNavigate()
    const { id, token } = useParams()

    function sendID() {
        navigate(`/newproduct/${id}/${token}`)
    }

    async function deleteProduct() {

        const response = await api.post(`/wallet/delete/${id}`, {
            product: productID
        })
        .then((response) => { window.location.reload()})
        
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
                
            })


        const getWallet = await api.get(`/wallet/${id}`, {
            headers: {
                "Content-Type": "application/json"
            }
        }
        
        )
            .then((getWallet) => {
                setProducts(getWallet.data)
            })


            
    }

    useEffect(() => {
        auth(id)
    }, [])

    // products.map((product) => (
    //     <p>produto</p>
    // ))


    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Produtos de {nome}</h1>
                <button onClick={sendID}>Novo Produto</button>
            </div>
            <Container customClass="start">
                {products.length > 0 &&
                    products.map((product) => (
                        <div className={styles.product_card}>
                        <h4>{product.product.toUpperCase()}</h4>
                        <p>Preço de compra: R$ {product.bp}</p>
                        <p>Valor investido: R$ {parseFloat(product.bp)*parseFloat(product.qtd)}</p>
                        <p>Quantidade: {product.qtd}</p>
                        <div className={styles.project_card_actions}>
                            <button onMouseOver={(e) => (setProductID(product._id))} onClick={deleteProduct}>
                                <BsFillTrashFill></BsFillTrashFill>
                            </button>
                        </div>
                        </div>
                    ))
                }
                

            </Container>
        </div>
    )
}