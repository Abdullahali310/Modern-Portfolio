import React from 'react'
import {BsTwitter, BsInstagram, BsLinkedin} from 'react-icons/bs'
import {FaFacebook, FaWhatsapp} from 'react-icons/fa'
const SocialMedia = () => {
  return (
    <div className='app__social'>
<div>
  <a href="https://twitter.com/Abdullah310a" target='_blank'>
  <BsTwitter/>
  </a>
</div>
<div>
  <a href="https://www.linkedin.com/in/abdullah-ramadan2/" target='_blank'>
  <BsLinkedin/>
  </a>
</div>
<div>
<a href="https://www.instagram.com/_._3bdullah" target='_blank'>
  <BsInstagram/>
  </a>
</div>
<div>
<a href="https://www.facebook.com/abdullah.ramadan.7311/" target='_blank'>
  <FaFacebook/>
  </a>
</div>
<div>
<a href="https://wa.me/+201224523204/" target='_blank'>
  <FaWhatsapp/>
  </a>
</div>
    </div>
  )
}

export default SocialMedia