import React from 'react'



const Welcome = (props) => {
    
    let email = localStorage.getItem('email');

    const removeGmail = (email) => {
        var myStr = email;
        var newStr = myStr.replace("@gmail.com", "")
        var newCapitilizedStr = newStr.charAt(0).toUpperCase()+ newStr.slice(1)
        return newCapitilizedStr

    }
    return (
        <div className={`alert  alert-success alert-dismissible fade show`} role="alert">
            Hii ,
            <b> {removeGmail(email)} </b>
        </div>
    )
}

export default Welcome