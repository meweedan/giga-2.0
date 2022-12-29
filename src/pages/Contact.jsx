import React from 'react'
import Icon from './svg';
import { useTranslation } from 'react-i18next';

export default function Contact() {
    const { t } = useTranslation();

  return (
    <React.Fragment>
<section className="contact-section two pb-120" id='contact'>

    <div className='container'>
        <div className='contact-element-one'>
            <img src='/images/element/element-6.png' alt='element'/>
        </div>
        <div className='contact-element-two'>
            <img src='/images/element/element-39.png' alt='element'/>
        </div>
        <div className='contact-element-three'>
            <img src='/images/element/element-26.png' alt='element'/>
        </div>
        <div className='contact-element-four'>
            <img src='/images/element/element-50.png' alt='element'/>
        </div>
        <div className='contact-area'>
            <div className='contact-element-five'>
                <img src='/images/element/element-64.png' alt='element'/>
            </div>
            <div className='contact-element-six'>
                <img src='/images/element/element-64.png' alt='element'/>
            </div>
            <div className='row mb-30-none'>
                {/* <div className='col-xl-7 col-lg-7 mb-30'> */}
                    <div className='contact-form-area'>
                        <div className='contact-form-header'>
                            <div className='left'>
                                <h2 className='odo-title'>{t("get_in_touch")}, <span className='text--base'>{t("so_we_can_get_you_connected!")}</span></h2>
                            </div>
                                <div className='right'>
                                <div className='circle'>
                                <div className="contact-logo">
                                    <img src="images/gigafavicon.png" alt="favicon"></img>
                                    <Icon/>
                                </div>
                                </div>
                            </div>
                            </div>
                        <form className='contact-form'>
                            <div className='row justify-content-center mb-30-none'>
                                <div className='col-xl-6 col-lg-6 form-group'>
                                    <input type='text' className='form--control' placeholder='Your Name'/>
                                </div>
                                <div className='col-xl-6 col-lg-6 form-group'>
                                    <input type='email' className='form--control' placeholder='Your Email'/>
                                </div>
                                <div className='col-xl-6 col-lg-6 form-group'>
                                    <input type='text' className='form--control' placeholder='Phone Number'/>
                                </div>
                                <div className='col-xl-6 col-lg-6 form-group'>
                                    <div className='contact-select'>
                                        <select className='form--control'>
                                            <option value='1'>IT Support</option>
                                            <option value='2'>Home Broabdand</option>
                                            <option value='3'>Leased Line</option>
                                            <option value='4'>Corporate Solutions</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='col-xl-12 form-group'>
                                    <textarea className='form--control' placeholder='Write Message...'></textarea>
                                </div>
                                <div className='col-xl-12 form-group custom-form-group mt-20'>
                                    <div className='form-group custom-check-group'>
                                        <input type='checkbox' id='level-1'/>
                                        <label htmlFor='level-1'>I Agree With Giga's <a href='#0' className='text--base'>Terms & Conditions</a></label>
                                    </div>
                                    <button type='submit' className='btn--base'>Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                {/* </div> */}
            </div>
        </div> 
        </div>
     </section>   
    </React.Fragment>
  )
}
