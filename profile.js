document.addEventListener("DOMContentLoaded", function () {
    // 1. Masukkan Google Font
    let e = document.querySelector(`.profile-bg-picture`);
    e.style.background=`url(https://upload.wikimedia.org/wikipedia/commons/c/c8/Flag_of_Palestine.gif)center/contain no-repeat`
    const fontLink = document.createElement("link");
    fontLink.href = "https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap";
    fontLink.rel = "stylesheet";
    document.head.appendChild(fontLink);

    // 2. Masukkan gaya CSS ke <head>
    const style = document.createElement("style");
    style.innerHTML = `
         /* ========== GLOBAL ========== */      
body {      
    margin: 0;      
    padding: 0;      
    font-family: 'Orbitron', sans-serif;      
    background: radial-gradient(circle at top left, #0f0f1f 0%, #06060d 100%);      
    color: #fff;      
    overflow-x: hidden;      
}      /* ========== ANIMATED PARTICLES BACKGROUND ========== */
body::before {
content: '';
position: fixed;
width: 200%;
height: 200%;
background-image: radial-gradient(#00ffe7 1px, transparent 1px);
background-size: 40px 40px;
opacity: 0.03;
animation: float-bg 30s linear infinite;
z-index: -1;
}
@keyframes float-bg {
from { transform: translate(0, 0); }
to { transform: translate(-200px, -200px); }
}

/* ========== PROFILE HEADER ========== */
.profile-bg-picture {
height: 260px;
background-size: cover !important;
background-position: center;
border-radius: 20px 20px 0 0;
position: relative;
overflow: hidden;
animation: pulseGlow 6s ease-in-out infinite;
}
.picture-bg-overlay {
position: absolute;
width: 100%;
height: 100%;
backdrop-filter: blur(3px);
background: rgba(0, 0, 0, 0.45);
}

/* ========== USER BOX ========== */
.profile-user-box {
background: rgba(255, 255, 255, 0.05);
backdrop-filter: blur(16px);
border-radius: 0 0 20px 20px;
padding: 30px;
margin-top: -50px;
box-shadow: 0 8px 24px rgba(0,255,255,0.1);
border: 1px solid rgba(255,255,255,0.07);
animation: fadeIn 2s ease;
}

/* ========== PROFILE IMAGE ========== */
.thumb-lg {
width: 90px;
height: 90px;
border-radius: 50%;
object-fit: cover;
border: 2px solid rgba(0,255,255,0.6);
box-shadow: 0 0 20px rgba(0,255,255,0.4);
transition: transform 0.4s ease;
}
.thumb-lg:hover {
transform: scale(1.05);
}

/* ========== TEXT ========== */
h4 {
color: #00ffe7;
font-weight: 600;
}
.text-muted small {
color: #aaa;
}
p, li {
font-size: 14px;
line-height: 1.6;
color: #ccc;
}

/* ========== BUTTON ========== */
.btn-custom {
background: linear-gradient(to right, #00ffe7, #00bcd4);
color: #000;
padding: 10px 25px;
border: none;
border-radius: 30px;
font-weight: 600;
box-shadow: 0 0 15px rgba(0,255,231,0.5);
transition: all 0.3s ease;
}
.btn-custom:hover {
background: #0ff;
box-shadow: 0 0 25px rgba(0,255,255,0.9);
}

/* ========== CARD BOX ========== */
.card-box {
background: rgba(255,255,255,0.04);
backdrop-filter: blur(10px);
border-radius: 16px;
padding: 25px;
box-shadow: 0 4px 30px rgba(0,255,255,0.08);
border: 1px solid rgba(255,255,255,0.08);
transition: transform 0.3s ease;
}
.card-box:hover {
transform: scale(1.01);
}

/* ========== RIBBON ========== */
.ribbon-custom {
background: linear-gradient(90deg, #00ffe7 0%, #00bcd4 100%);
color: #000;
font-weight: 600;
padding: 6px 14px;
border-radius: 8px 8px 0 0;
font-size: 12px;
display: inline-block;
animation: slideInLeft 1s ease-out;
}

/* ========== LISTS ========== */
ul {
padding-left: 20px;
list-style-type: square;
color: #a0fff5;
}
hr {
border: 0;
border-top: 1px solid rgba(255,255,255,0.15);
margin: 15px 0;
}

/* ========== UTILITIES ========== */
.ellipsis {
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
}
.m-l-15 { margin-left: 15px; }
.m-r-15 { margin-right: 15px; }
.m-b-0 { margin-bottom: 0; }
.m-b-5 { margin-bottom: 5px; }
.m-t-5 { margin-top: 5px; }
.text-left { text-align: left; }
.text-right { text-align: right; }

/* ========== ANIMATIONS ========== */
@keyframes pulseGlow {
0%, 100% { box-shadow: 0 0 20px rgba(0,255,255,0.2); }
50% { box-shadow: 0 0 40px rgba(0,255,255,0.4); }
}
@keyframes fadeIn {
from { opacity: 0; transform: translateY(20px); }
to { opacity: 1; transform: translateY(0); }
}
@keyframes slideInLeft {
from { transform: translateX(-100px); opacity: 0; }
to { transform: translateX(0); opacity: 1; }
}
    `;
    document.head.appendChild(style);
});
