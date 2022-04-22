import React from 'react';
import PricingHero from '../../molecules/PricingHero';
import PricingSection from '../../organisms/PricingSection';
import TrustedPartners from '../../organisms/TrustedPartners';
import Layout from '../../templates/Layout';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Pricing = () => {
  const [priceData, setPriceData] = useState([])
  const [isYearly, setIsYearly] = useState(false)
  const [isActive, setIsActive] = useState("monthly")
  const [errorMessage, setErroMessage] = useState('')


  const fetchPriceData = async () => {
    try {
      const response = await axios.get("https://gist.githubusercontent.com/mubashir-hetikal/d08bddf8edd960f025834c09810ca88e/raw/960b45ffd8ff7c9de2509db0a4393b2292b8e3c6/plans.json")
      
    setPriceData(response.data)
      
    } catch (error) {
      if(error) setErroMessage("Sorry, an error occured! Check your internet connection.")
    }
  }

  useEffect(() => {
    fetchPriceData()
  }, [])

  useEffect(() => {
    if(priceData.length === 0) setErroMessage("No data provided. Contact support.")
  }, [priceData])

  const handleDurationClick = (type) => {
    if(type === "yearly") {
      setIsYearly(true)
      setIsActive("yearly")
    }
    else {
      setIsYearly(false)
      setIsActive("monthly")
    }
  }

  return (
    <Layout greenBg={true} activeTab={"Pricing"}>
      <PricingHero 
        handleClick={handleDurationClick}
        isActive={isActive}
      />
      <PricingSection 
        priceData={priceData} 
        isYearly={isYearly}
        errorMessage={errorMessage}
      />
      <TrustedPartners />
    </Layout>
  )
}

export default Pricing