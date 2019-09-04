import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { DrawerProvider } from './common/src/contexts/DrawerContext';
import { portfolioTheme } from './common/src/theme/portfolio';
import { ResetCSS } from './common/src/assets/css/style';
import {
  GlobalStyle,
  ContentWrapper,
} from './common/src/containers/Portfolio/portfolio.style';

import BannerSection from './common/src/containers/Portfolio/Banner';
import Navbar from './common/src/containers/Portfolio/Navbar';
import AwardsSection from './common/src/containers/Portfolio/Awards';
import PortfolioShowcase from './common/src/containers/Portfolio/PortfolioShowcase';
import ProcessSection from './common/src/containers/Portfolio/Process';
import SkillSection from './common/src/containers/Portfolio/Skill';
import CallToAction from './common/src/containers/Portfolio/CallToAction';
import TestimonialSection from './common/src/containers/Portfolio/Testimonial';
import ClientsSection from './common/src/containers/Portfolio/Clients';
import ContactSection from './common/src/containers/Portfolio/Contact';
import Footer from './common/src/containers/Portfolio/Footer';

export default () => {
  return (
    <ThemeProvider theme={portfolioTheme}>
      <Fragment>
        <ResetCSS />
        <GlobalStyle />
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <BannerSection />
          <SkillSection id="service_section" />
          {/* <PortfolioShowcase /> */}
          {/* <AwardsSection /> */}
          <ProcessSection />
          {/* <CallToAction /> */}
          {/* <TestimonialSection /> */}
          {/* <ClientsSection /> */}
          <ContactSection id="contact_section"/>
          {/* <Footer /> */}
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
