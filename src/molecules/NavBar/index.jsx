import React, { useState } from 'react'
import Button from '../../atoms/Button'
import WalletCloudLogo from '../../atoms/WalletCloudLogo'
import { NavWrapper } from './navStyles'
import { Link, useNavigate } from 'react-router-dom'
 const navItems = [
    {
      itemUrl: '/',
      itemName: 'Home',
      isActive: false
    },
    {
      itemUrl: '/pricing',
      itemName: 'Pricing',
      isActive: false
    },
    {
      itemUrl: '#',
      itemName: 'Documentation',
      isActive: false
    },
    {
      itemUrl: '#',
      itemName: 'Security',
      isActive: false
    },
    {
      itemUrl: '#',
      itemName: 'Contact us',
      isActive: false
    },
  ]
const Navbar = ({greenBg, activeTab}) => {
  const [navMenuList, setNavMenuList] = useState(navItems)
  const [active, setActive] = useState(activeTab)

  const navigate = useNavigate()

  const handleClick = (index) => {
    setNavMenuList(navMenuList.map((item, itemIndex) =>{
      if(itemIndex === index) {
        item.isActive = true
        setActive('')
        navigate(`${item.itemUrl}`)
      }else{

        item.isActive = false
      }

      return item
    }))
  }

  return (
    <NavWrapper greenBg={greenBg}>
      <WalletCloudLogo greenBg={greenBg}/>
      <div className='nav-item-cont'>
        {navMenuList.map((item, index) => (
          <span 
            key={`item-key-${index}`} 
            className={`nav-item ${item.isActive || active === item.itemName ? "isActive" : ""}`} 
            onClick={() => handleClick(index)
          }>
            {item.itemName}
          </span>
        ))}
      </div>
      <div className='login-cont'>
        <Link to={'/'} className='login-text'>Login</Link>
        <Button 
          buttonText="Get the API"
          greenBg={greenBg}
        />
      </div>
    </NavWrapper>
  )
}

export default Navbar