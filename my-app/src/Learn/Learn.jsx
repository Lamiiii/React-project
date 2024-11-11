import './Learn.css';
import img1 from '../img/img1.jpg'
export const Learn=()=>{
    return(
        <div className='bg-color'>
            <img style={{position:"absolute", left:"0", right:"0", zIndex:"-1"}} className='img-color' src={img1} alt="computer-picture"/>
            <div className="learn">
            <h1>We are a Landing Page</h1>
            <p className='learn-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum</p>
            <button>LEARN MORE</button>
        </div>
        </div>
    )
}