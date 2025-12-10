import{j as e,S as i,a as o,b as r,I as n,B as a,E as s,c as d,d as t,m as l}from"./index-BnRx_xqe.js";import"./vendor-CpgsISC5.js";import"./icons-iPGFHlLA.js";const c="/assets/headshot-DgDVZoxx.png",m=t.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`,x=t.div`
  margin: 0 2.5%;
  width: 55%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 720px) {
    width: 100%;
  }
`,p=t.img`
  border-radius: 10px;
  filter: grayscale(100%);
  width: 35%;
  object-fit: cover;
  margin: 1em auto;

  @media (max-width: 720px) {
    width: 50%;
    max-height: 300px;
  }
`,h=l`
  0% { opacity: 1; }
  100% { opacity: 0; transform: translate(-10px, -10px) }
`,f=t.div`
  position: relative;
  margin: 0 auto 40px;
  width: 40px;
  min-height: 40px;
  transform: rotate(45deg);
  border-left: none;
  border-top: none;
  border-right: 1px #fff solid;
  border-bottom: 1px #fff solid;
  background-color: black;

  &:before {
    position: absolute;
    left: 50%;
    content: '';
    width: 20px;
    min-height: 20px;
    top: 50%;
    margin: -10px 0 0-10px;
    border-left: none;
    border-top: none;
    border-right: 1px #fff solid;
    border-bottom: 1px #fff solid;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-name: ${h};
  }
`,g=t.p`
  font-family: 'Italiana';
  text-align: center;
  font-size: 125%;
  margin-bottom: 10px;
  margin-top: 10vh;

  @media (max-width: 720px) {
    margin-top: 25px;
  }
`,b=t.div`
  margin-top: 2vh;
  padding: 15px;
  text-align: center;
  border-radius: 10px;
  background-color: rgba(50,50,50,.9);

  h2 {
    margin: 0 0 10px 0;
  }

  p {
    margin: 0 0 10px 0;
  }
`,y=()=>e.jsxs(e.Fragment,{children:[e.jsx(i,{className:"intro",children:"Jay Desmarais"}),e.jsxs(m,{children:[e.jsxs(x,{children:[e.jsx(o,{className:"intro",style:{fontSize:"150%"},children:"I design and build things for the web"}),e.jsxs(r,{children:["I","'","m a software engineer based in Boulder, CO with a wide range of experience and education in the realms of full-stack programming, UI/UX, algorithms, AI, cybersecurity, and more, which I pull from to design and build solutions to complex problems."]}),e.jsxs(n,{to:"/resume",style:{textDecoration:"none"},children:["Check out my Resume  ",e.jsx(a,{size:20})]}),e.jsxs(b,{children:[e.jsx("h2",{children:"🚀 Big Changes Coming Soon! 🚀"}),e.jsx("p",{children:"A major redesign of this site is in progress, check back for updates!"}),e.jsxs(s,{href:"https://github.com/jaydesmarais/jaydesmarais",target:"_blank",children:["View the source code  ",e.jsx(d,{size:20})]})]})]}),e.jsx(p,{src:c,alt:"headshot"})]}),e.jsx(g,{children:"Scroll"}),e.jsx(f,{})]});export{y as default};
