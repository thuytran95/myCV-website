import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
          Welcom to <br/>
          My personal Portfolio
      </SectionTitle>
      <SectionText>
        Think fast make smart
      </SectionText>
      <Button onClick ={() => window.location='https://gooogle.com'}>Learn more</Button>
    </LeftSection>
  </Section>
);

export default Hero;