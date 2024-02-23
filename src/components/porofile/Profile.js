import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {
  ProfileSkills,
  ProfileSections,
  ProfileTitle,
  ProfileTitleSpan,
  Title,
  ProfileList,
  ProfileItem,
  Span,
  SkillSection,
  SkillTitle,
  SkillTitleSpan,
  SkillsDesc,
  Bar,
  Percentage,
  ParentSpan,
  Parent,
} from "./style";


export default function Profile() {
  const [skillsData, setSkillsData] = useState([]);

  useEffect(() => {
    axios.get("data/data.json").then((res) => setSkillsData(res.data.Profile));
  },[skillsData])

  return (
    <ProfileSkills>
      <div className="container">
        <ProfileSections>
          <ProfileTitle>
            <ProfileTitleSpan>My </ProfileTitleSpan>Profile
          </ProfileTitle>
          <ProfileList>
            <ProfileItem>
              <Span>Name</Span>
              Sohila Nabil
            </ProfileItem>
            <ProfileItem>
              <Span>Birthday</Span>
              14/7/2001
            </ProfileItem>
            <ProfileItem>
              <Span>Address</Span>
              El-minya
            </ProfileItem>
            <ProfileItem>
              <Span>Phone</Span>
              4444 5555 6666
            </ProfileItem>
            <ProfileItem>
              <Span>Email</Span>
              sohaila@sohaila.com
            </ProfileItem>
            <ProfileItem>
              <Span>Website</Span>
              <Span web>www.google.com</Span>
            </ProfileItem>
          </ProfileList>
        </ProfileSections>

        <SkillSection>
          <SkillTitle>
            Some <SkillTitleSpan>skills</SkillTitleSpan>
          </SkillTitle>
          <SkillsDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            praesentium blanditiis esse cupiditate, omnis similique.
          </SkillsDesc>

          {skillsData.map((skill) => {
            return (
              <Bar key={skill.id}>
                <Title>{skill.name}</Title>
                <Percentage>{skill.percentage}</Percentage>
                <Parent>
                  <ParentSpan style={{ width: skill.percentage }}></ParentSpan>
                </Parent>
              </Bar>
            );
          })}
        </SkillSection>
      </div>
    </ProfileSkills>
  );
}
