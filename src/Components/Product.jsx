import React, { useState } from 'react'
import Card from './Card'
import Arrayobj from './DATA'
import Popup from './Popup/Popup'

export default function Product(props) {

  const [Data, setData] = useState(Arrayobj)

  const handleinc = (name) => {
    let tempvar = Data.map((val) => {
      if (val.name == name) {
        return { ...val, order: val.order + 1 }
      } else {
        return val;
      }
    })
    setData(tempvar)
  }
  function handledec(name) {
    let tempobj = Data.map((val) => {
      if (val.name == name && val.order != 0) {
        return { ...val, order: val.order - 1 }
      } else {
        return val;
      }
    })
    setData(tempobj)
  }
  function handlecart(name) {
    let tempobj = Data.map((val) => {
      if (val.name == name && val.order > 0) {
        return { ...val, cart: 1 }
      } else {
        return val;
      }
    })
    setData(tempobj);

    let count = 0;
    tempobj.forEach((val) => {
      if (val.cart == 1) {
        count = count + 1;
      }
    })
    props.handlecart(count);
  }
  function handledelete(value){
    let tempobj = Data.map((val)=>{
      if(val.name == value){
        return { ...val, cart : val.cart = 0}
      }else {
        return val
      }
    })
    setData(tempobj);
  }


  return (
    <>
      <div className='my-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 '>
        {
          Data.map((val) => (
            <Card val={val} handleinc={(pname) => { handleinc(pname) }} handledec={(pname) => { handledec(pname) }} handlecart={(pname) => { handlecart(pname) }} />
          ))
        }
        <Popup Data={Data} popupclose={(close)=>{props.popupclose(close)}} handledelete={(value)=>{handledelete(value)}} popup={props.popup} />
      </div>
    </>
  )
}
