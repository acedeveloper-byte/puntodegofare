import React from 'react'

const SmallBanner = ({Bannerhead}) => {
  return (
    <>
    <div className='small-banner text-center' style={{
              backgroundImage: `url("images/bangkok.jpg")`,
              
              backgroundSize: "cover",
            }}>
    <h1 className='banner-heading'>{Bannerhead}</h1>
    </div>
    
    
    </>
  )
}

export default SmallBanner