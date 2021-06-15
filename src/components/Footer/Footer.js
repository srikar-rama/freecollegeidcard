import React from 'react'
import "./footer.css"
function Footer() {
    return (
        <div>
            <div style={{ background: "rgb(23 22 22)", position: "relative" }}>
                <div class="love" style={{ textAlign: "center", padding: "10px 0", color: "black", color: "gray" }}>Made with ❤️ by <span style={{ color: "white", fontWeight: '600' }}>M</span>ohammed <span style={{ color: "white", fontWeight: "600" }}>A</span>zharuddin , <span style={{ color: "white", fontWeight: "600" }}>R</span>ama <span style={{ color: "white", fontWeight: "600" }}>S</span>rikar</div>
                <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
                <div class="row" style={{color:"gray",display:"flex",alignItems:"center"}}>
                <img src="/Images/githubimg.png" style={{ width: "auto", height: "30px"}}></img>Github profiles
                </div>
                    <div class="github"><a  href="https://github.com/srikar-rama" style={{ textDecoration: 'none'}}>Rama Srikar</a></div>
                    <div class="github"><a  href="https://github.com/Ajju2211" style={{ textDecoration: 'none' }}>Mohammed Azharuddin</a></div>
                </div>
                <p class="powered" style={{ textAlign: "center", margin: "0", color: "white",fontWeight:"300", height: "30px",width:"100%",background:"black",display:"flex",alignItems:"center",justifyContent:"center" }}>Powered by MARS. All copy rights reserved ( v.1 )</p>
            </div>            
        </div>
    )
}

export default Footer