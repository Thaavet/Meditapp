import React from 'react'
import thumbnail_1 from '../images/meditations.png';
import thumbnail_2 from '../images/screen.png';
import thumbnail_3 from '../images/screen3.png';
export const Home = () => {
  return (
    <div className='home-container'>

     <div className='why'> 
     <img className='banner' src={thumbnail_1} alt="meditation" />
      <h3> Why Meditation </h3>
     Meditation is an activity that can bring many benefits, such as reducing stress, improving concentration and mood, and increasing self-awareness. For this reason, it is important to create a website that facilitates meditation and offers useful features such as a customizable timer.

</div>
<div className='what'>
<img className='banner' src={thumbnail_2} alt="Meditapp timer" />
  <h3>What is Meditapp</h3>
Your meditation website “Meditapp” has been created to help people meditate in an easy and accessible way. The customizable timer allows you to set the duration of the activity according to your needs, so you can meditate effectively and without interruptions. In addition, the website offers a wide range of useful resources for meditation, such as guides, videos, and articles, to help you improve your daily practice.

</div>
<div className='end'>
<img className='banner' src={thumbnail_3} alt="benefit of meditation" />
  <h3> References </h3>
Meditation is a practice that can bring many benefits to your daily life. According to a study conducted by Brown University, meditation can help reduce stress and anxiety, improve memory and concentration, and increase self-awareness. In addition, meditation can help reduce symptoms of depression and anxiety, improve sleep quality, and increase emotional resilience .

</div>
    </div>
  )
}

