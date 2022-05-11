import './App.css';
import { Footer } from './Footer';

export const user = {
  fistName: "Alex",
  shotBiografy: "I was born in Krivyi Rig, lived here most of my life. I graduated from a technical university with a degree in electrical engineering. Worked in production and as an electrician both in Ukraine and abroad. In November 2020, I started to study Front End and continue to study it to the present.",
  publicContacts: {
    tel: 380963527936,
    email: "alex_frontend_dev@gmail.com",
  }
}

const App = () => (
  <div className="App">
    <h1>Hi! My name is {user.fistName}</h1>
    <p className='biografy'>{user.shotBiografy}</p>
    <Footer
      copyright='My contact:'
      userTel={user.publicContacts.tel}
      userEmail={user.publicContacts.email}
    />
  </div>
)


export default App;
