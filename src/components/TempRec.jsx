import React from 'react'
import permanent from '../images/permanent.jpg'
import temporary from '../images/temprary.jpg'
function TempRec(){
    return(
        <div>
<div  className='tempRec-Parent'>
    <p >We Offer Services in Both Permanent and Temporary Recruitment</p>
<div className='per-temp-tec-parent'>
   <div className='perma-Rec-Parent'>
    <div className='perma-Rec-content'>
        <h2 className='recHeading'>Permanent Recruitment:</h2>
        <p>At <span className='services-span'>INNOVEX RESOURCE GROUP LIMITED</span>, we've mastered the art of permanent recruitment, consistently placing over 100 top-tier candidates in jobs every month. Why stress over advertising and sifting through countless applications? We handle everything—from engaging with prospects to meticulous screening and vetting—so you get only the best, hassle-free. Let us save you time, energy, and the headache of finding the right fit. With <span className='services-span'>INNOVEX RESOURCE GROUP LIMITED</span>, expect nothing less than exceptional service that leads to long-term success.</p>
    </div>
    <div>
<img src={permanent} alt="" id='perma-Img'/>
    </div>
   </div>
<div className='Temp-recruitment-parent'>
    <div><img src={temporary} alt="" id='perma-Img'/></div>
    <div className='perma-Rec-content'>
        <h2 className='recHeading'>Temporary Recruitment:</h2>
        <p className=''><span className='services-span'>INNOVEX RESOURCE GROUP LIMITED</span> offers a large pool of thoroughly vetted, compliant, and registered candidates, ready to fulfill your short-term needs effortlessly. With a competitive pricing structure, round-the-clock service, and our extensive experience, we consistently achieve over 90% coverage on all bookings. Rely on us for top-quality candidates and exceptional dependability. Choose <span className='services-span'>INNOVEX RESOURCE GROUP LIMITED</span> and discover the excellence of a recruitment partner devoted to surpassing your expectations.</p>
    </div>
</div>
  
</div>
</div>
        </div>
    )
}
export default TempRec;
