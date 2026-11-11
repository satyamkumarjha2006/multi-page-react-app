import React from 'react';

const GithubInfoLoader = async() => {
    const response = await fetch(`https://api.github.com/users/satyamkumarjha2006`)
    const response2 = response.json()
    return response2
    
}

export default GithubInfoLoader