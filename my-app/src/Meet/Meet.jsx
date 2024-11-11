import './Meet.css';
import img3 from '../img/img3.jpg';
import img4 from '../img/img4.jpg';
import img5 from '../img/img5.jpg';
import img6 from '../img/img6.jpg';

export const Meet=()=>{
    return(
        <div className="meet row ">
     <div className='other'>
     <h2>Meet the Team</h2>
      <div className="width"></div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
     </div>
      <div className='gap'>
    <div className='col-3'>
    <img src={img3}/>
    <h4>John Doe</h4>
    <p className='lorem-text'>Director</p>
    </div>
    <div className='col-3'>
    <img src={img4}/>
    <h4>John Doe</h4>
    <p className='lorem-text'> Director</p>
    </div>

    <div className='col-3'>
    <img src={img5}/>
    <h4>John Doe</h4>
    <p className='lorem-text'>Director</p>
    </div>

    <div className='col-3'>
    <img src={img6}/>
    <h4>John Doe</h4>
    <p className='lorem-text'>Director</p>
    </div>
      </div>
        </div>
    )
}