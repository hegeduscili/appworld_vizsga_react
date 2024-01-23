import React, { useState, useEffect } from 'react';
import '../components_css/Register.css';
import { Link } from 'react-router-dom';

export default function Register() {
    const initialState = {
        name: '',
        email: '',
        country: '',
        city: '',
        phone: '',
        date: '',
        password: '',
        passwordConfirmation: '',
        sex: '',
        privacy: ''
    };

    const [data, setData] = useState(initialState)
    const [countries, setCountries] = useState([])
    const [cities, setCities] = useState([])
    const [selectedCountryId, setSelectedCountryId] = useState('');
    const [isSelectedCountry, setIsSelectedCountry] = useState(false);


    useEffect(() => {
        fetch('https://backend.ichat.hu/api/countries')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCountries(data);
            })
    }, []);

    useEffect(() => {
        if (selectedCountryId) {
            fetch(`https://backend.ichat.hu/api/countries/${selectedCountryId}/cities`)
                .then(res => res.json())
                .then(data => {
                    setCities(data);
                });
            setIsSelectedCountry(true);
        } else {
            setCities([])
            setIsSelectedCountry(false);
        }

    }, [selectedCountryId]);



    const handleChange = (e) => {
        if (e.target.id === 'country') {
            setData({ ...data, country: e.target.value });
            const selectedCountry = countries.find(country => country.name === e.target.value);
            setSelectedCountryId(selectedCountry ? selectedCountry.id : '');
        } else {
            setData({ ...data, [e.target.id]: e.target.value });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        }).then(res => {

        });
    };


    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <div className='container'>
                    <div className='container_input'>
                        <label htmlFor='name'>Név</label>
                        <input type='text' id='name' placeholder='Hogy hínak?' onChange={handleChange} />
                    </div>

                    <div className='container_input'>
                        <label htmlFor='email'>E-mail</label>
                        <input type='email' id='email' placeholder='E-mail címed' onChange={handleChange} />
                    </div>

                    <div className='container_input'>
                        <label htmlFor='country'>Lakhely (ország)</label>
                        <input list="countries" name='country' id='country' onChange={handleChange} />
                        <datalist id='countries'>
                            {countries.map(country => (
                                <option key={country.id} value={country.name}>
                                    {country.name} - {country.native}
                                </option>
                            ))}
                        </datalist>
                    </div>

                    <div className='container_input'>
                        <label htmlFor='city'>Város</label>
                        <input list="cities" name='city' id='city' onChange={handleChange}
                            placeholder={isSelectedCountry ? 'Kezdjen el gépelni' : 'Először válasszon országot'}
                        />
                        <datalist id='cities'>
                            {cities.map(city => (
                                <option key={city.id} value={city.name}>
                                    {city.name} ({city.country_code})
                                </option>
                            ))}
                        </datalist>
                    </div>

                    <div className='container_input'>
                        <label htmlFor='phone'>Telefonszám</label>
                        <input type='number' id='phone' placeholder='Csak számjegyeket adj meg' onChange={handleChange} />
                    </div>

                    <div className='container_input'>
                        <label htmlFor='date'>Születési.dátum</label>
                        <input type='date' id='date' placeholder='Jelszavad' onChange={handleChange} />
                    </div>

                    <div className='container_input'>
                        <label htmlFor='password'>Jelszó</label>
                        <input type='password' id='password' placeholder='Jelszavad' onChange={handleChange} />
                    </div>

                    <div className='container_input'>
                        <label htmlFor='passwordConfirmation'>Jelszó ismét</label>
                        <input type='password' id='passwordConfirmation' placeholder='Jelszavad ismét' onChange={handleChange} />
                    </div>

                    <div className='radio_check'>
                        <div className='container_input radio'>
                            <label htmlFor='sex'>Nemed:</label>
                            <br />
                            <input type='radio' name='sex' id='man' onChange={handleChange} />
                            <label htmlFor='man'>Férfi</label>
                            <br />
                            <input type='radio' name='sex' id='woman' onChange={handleChange} />
                            <label htmlFor='woman'>Nő</label>
                            <br />
                            <input type='radio' name='sex' id='other' onChange={handleChange} />
                            <label htmlFor='other'>Egyéb</label>
                            <br />
                        </div>
                        <div className='container_input checkbox'>
                            <input type='checkbox' id='privacy' onChange={handleChange} />
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

                    <div className='linkContainer'>
                        <ul>
                            <li>
                                <Link to='/forgottenpass'>Elfelejtetted a jelszavad?</Link>
                            </li>
                            <li>
                                <Link to='/alreadyreg'>Már regisztráltál?</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </form>
        </>
    );
}