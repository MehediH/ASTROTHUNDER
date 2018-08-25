import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class HomeScreen extends Component {
  render() {
    return (
        <div className="app">
            <div className="wrapper">
                <header>
                    <h1><Link to="/">mehedi hassan</Link></h1>
                    <div>
                        <span></span><span class="alt"></span>
                    </div>
                </header>
                
                <div className="ratchet">
                    <div className="hey-how-are-you">
                        <h1>a creative designer/developer based in london.</h1>
                        <h2>i craft beautiful, robust, and effortless web-based experiences.</h2>
                    </div>

                    <div className="nice-smort">
                        <Link to="./projects">
                            <div className="i-am-good">
                                <h2>see my projects</h2>
                            </div>
                        </Link>

                        <Link to="./contact">
                            <div className="how-about-you">
                                <h2>let's work together.</h2>
                            </div>
                        </Link>
                    </div>
                </div>

                <span dangerouslySetInnerHTML={{__html: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1799" height="344"><g><defs><path d="M 0 330 L 223.578 126 L 466.966 330 L 563.19 164 L 638.659 330 L 774.504 0 L 1126 344 L 1293.356 50 L 1533.914 305 L 1717.87 20 L 1799 60" id="a1000z"></path><filter id="a1006z" x="-1.4%" y="-7.1%" width="102.5%" height="112.9%" filterUnits="objectBoundingBox"><feOffset dx="5" dy="5" in="SourceAlpha" result="a1008z"></feOffset><feGaussianBlur stdDeviation="0" in="a1008z" result="a1009z"></feGaussianBlur><feColorMatrix color-interpolation-filters="sRGB" values="0 0 0 0 0.725   0 0 0 0 0.082   0 0 0 0 0.337  0 0 0 1 0" type="matrix" in="a1009z" result="a1010z"></feColorMatrix></filter></defs><g filter="url(#a1006z)"><use stroke-width="9" stroke="black" fill="black" fill-opacity="0" stroke-opacity="1" xlink:href="#a1000z" clip-path="url(#a1001z)"></use></g><use xlink:href="#a1000z" fill="transparent" clip-path="url(#a1001z)" stroke-width="9" stroke="#7755CC"></use></g></svg>'}} />
            </div>

            <div className="background-overlay">
                {
                    [...Array(50)].map((e, i) => <span></span>)
                }
            </div>
        </div>
    )
  }
}
