import React, { PureComponent } from "react";
import {
  HeaderContainer,
  HeaderSectionWrapper,
  HeaderSection,
  ProfileSection,
  SectionHeading,
  SectionInfo
} from "../styles/header";
import { AppContainer } from "../styles/common";

class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <AppContainer>
        <HeaderContainer>
          <HeaderSectionWrapper>
            <ProfileSection>profile</ProfileSection>
          </HeaderSectionWrapper>
          <HeaderSectionWrapper>
            <HeaderSection>
              <SectionHeading>Daily Gain</SectionHeading>
              <SectionInfo>$789</SectionInfo>
            </HeaderSection>
          </HeaderSectionWrapper>
          <HeaderSectionWrapper>
            <HeaderSection>
              <SectionHeading>Daily Gain(in %)</SectionHeading>
              <SectionInfo>$7%</SectionInfo>
            </HeaderSection>
          </HeaderSectionWrapper>
        </HeaderContainer>
      </AppContainer>
    );
  }
}

export default Header;
