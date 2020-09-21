import React from 'react';
import css from './SessionPage.module.scss';
import Header from "@components/Header/Header";
import LineBackground from "@svgs/LineBackground/LineBackground";
import HeroSection from "@components/HeroSection/HeroSection";
import AboutSection from "@components/AboutSection/AboutSection";
import PreRegistrationSection from "@components/PreRegistrationSection/PreRegistrationSection";
import NoticeSection from "@components/NoticeSection/NoticeSection";
import RegisterSection from "@components/RegisterSection/RegisterSection";
import Footer from "@components/Footer/Footer";
import SpeakerListSection from "@components/SpeakerListSection/SpeakerListSection";

interface SessionPageProps {}

const SessionPage: React.FC<SessionPageProps> = () => {
  return (
    <div className={css.SessionPage}>
      <Header />
      <div className={css.sections}>
        {/*<LineBackground />*/}
        <HeroSection />
        <AboutSection />
        <SpeakerListSection/>
        <PreRegistrationSection />
        <NoticeSection />
        <RegisterSection />
      </div>
      <Footer />
    </div>
  );
}

export default SessionPage;
