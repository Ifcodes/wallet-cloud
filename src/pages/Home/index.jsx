import React from 'react'
import Partners from '../../atoms/Partners';
import BuiltWithLove from '../../organisms/BuiltWithLove';
import Hero from '../../organisms/Hero';
import ApiDescriptionSection from '../../organisms/WalletCloudApiSection';
import WhyWalletSection from '../../organisms/WhyWalletSection';
import Layout from '../../templates/Layout';

const HomePage = () => {
  return (
    <Layout activeTab={'Home'}>
      <Hero />
      <Partners />
      <WhyWalletSection />
      <ApiDescriptionSection />
      <BuiltWithLove />
    </Layout>
  )
}

export default HomePage