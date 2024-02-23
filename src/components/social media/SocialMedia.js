import React from 'react'
import './style.css'

export default function SocialMedia() {
  return (
    <>
      <div className="social-media">
            
            <div className="social face">
                <i className="icon fa fa-facebook fa-lg"></i>
                <p>
                    <span className="info1">Follow Me on</span>
                    <span className="info2">Social Facebook</span>
                </p>
            </div>
            
            <div className="social twitter">
                <i className="icon fa fa-twitter fa-lg"></i>
                <p>
                    <span className="info1">Tweet Me on</span>
                    <span className="info2">Social twitter</span>
                </p>
            </div>
            
            <div className="social pin">
                <i className="icon fa fa-pinterest fa-lg"></i>
                <p>
                    <span className="info1">Pin Me on</span>
                    <span className="info2">Social Pinterest</span>
                </p>
            </div>
        </div>
        <div className="drop">
            <div className="container">
                <h2 className="drop-title"><span>Drop </span>Me A line</h2>
                <form>
                    <div className="form-input">
                        <input type="text" placeholder="Your Name"/>
                        <input type="email" placeholder="Your Email"/>
                    </div>
                    <input type="text" className="sub" placeholder="Your Subject"/>
                    <textarea cols="30" rows="10" placeholder="Your Message"></textarea>
                    <input type="submit" value="Send Message"/>
                </form>
            </div>
        </div>
    </>
  )
}
