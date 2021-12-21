import React from 'react'

const Item = ({id, modelo, precio, memoria, bateria, img}) => {
    return (


        <>
            <div className='flex bg-green-300 h-full w-64 shadow p-2 mx-2 rounded'>
                
                <div className='flex flex-wrap content-end items-center bg-white h-full w-full shadow p-2 rounded'>

                    <p className='text-lg  my-0.5 mx-10 hidden' >{id}-</p>
                    <h2 className='text-2xl font-semibold my-0.5 mx-10'>{modelo}</h2>
                    <img>{img}</img>
                    <p className='text-xl  my-0.5 mx-10'>{memoria}GB</p>
                    <p className='text-xl  my-0.5 mx-10'>{bateria}mhz</p>
                    <h3 className='text-xl  my-0.5 mx-10'>${precio}</h3>

                </div>
                
            </div>
        </>
    )
}

export default Item
