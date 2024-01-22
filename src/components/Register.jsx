import React, { useState} from 'react';
import '../components_css/Register.css';
import { Link } from 'react-router-dom';

export default function Register() {


  


    return (
        <>
            <form action="" >
                <div className='container'>
                    <div className='container_input'>
                        <label htmlFor='name'>Név</label>
                        <input type='text' id='name' placeholder='Hogy hínak?'  />
                    </div>

                    <div className='container_input'>
                        <label htmlFor='email'>E-mail</label>
                        <input type='email' id='email' placeholder='E-mail címed' />
                    </div>

                    <div className='container_input'>
                        <label htmlFor='country'>Lakhely (ország)</label>
                        <input list="countries" name='country' id='country' />
                        <datalist id='countries'>
                            
                        </datalist>
                    </div>

                    <div className='container_input'>
                        <label htmlFor='city'>Város</label>
                        <input list="cities" name='country' id='country' />
                        <datalist id='cities'>
                          
                        </datalist>
                    </div>

                    <div className='container_input'>
                        <label htmlFor='phone'>Telefonszám</label>
                        <input type='number' id='phone' placeholder='Csak számjegyeket adj meg' />
                    </div>

                    <div className='container_input'>
                        <label htmlFor='date'>Születési.dátum</label>
                        <input type='date' id='date' placeholder='Jelszavad' />
                    </div>

                    <div className='container_input'>
                        <label htmlFor='password'>Jelszó</label>
                        <input type='password' id='password' placeholder='Jelszavad' />
                    </div>

                    <div className='container_input'>
                        <label htmlFor='passwordConfirmation'>Jelszó ismét</label>
                        <input type='password' id='passwordConfirmation' placeholder='Jelszavad ismét' />
                    </div>

                    <div className='radio_check'>
                        <div className='container_input radio'>
                            <label htmlFor='sex'>Nemed:</label>
                            <br />
                            <input type='radio' name='sex' id='man' />
                            <label htmlFor='man'>Férfi</label>
                            <br />
                            <input type='radio' name='sex' id='woman' />
                            <label htmlFor='woman'>Nő</label>
                            <br />
                            <input type='radio' name='sex' id='other' />
                            <label htmlFor='other'>Egyéb</label>
                            <br />
                        </div>
                        <div className='container_input checkbox'>
                            <input type='checkbox' id='privacy' />
                            <label htmlFor='privacy' className='privacy'>
                                A felhasználási feltételeket elfogadom
                            </label>
                        </div>
                    </div>

                    <div className='buttonContainer'>
                        <button>Regisztráció</button>
                        <br />
                        <br />
                    </div>

                    
                </div>
            </form>
        </>
    );
}