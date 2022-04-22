import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';

const Details = ({users}) => {
    const navigate = useNavigate()
  const goBack = () => {
    navigate('/')
  }
    const params = useParams()
    let username;
    let name;
    let phone;
    let email;
    let website;
    let Suite;
    let Address;
    let City;
    let ZipCode;
    let lat;
    let lng;
    let companyName;
    let companyCatchPhrase;
    let CompanyBs;

    users.forEach((user) => {
        if(user.username === params.details) {
            name = user.name;
            username = user.username;
            phone = user.phone;
            email = user.email;
            website = user.website;
            Suite = user.address.suite;
            Address = user.address.street
            City = user.address.city;
            ZipCode = user.address.zipcode;
            lat = user.address.geo.lat;
            lng = user.address.geo.lng;
            companyName = user.company.name;
            companyCatchPhrase = user.company.catchPhrase;
            CompanyBs = user.company.bs

        }
    })

  return (
    <div className='details'>
        <div className='back' onClick={goBack}>
            Back
        </div>
        <section className='user-info'>
            <h1>{name}</h1>
            <div className='general-info'>
                <div className='user-info1'>
                    <div className='information'>
                        <h4>User Name:</h4>
                        <p>{username}</p>
                    </div>
                    <div className='information'>
                        <h4>Email:</h4>
                        <p>{email}</p>
                    </div>
                    <div className='information'>
                        <h4>Phone:</h4>
                        <p>{phone}</p>
                    </div>
                    <div className='information'>
                        <h4>ZipCode:</h4>
                        <p>{ZipCode}</p>
                    </div>
                </div>
                <div className='user-inf02'>
                    <div className='information'>
                        <h4>Lat & Lng:</h4>
                        <p>{lat} & {lng}</p>
                    </div>
                    <div className='information'>
                        <h4>Address:</h4>
                        <p>{Suite},{Address},{City}</p>
                    </div>
                    <div className='information'>
                        <h4>Website:</h4>
                        <p>{website}</p>
                    </div>
                </div>
                <div className='user-info3'>
                    <div className='information'>
                        <h4>Company:</h4>
                        <p>{companyName}</p>
                    </div>
                    <div className='information'>
                        <h4>Company Bs:</h4>
                        <p>{CompanyBs}</p>
                    </div>
                    <div className='information'>
                        <h4>Company Catch Phrase:</h4>
                        <p>{companyCatchPhrase}</p>
                    </div> 
                </div>
            </div>
        </section>
    </div>
  )
}

export default Details