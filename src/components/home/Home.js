import React from 'react'
import {HomeSection, HomeInformation, HomeTitle, HomeInfo, HomeDescription, Span, HomeBtn} from "./style";


export default function Home() {
  return (
    <HomeSection>
      <div className="container">
        <HomeInformation>
          <HomeTitle>Sohila Nabil</HomeTitle>
          <HomeInfo>Creative Director</HomeInfo>
          <HomeDescription>
            Iam a professional <Span>UX Designer</Span> and Front-End Developer
            creating modern and resposive designs to Web and Mobile. Let us work
            together. Thank you.
          </HomeDescription>
          <HomeBtn>Let's Begin</HomeBtn>
        </HomeInformation>
      </div>
    </HomeSection>
  );
}
