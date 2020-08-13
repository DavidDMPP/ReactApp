import React from 'react';
import Header from '../Parts/Header';
import Section from '../Elements/Section';
import Hero from '../Assets/images/hero-image.png';
import Fade from 'react-reveal/Fade';
import Clients from '../Parts/Clients';
import Features from '../Parts/Features';
import FeaturesTitle01 from '../Assets/images/feature-tile-icon-01.svg';
import FeaturesTitle02 from '../Assets/images/feature-tile-icon-02.svg';
import FeaturesTitle03 from '../Assets/images/feature-tile-icon-03.svg';
import Card from '../Elements/Card';
import Lists from '../Elements/Lists';
import Button from '../Elements/Button';

export default function Homepage() {
  const features = [
    {
      imgSrc: FeaturesTitle01,
      imgAlt: 'Feature tile icon 01',
      title: 'Join DavidDMPP',
      description:
        'A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.',
    },
    {
      imgSrc: FeaturesTitle02,
      imgAlt: 'Feature tile icon 02',
      title: 'Join DavidDMPP',
      description:
        'A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.',
    },
    {
      imgSrc: FeaturesTitle03,
      imgAlt: 'Feature tile icon 03FeaturesTitle03',
      title: 'Join DavidDMPP',
      description:
        'A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.',
    },
  ];

  const listPricing = [
    {
      price: 27,
      currencySymbol: '$',
      description: 'Lorem ipsum is a common text',
      features: [
        { isChecked: true, content: 'Excepteur sint occaecat velit' },
        { isChecked: true, content: 'Excepteur sint occaecat velit' },
        { isChecked: true, content: 'Excepteur sint occaecat velit' },
        { isChecked: false, content: 'Excepteur sint occaecat velit' },
        { isChecked: false, content: 'Excepteur sint occaecat velit' },
      ],
    },
    {
      price: 47,
      currencySymbol: '$',
      description: 'Lorem ipsum is a common text',
      features: [
        { isChecked: true, content: 'Excepteur sint occaecat velit' },
        { isChecked: true, content: 'Excepteur sint occaecat velit' },
        { isChecked: true, content: 'Excepteur sint occaecat velit' },
        { isChecked: true, content: 'Excepteur sint occaecat velit' },
        { isChecked: false, content: 'Excepteur sint occaecat velit' },
      ],
    },
    {
      price: 67,
      currencySymbol: '$',
      description: 'Lorem ipsum is a common text',
      features: [
        { isChecked: true, content: 'Excepteur sint occaecat velit' },
        { isChecked: true, content: 'Excepteur sint occaecat velit' },
        { isChecked: true, content: 'Excepteur sint occaecat velit' },
        { isChecked: true, content: 'Excepteur sint occaecat velit' },
        { isChecked: true, content: 'Excepteur sint occaecat velit' },
      ],
    },
  ];

  return (
    <div className="body-wrap">
      <Header></Header>
      <main className="site-content">
        <Section
          className="hero section illustration-section-01"
          isCenterContent
        >
          <div className="hero-inner section-inner">
            <div className="hero-content">
              <div className="container-sm">
                <Fade bottom delay={500}>
                  <h1 className="mt-0 mb-16">Landing template for startups</h1>
                </Fade>
                <div className="container-xs">
                  <Fade Buttom delay={1000}>
                    <p className="mt-0 mb-32 ">
                      Our landing page template works on all devices, so you
                      only have to set it up once, and get beautiful results
                      forever.
                    </p>
                  </Fade>
                </div>
              </div>
              <div className="hero-figure illustration-element-01">
                <Fade Buttom delay={1500}>
                  <img
                    className="has-shadow"
                    src={Hero}
                    alt="Hero"
                    width="896"
                    height="504"
                  />
                </Fade>
              </div>
            </div>
          </div>
        </Section>
        <Clients></Clients>
        <Section className="features-tiles">
          <div className="container">
            <div className="features-tiles-inner section-inner">
              <div className="tiles-wrap">
                {features.map((features, index) => (
                  <Features
                    key={index}
                    delayInMS={index * 500}
                    data={features}
                  ></Features>
                ))}
              </div>
            </div>
          </div>
        </Section>
        <Section className="pricing">
          <div className="container">
            <div className="pricing-inner section-inner has-top-divider">
              <div className="section-header center-content">
                <div className="container-xs">
                  <Fade Buttom delay={500}>
                    <h2 className="mt-0 mb-16">Simple, transarent pricing</h2>
                  </Fade>
                  <Fade Buttom delay={500}>
                    <p className="m-0">
                      Lorem ipsum is common placeholder text used to demonstrate
                      the graphic elements of a document or visual presentation.
                    </p>
                  </Fade>
                </div>
              </div>
              <div className="tiles-wrap">
                {listPricing.map((list, index) => (
                  <Fade Buttom delay={index * 500}>
                    <Card hasShadow key={index} delay={index * 500}>
                      <div className="pricing-item-content">
                        <div className="pricing-item-header pb-24 mb-24">
                          <div className="pricing-item-price mb-4">
                            <span className="pricing-item-price-currency h2">
                              {list.currencySymbol}
                            </span>
                            <span
                              className="pricing-item-price-amount h1 pricing-switchable"
                              data-pricing-monthly="34"
                              data-pricing-yearly="27"
                            >
                              {list.price}
                            </span>
                          </div>
                          <div className="text-xs text-color-low">
                            {list.description}
                          </div>
                        </div>
                        <div className="pricing-item-features mb-40">
                          <div className="pricing-item-features-title h6 text-xs text-color-high mb-24">
                            What’s included
                          </div>
                          <Lists
                            data={list.features}
                            isSmall
                            className="pricing-item-features-list text-xs mb-32"
                          ></Lists>
                        </div>
                        <div className="pricing-item-cta mb-8">
                          <Button isPrimary isBlock href="#">
                            Start free trial
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </Fade>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
}
