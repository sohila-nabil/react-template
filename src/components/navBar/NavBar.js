import React from 'react'
import { NavbarSection, Logo, LogoText, UlList, Anchor, ListItem, AnchorLink } from './style.js';

export default function NavBar() {
    
  return (
    <NavbarSection>
      <div className="container">
        <Logo>
          <LogoText>Ultra Profile</LogoText>
        </Logo>
        <UlList>
          <ListItem><AnchorLink to="/home">Home</AnchorLink></ListItem>
          <ListItem><Anchor href="#">Work</Anchor></ListItem>
          <ListItem><Anchor href="#">Portfolio</Anchor></ListItem>
          <ListItem><Anchor href="#">Resume</Anchor></ListItem>
          <ListItem><Anchor href="#">About</Anchor></ListItem>
          <ListItem><AnchorLink to="/contact">Contact</AnchorLink></ListItem>
        </UlList>
      </div>
    </NavbarSection>
  );
}
