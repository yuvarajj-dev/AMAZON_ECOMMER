import React from 'react'
import "./Header.css"
import { Button, Navbar } from "flowbite-react";

export default function Header(props) {
    return (
        <>
            <Navbar fluid rounded className='navbar' >
                <Navbar.Brand>
                    <img src=".\logo\Amazon logo.png" className="mr-3 h-6 amazon-logo sm:h-9" alt="Flowbite React Logo" />
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Navbar.Toggle />
                    <div onClick={()=>{props.popup(true)}} className='realtive cursor-pointer '>
                        <img src="./CART.png" alt="cart" className='w-14 ' />
                        <span className='card-num '>{props.Head}</span>
                    </div>
                </div>
                <Navbar.Collapse >
                    <Navbar.Link className='list-menu font-bold' href="#" >
                        Home
                    </Navbar.Link>
                    <Navbar.Link className='list-menu font-bold' href="#">About</Navbar.Link>
                    <Navbar.Link className='list-menu font-bold' href="#">Pricing</Navbar.Link>
                    <Navbar.Link className='list-menu font-bold' href="#">Contact</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
