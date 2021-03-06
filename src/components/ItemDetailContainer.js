import React, { useContext } from 'react'

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import ItemDetail from './ItemDetail'

import db from '../firebase/firebase';
import { getDoc, doc } from 'firebase/firestore';



const ItemDetailContainer = () => {


    const [product, setProduct] = useState([])
    const [Loading, setLoading] = useState(true)

    const { itemId } = useParams()

    


    useEffect(() => {
        const ref = doc(db, 'phones', itemId)

    getDoc(ref)
    .then( querySnapshot => {
        setProduct({...querySnapshot.data(), id: querySnapshot.id})
    })
    .catch(e => console.log(e))
            .finally(()=> setLoading(false))
        
    }, [itemId])


    return (
        <>
            <div className='flex content-center bg-green-300 dark:bg-gray-600 rounded shadow my-3 h-auto p-0.5 m-3'>

                <div className='flex bg-white w-full h-full rounded shadow dark:bg-gray-100 p-1'>
                    
                    { Loading ? <h3>Cargando modelo...</h3> : <ItemDetail product={product}/>}
                </div>


            </div>
            
        </>
    )
}

export default ItemDetailContainer



