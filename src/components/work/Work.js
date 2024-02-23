import React, {useState, useEffect} from 'react'
import {WorkSection, WorkTitle, Span, Part, Icon, PartTitle, PartDesc, Line} from "./style";
import axios from 'axios';

export default function Work() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get("data/data.json")
      .then((res) => setData(res.data.works ));
  },[data])
  return (
    <WorkSection>
      <div className="container">
        <WorkTitle>
          <Span>My</Span> Work
        </WorkTitle>

        {data.map((work) => {
          return (
            <Part first={work.id} key={work.id}>
              <Icon className={work.icon_name}></Icon>
              <PartTitle>{work.title}</PartTitle>
              <Line />
              <PartDesc>{work.body}</PartDesc>
            </Part>
          );
        })}
       

        {/* <Part>
          <Icon className="icon fa fa-bolt fa-2x"></Icon>
          <PartTitle>Mobile Ux</PartTitle>
          <Line />
          <PartDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
            quos omnis voluptas ea ipsam! Voluptas.
          </PartDesc>
        </Part>

        <Part>
          <Icon className="icon fa fa-tachometer fa-2x"></Icon>
          <PartTitle>Mobile Ux</PartTitle>
          <Line />
          <PartDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
            quos omnis voluptas ea ipsam! Voluptas.
          </PartDesc>
        </Part> */}
      </div>
    </WorkSection>
  );
}
