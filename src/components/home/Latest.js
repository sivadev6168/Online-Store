import React , { useContext, useState} from 'react';
import Card from 'react-bootstrap/Card';
import { ApiContext } from '../../contexts/ApiContext';
import ModalMain from '../Modal';
import "../css/Latest.css"
import PurchaseModal from '../PurchaseModal';

const Latest = () => {
    const [product] = useContext(ApiContext);
    const [currentSelectedProduct, setcurrentSelectedProduct] = useState('');
    const [showModal, setShowModal] = useState(false)
    const [showPurchaseModal, setShowPurchaseModal] = useState(false);

    const closePurchaseModal = ()=>{
      setShowPurchaseModal(false)
    }
    const closeModal = (fromBuy) =>{
      if(fromBuy){
        setShowPurchaseModal(true)
      }
      setShowModal(false);
    }

  return (
    <>
    <h1 className="display-3 text-center mt-5">Latest</h1>
    <div className='main-div-fav p-3'>
    {product.slice(10, 20).map((newprod, i)=>(
    <Card className='fav-card mx-2 p-4' style={{ width: '18rem' }} key={i} onClick={() => {setShowModal(true);setcurrentSelectedProduct(newprod)}}>
    <Card.Img style={{width:"50%", height:"50%",  marginLeft:"auto", marginRight:"auto"}}  variant="top" src={newprod.image} />
    <Card.Body>
      <Card.Title className='text-center'>{newprod.title.substring(0, 15)}...</Card.Title>
    </Card.Body>
  </Card>
  ))}
  </div>
  <ModalMain showModal={showModal} closeModal={closeModal} currentProduct={currentSelectedProduct}/>
  <PurchaseModal showPurchaseModal={showPurchaseModal} closePurchaseModal={closePurchaseModal} currentProduct={currentSelectedProduct}/>
  
  </>
  )
}
export default Latest