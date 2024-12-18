import React from 'react'
import Links from './Links'
import "./Nav.css"

const Nav = () => {
    return (
        <div id='nav' className='flex aic'>
            <div id='brand' className='flex aib'><img src="./src/assets/Realme_logo.svg-removebg-preview (1).png" /></div>
            <div id='pages' className='flex'>
                <div id='products' className='flex jca w-38'>
                    <Links name="realme smartphone" />
                    <Links name="narzo smartphone" />
                    <Links name="Audio" />
                    <Links name="Accessories" />
                </div>
                <div id='support' className='flex jca w-20'>
                    <Links name="Brand" />
                    <Links name="Support" />
                    <Links name="Community" />
                </div>
            </div>
        </div>
    )
}

export default Nav