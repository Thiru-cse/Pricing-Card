import './App.css';
const dataFree={
   "head":["FREE","0"],
   "body":{
     "check":["Single User","5GB Storage","Unlimited Public Projects","Community Access"],
     "cross":["Unlimited Private Projects","Dedicated Phone Support","Free Subdomain","Monthly Status Reports"]
   }
  };
  const dataPlus={
    "head":["PLUS","9"],
    "body":{
      "check":["5 Users","50GB Storage","Unlimited Public Projects","Community Access","Unlimited Private Projects","Dedicated Phone Support","Free Subdomain"],
      "cross":["Monthly Status Reports"]
    }
   };
   const dataPro={
     "head":["PRO","49"],
     "body":{
       "check":["Unlimited Users","150GB Storage","Unlimited Public Projects","Community Access","Unlimited Private Projects","Dedicated Phone Support","Unlimited Free Subdomain","Monthly Status Reports"],
       "cross":[]
     }
    };
function App() {
  return (
      <section className="pricing py-5">
      <div className="container">
      <div className="row">
      <CardComp data={dataFree}/>
      <CardComp data={dataPlus}/>
      <CardComp data={dataPro}/>
      </div>
      </div>
      </section>
  );
}
function CardComp({data}) {
  return (
    <div className="col-lg-4">
    <div className="card mb-5 mb-lg-0">
      <div className="card-body">
        <HeaderComp headdata={data.head}/>
        <CardBodyComp bodydata={data.body}/>
        <ButtonComp/>
      </div>
      </div>
      </div>
  );

}
function HeaderComp({headdata}) {
  return (
    <>
      <h5 className="card-title text-muted text-uppercase text-center">{headdata[0]}</h5>
      <h6 className="card-price text-center">${headdata[1]}<span className="period">/month</span></h6>
      <hr></hr>
    </>
  );

}
function CardBodyComp({bodydata}) {
  return (
    <ul class="fa-ul">
      {
        bodydata.check.map((check)=><li><span className="fa-li"><i className="fas fa-check"></i></span>{check}</li>)}
      {  bodydata.cross.map((cross)=><li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{cross}</li>)}
    </ul>
  );

}
function ButtonComp() {
  return (
    <div className="d-grid">
    <a href="#" className="btn btn-primary text-uppercase">Button</a>
  </div>
  );}


export default App;
