import{d as i,j as e,e as b,f as v,S as w,P as C,b as d}from"./index-BnRx_xqe.js";import{b as o}from"./vendor-CpgsISC5.js";import"./icons-iPGFHlLA.js";const k=i.div`
  position: relative;
  transform-style: preserve-3d;
  margin: 80px auto;
  width: 820px;
  height: 560px;
  perspective: 1250px;
`,S=i.div`
  width: 100%;
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
  transform: ${s=>s.$rotation?`translateZ(-850px) rotateY(${-s.$rotation}deg)`:"translateZ(-850px)"};
  will-change: transform;
`,$=i.div`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 780px;
  height: 520px;
  transition: transform 1s, opacity 1s;
  background: rgba(0,0,0,.9);
  border: 1px solid white;
  border-radius: 10px;
  box-shadow:
    0 0 7px #fff,
    0 0 10px #fff;
  will-change: transform;
  backface-visibility: hidden;

  // Set the initial position of all carousel cells in a 3d circle
  &:nth-child(1) { transform: rotateY(  0deg) translateZ(600px); }
  &:nth-child(2) { transform: rotateY( 72deg) translateZ(600px); }
  &:nth-child(3) { transform: rotateY(144deg) translateZ(600px); }
  &:nth-child(4) { transform: rotateY(216deg) translateZ(600px); }
  &:nth-child(5) { transform: rotateY(288deg) translateZ(600px); }
`,a=i.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: auto 40px;
`,I=i.div`
  display: flex;
  justify-content: center;
  transition: all 1s;
`,l=i.button`
  background-color: black;
  border: 1px solid white;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  margin: 0 10px;
  cursor: pointer;

  ${s=>s.$active&&{backgroundColor:"white"}};
`,Z="/assets/umd-Dx9rz2d5.png",A="/assets/hcc-BKO4FO0e.png",R="/assets/snowboard-QTOkK964.png",p=i.img`
  height: 150px;
  border-radius: 10px;

  &.snowboard {
    height: 300px;
  }
`,f=i.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;


  &.education {
    align-items: start;
  }
`,Y=[e.jsxs(a,{children:[e.jsx("h1",{children:"Hello! 👋🏻 I'm Jay! 👨🏻‍💻 "}),e.jsx(d,{children:"I'm a problem solver at heart. By studying computer science, I've discovered my passion for using technology to enhance everyday life. Whether it's crafting engaging websites, empowering apps, or streamlining work, I'm dedicated to creating solutions that make a tangible impact. My goal is to add enjoyment to the ordinary and increase accessibility to the extraordinary. Welcome to my journey of innovation!"})]}),e.jsx(a,{children:e.jsxs(f,{className:"education",children:[e.jsxs("div",{className:"umd",children:[e.jsx(p,{src:Z,alt:"umd"}),e.jsx("h3",{children:"University of Maryland"}),e.jsxs(d,{children:["Bachelors in Computer Science",e.jsx("br",{}),"Minor in Real Estate"]})]}),e.jsxs("div",{className:"hcc",children:[e.jsx(p,{src:A,alt:"umd"}),e.jsx("h3",{children:"Howard Community College"}),e.jsx(d,{children:"Associate in Cybersecurity"})]})]})}),e.jsxs(a,{children:[e.jsx("h1",{children:"Approach to Work ✅"}),e.jsxs("ul",{style:{textAlign:"left"},children:[e.jsx("li",{children:"Meticulous attention to detail and a drive for excellence."}),e.jsx("li",{children:"Continual learning and applying new insights to my toolbox."}),e.jsx("li",{children:"Going above and beyond to satisfy and impress."}),e.jsx("li",{children:"Keeping up to date with the latest tech and tools."}),e.jsx("li",{children:"Always keeping the customer in mind."}),e.jsx("li",{children:"Improving the lives of others."})]})]}),e.jsxs(a,{children:[e.jsx("h1",{children:"Getting Outside 🏔️"}),e.jsxs(f,{children:[e.jsxs(d,{style:{width:"60%"},children:["Following my academic achievements, I sought an environment that more closely resonates with my adventurous spirit and active lifestyle, which I accomplished by relocating to the happiest place in the US, Boulder, Colorado, bringing me within view of breathtaking mountains, invigorating ",e.jsx("s",{style:{color:"red"},children:"ski"})," snowboard resorts, and a wonderfully active community."]}),e.jsx(p,{className:"snowboard",src:R,alt:"snowboard"})]})]}),e.jsx(a,{children:e.jsxs("h1",{children:["I'm currently on the hunt for exciting opportunities!",e.jsx("br",{}),e.jsx("br",{}),"Send me a message! 😄"]})})],B=()=>{const[s,j]=o.useState(0),[t,m]=o.useState(0),[h,n]=o.useState(0),[r,g]=o.useState(!1),[u,y]=o.useState(0);return o.useEffect(()=>{if(s<.4||s>.6)r&&(y(t),g(!1)),m(u-s*360);else{r||g(!0);const x=Math.floor(t/360)*360+h*72;m(x)}},[u,r,s,t,h]),e.jsx(e.Fragment,{children:e.jsx(b,{children:e.jsxs(v,{children:[e.jsx(w,{children:"About"}),e.jsx(C,{style:{height:"100%"},rotate:[-20,20],onProgressChange:c=>j(c),children:e.jsx(k,{onClick:()=>n((h+1)%5),children:e.jsx(S,{$rotation:t,style:{transition:r&&"all 1s"},children:Y.map((c,x)=>e.jsx($,{children:c},x))})})}),e.jsxs(I,{style:{opacity:!r&&0},children:[e.jsx(l,{$active:t%360>=0&&t%360<72,onClick:()=>n(0)}),e.jsx(l,{$active:t%360>=72&&t%360<144,onClick:()=>n(1)}),e.jsx(l,{$active:t%360>=144&&t%360<216,onClick:()=>n(2)}),e.jsx(l,{$active:t%360>=216&&t%360<288,onClick:()=>n(3)}),e.jsx(l,{$active:t%360>=288&&t%360<360,onClick:()=>n(4)})]})]})})})};export{B as default};
