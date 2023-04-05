import React from 'react'
import { useEffect } from 'react'
import '../App.css'

export default function Ftech2() {
  const [user, setUser] = React.useState({})
  const  ftechData = () => {
    fetch("https://randomuser.me/api/?results=1")
    .then(response => response.json())
    .then((data => setUser(data))
    ).catch((error => {
      console.log(error)
    })) 
  }
  useEffect(() => {
    ftechData()
  },[])
  return Object.keys(user).length > 0 ?(
    <section  className='main'>
      <article className='article'>
      <h1 className='header'>Customer data</h1>
      <h2>Name: <span className='span-color'>{user.results[0].name.first}</span></h2>
      <img src={user.results[0].picture.large} alt=""/>
      </article>
    </section>
  ) : (
    <h1><span className='span-color'>Data pending...</span></h1>
  )
}
