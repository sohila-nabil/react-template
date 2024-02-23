import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {PortfolioSection, PortfolioTitle, Span, PortfolioList, PortfolioItem, Div, Iemag, Overlay, OverlaySpan} from "./style.js";

export default function Portfolio() {

  const [imageData, setImageData] = useState([])
  
  useEffect(() => {
    axios.get("data/data.json").then((res) => setImageData(res.data.portfolio));
  }, [imageData])
  return (
    <PortfolioSection>
      <PortfolioTitle>
        <Span>My</Span>Portfolio
      </PortfolioTitle>
      <PortfolioList>
        <PortfolioItem active>All</PortfolioItem>
        <PortfolioItem>HTML</PortfolioItem>
        <PortfolioItem>Photoshop</PortfolioItem>
        <PortfolioItem>Wordpress</PortfolioItem>
        <PortfolioItem>Mobile</PortfolioItem>
      </PortfolioList>

      <div className="box">
        {imageData.map((img) => {
          return (
            <Div key={img.id}>
              <Iemag src={img.image} alt="img1" />
              <Overlay>
                <OverlaySpan>Show Image</OverlaySpan>
              </Overlay>
            </Div>
          );
        })}
      </div>
    </PortfolioSection>
  );
}
