import React from 'react'
import AlertSection from '../AlertSection/AlertSection';
import FirstSection from '../FirstSection/FirstSection';
import SecondSection from '../SecondSection/SecondSection';
import ThirdSecttion from '../ThirdSection/ThirdSection';
import FourthSection from '../FourthSection/FourthSection';
import FifthSection from '../FifthSection/FifthSection';
import SixthSection from '../SixthSection/SixthSection';
import AppleYoutube from '../AppleYoutube/AppleYoutube';

function MainSection() {
  return (
    <div>
      {/* Alert navigation */}
      <AlertSection />
      {/* First section */}
      <FirstSection />
      {/* Second section */}
      <SecondSection />
      {/* Third section */}
      <ThirdSecttion />
      {/* Fourth section */}
      <FourthSection />
      {/* Fifth section */}
      <FifthSection />
      {/* Sixth section */}
      <SixthSection />
      {/* Footer navigation */}
      <AppleYoutube />
    </div>
  );
}

export default MainSection