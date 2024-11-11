import './Header.css'
export const Header=()=>{
  console.log(Header);
  
    return(
      <div className="common">
          <h2 className="col-4 react">REACT LANDING PAGE</h2>
         <ul className="unordered col-8 ">
            <li><a href="">FEATURES</a></li>
            <div className='only'></div>
            <li><a href="">ABOUT</a></li>
            <div className='only'></div>
            <li> <a href="">SERVICES</a></li>
            <div className='only'></div>
            <li><a href="">GALLERY</a></li>
            <div className='only'></div>
            <li><a href="">TESTIMONIALS</a></li>
            <div className='only'></div>
            <li> <a href="">TEAM</a></li>
            <div className='only'></div>
            <li><a href="">CONTACT</a></li>
            <div className='only'></div>
         </ul>
      </div>
       
       
    )
}