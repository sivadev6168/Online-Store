import React, { useState, useEffect } from 'react'
import { ApiContext } from '../contexts/ApiContext'
import axios from 'axios'
function Store({ children }) {
  const [product, setProduct] = useState([])
  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => {
        setProduct(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  return (
    <ApiContext.Provider value={[product, setProduct]}>
      {children}
    </ApiContext.Provider>
  )
}
export default Store