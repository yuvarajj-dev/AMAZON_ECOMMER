import React from 'react'
import "./Card.css"


export default function eCard(props) {
  return (
    <>
      <div className="Card mx-auto my-5 bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg shadow-xl w-1/2 card-img hover:animate-bounce mx-auto" src={props.val.image} alt={props.val.name} />
        </a>
        <div className="p-5">
          {/* Heading section */}
          <a href="#">
            <h5 className="mb-2 card-head self-center md:text-2xl text-lg font-bold text-center tracking-tight text-gray-900 dark:text-white">{props.val.name}</h5>
          </a>
          {/* Defalut Price */}
          <div className='flex justify-center  gap-5 text-sm  md:text-lg'>
            <p>Price : Rs.{props.val.price}</p>
            <p>Quantity : {props.val.quantity}{props.val.measure}</p>
          </div>
          {/* Increase Product */}
          <div className='flex text-sm md:text-lg card-inc justify-center my-4 items-center gap-4'>

            <button
              onClick={() => { props.handleinc(props.val.name) }}
              title="Add New"
              class="group cursor-pointer outline-none hover:rotate-90 duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35px"
                height="35px"
                viewBox="0 0 24 24"
                class="stroke-blue-400 fill-none group-hover:fill-blue-800 group-active:stroke-red-200 group-active:fill-red-600 group-active:duration-0 duration-300"
              >
                <path
                  d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                  stroke-width="1.5"
                ></path>
                <path d="M8 12H16" stroke-width="1.5"></path>
                <path d="M12 16V8" stroke-width="1.5"></path>
              </svg>
            </button>
            <span>Rs.{props.val.price * props.val.order}</span>

            <button
              onClick={() => { props.handledec(props.val.name) }}
              title="Add New"
              class="group cursor-pointer outline-none hover:rotate-90 duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35px"
                height="35px"
                viewBox="0 0 24 24"
                class="stroke-blue-400 fill-none group-hover:fill-blue-800 group-active:stroke-red-200 group-active:fill-red-600 group-active:duration-0 duration-300"
              >
                <path
                  d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                  stroke-width="1.5"
                ></path>
                <path d="M8 12H16" stroke-width="1.5"></path>
              </svg>
            </button>


            <span>{props.val.quantity * props.val.order }{props.val.measure}</span>
          </div>
          {/* Add to card button */}
          <div className='flex justify-center'>
            <button onClick={()=>{props.handlecart(props.val.name)}} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Add to Cart
              <svg fill="none" height="30" viewBox="0 0 48 48" width="30" xmlns="http://www.w3.org/2000/svg">
                <path d="m0 0h48v48h-48z" fill="#fff" fill-opacity=".01" /><path d="m39 32h-26l-5-20h36z" fill="#2f88ff" />
                <g stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path d="m3 6h3.5l1.5 6m0 0 5 20h26l5-20z"
                  stroke="#000" /><circle cx="13" cy="39" r="3" stroke="#000" /><circle cx="39" cy="39" r="3" stroke="#000" />
                  <path d="m22 22h8" stroke="#fff" /><path d="m26 26v-8" stroke="#fff" /></g>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
