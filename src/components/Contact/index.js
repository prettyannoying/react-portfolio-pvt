import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = () => {
 const [letterClass, setLetterClass] = useState('text-animate');
 const refForm = useRef();
 useEffect(() => {
  const asyncFunc = async () => {return setTimeout(() => {
      setLetterClass('text-animate-hover')
  }, 3000)};
  asyncFunc();
}, []);

const sendEmail = (e) => {
  e.preventDefault();
  emailjs.sendForm('service_rp08yni', 'template_2l3dbob', e.target, '03ORHRYvG-aEMGuMb')
  .then(
    () => {
      alert('Message successfully sent!');
      window.location.reload(false);
    },
    () => {
      alert('Failed to send the message, please try again.');
    }
  );
}
 return (
  <>
  <div className='container contact-page'>
   <div className='text-zone'>
    <h1>
     <AnimatedLetters letterClass={letterClass} strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} idx={15} />
    </h1>
    <p>
     I don't feel like writing this just yet, some other time maybe.
    </p>
    <div className='contact-form'>
     <form redf={refForm} onSubmit={sendEmail}>
      <ul>
       <li className='half'>
        <input type='text' name='name' placeholder='Name' required />
       </li>
       <li className='half'>
        <input type="email" name="email" placeholder='Email' required />
       </li>
       <li>
        <input placeholder="Subject" type="text" name="subject" required/>
       </li>
       <li>
        <textarea placeholder='Message' name="message" required></textarea>
       </li>
       <li>
        <input type="submit" className='flat-button' value='Send'/>
       </li>
      </ul>
     </form>
    </div>
   </div>
   <div className='info-map'>
    Skeny Patel
    <br/>
    India
    <br/>
    <span>skeny27@gmail.com</span>
   </div>
   <div className='map-wrap'>
    <MapContainer center={[21.7051, 72.9959]} zoom={13}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
      <Marker position={[21.7051, 72.9959]}>
        <Popup>I want to break free...</Popup>
      </Marker>
    </MapContainer>

   </div>
  </div>
  <Loader type="pacman" />
  </>
 )
}

export default Contact;