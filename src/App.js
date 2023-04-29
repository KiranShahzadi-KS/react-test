// import logo from './logo.svg';
import './App.css';
import Test from './components/Test';
import Profile from './components/Profile';
import List from './components/List';

function App() {
  let arralist = [{
    name:"MERN"
  },
  {
    name:"MERN"
  },
  {
    name:"MERN"
  },{
    name:"MERN"
  }
]
  let userobj = {
    name:'Javeria',
    city:'Islamabad',
    phone:1232343
  }
  return (
    <div className="App">

      <h1> My new page</h1>
      <Test />
      <Profile user={userobj} />
      {/* <img src={logo} alt='logo' /> */}
      {/* <img src={logo} alt="img"/> */}
      
      <List list={arralist}/>
        {/* {
          arralist.map((item)=>{
           return <li>{item.name}</li>
          })
        } */}
        
      
    </div>
  );
}

export default App;
