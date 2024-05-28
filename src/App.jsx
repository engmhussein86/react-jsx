import './App.css'
// import slackLogo from './assets/slack-logo.avif';
import MainContainer from './components/Container';
import { Title , Container} from './components/Container';
import Card from './components/Card';

function App() {

  const handleSubmit = () => {
  console.log('submitted');
  }

  const obj = {padding: '5px', width: '50px', backgroundColor: 'green'}

  const username = 'John';

  const imgUrl = "https://perscholas.org/wp-content/themes/per-scholas/assets/images/logo1.svg";
  const altTxt = "Perscholas Logo";

   /* <img src={slackLogo} alt={atlText}/> */

  return (
    <Container >
      <img src={imgUrl} alt={altTxt}/>

      <MainContainer/>

      <Title onClick={() => console.log('clicked')} >
        Hello React version {17 + 1}</Title>

      <h1 onClick={() => console.log('clicked')} >
        Hello React version {17 + 1}
      </h1>

      <p>Username: {username}</p>

      <form onSubmit={handleSubmit} className='form-container'>
        <input type="text" />
        <input type="submit" value="Get" style={obj}/>
      </form>

      <Card/>

    </Container>
  )
}

export default App