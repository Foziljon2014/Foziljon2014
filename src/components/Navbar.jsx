import React from 'react'

function Navbar({ image, title, price }) {
  return (
    
<div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
<img className="w-full h-48 object-cover" src={image} alt={title} />
<div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{title}</div>
    <p className="text-gray-700 text-base">{price}</p>
</div>
</div>
  )
}

export default Navbar;