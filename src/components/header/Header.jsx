import React from "react"
import icon from "../../assets/images/icon.svg"
import "./header.css"
import { AiOutlineSearch } from "react-icons/ai"
import { Card } from "./Card"
import { User } from "./User"
import { Link } from "react-router-dom"

export const Header = () => {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header")
    header.classList.toggle("active", this.window.scrollY > 100)
  })
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })

  return (
    <>
      <header className='header'>
        <div className='scontainer flex'>
          <div className='logo'>
            <Link to='/'>
              {/* <img src={Medicine} alt='Medicine' /> */}
            </Link>
          </div>
          <div className='flex'>
          <Link to='/'>
              <img src={icon} alt='Medicine' />
            </Link>
          </div>
          <div className='account flexCenter'>
            <Card />
            {/* <User /> */}
          </div>
        </div>
      </header>
    </>
  )
}