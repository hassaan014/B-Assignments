import React from 'react'
import Links from './Links'
import "./Footer.css"

const Footer = () => {
    return (
        <div id='footer'>
            <div id="part1">
                <div id='recommend' style={{width:"20%"}}>
                    <div className='heading'>Recommended</div>
                    <div className='opt'>
                        <Links name="realme C75" />
                        <Links name="realme 13+ 5G" />
                        <Links name="realme Note 60" />
                        <Links name="realme C61" />
                        <Links name="realme C65" />
                        <Links name="realme 12" />
                        <Links name="realme 12+ 5G" />
                    </div>
                </div>
                <div id='supp' style={{width:"20%"}}>
                    <div className='heading'>Support</div>
                    <div className='opt'>
                        <Links name="FAQ" />
                        <Links name="Troubleshooting" />
                    </div>
                </div>
                <div id='about' style={{width:"20%"}}>
                    <div className='heading'>About realme</div>
                    <div className='opt'>
                        <Links name="Our Brand" />
                        <Links name="Newsroom" />
                    </div>
                </div>
                <div id='contact' style={{width:"23%"}}>
                    <div className='heading'>Contact realme</div>
                    <div className='opt'>
                        <Links name="Whatsapp" />
                        <Links name="service.pk@realme.com" />
                    </div>
                </div>
                <div id='link' style={{width:"17%"}}>
                    <div style={{fontSize:"24px",color:"white",fontWeight:"700",marginBottom:"10px"}}>04238048018</div>
                    <div className="opt1">
                    <Links name="09:30 - 18:00， MON - SAT" />
                    <Links name="Exclude Holidays" />
                    </div>
                    <div style={{width:"100%",display:"flex",justifyContent:"space-between",margin:"3%",marginLeft:"0"}}>
                        <img style={{width:"40px"}} src="./src/assets/facebookicon.png"/>
                        <img style={{width:"40px"}} src="./src/assets/xicon.png"/>
                        <img style={{width:"40px"}} src="./src/assets/youtubeicon.png"/>
                        <img style={{width:"40px"}} src="./src/assets/instagramicon.png"/>
                    </div>
                </div>
            </div>

            <div id="seperator"></div>

            <div id='part2'>
                <div style={{display:"flex",width:"30%",justifyContent:"space-between"}}>
                <div style={{color:"rgb(210, 210, 210)",fontSize:"12px"}}>Pakistan( English / PKR )</div>
                <div style={{color:"rgb(131, 129, 129)",fontSize:"12px"}}>© 2019-2024 realme. All Rights Reserved.</div>
                </div>
                <div style={{color:"rgb(131, 129, 129)",fontSize:"12px"}}>User Agreement | Privacy Policy | Terms of Sales | Warranty Terms</div>
            </div>
        </div>
    )
}

export default Footer