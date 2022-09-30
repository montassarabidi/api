import React from 'react'

const UserCard = ({ el }) => {
    return (

        <div>
  <div id="gradient" />
  <div id="card">
    <img src="https://fir-rollup.firebaseapp.com/de-sm.jpg" />
    <h2>{el.name}</h2>
    <p>EM@IL: {el.email}.</p>
    <p>Interested in Web technologies like HTML5, CSS, JavaScript, etc.</p>
    <p>Love Gomycode and respect ABS. ;)</p>
    <span className="left bottom">ADDRESS: {el.address.city} </span>
    <span className="right bottom">- {el.address.street}</span>
  </div>
</div>

    )
}

export default UserCard