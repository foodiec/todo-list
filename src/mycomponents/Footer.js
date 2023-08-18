import React from 'react'
// import './footer.css'

export const Footer = () => {
  // let footerStyle = {
  //   position: "relative",
  //   top: "10vh",
  //   width: "100%",
  //   border:"2px solid "
  // }
   return (
    <footer className='bg-dark text-light py-3' >
     {/* style=    {footerStyle}> */}
    <p className="text-center">
      copyright &copy; Mytodoslist.com
      </p>
    </footer>
  )
}

export default Footer
