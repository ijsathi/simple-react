import './App.css';
import Countries from './components/Countries/Countries';
import Person from './components/Countries/person/Person';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
      <Person></Person>
    </div>
  );
}
// function Countries(){
//   const [countries,setCountries] = useState([]);
//   useEffect(() =>{
//     fetch('https://restcountries.eu/rest/v2/all')
//     .then(res => res.json())
//     .then(data => setCountries(data))
//   },[])
//   return (
//     <div>
//       <h1>Travelling around the Wourld!!!</h1>
//       <h2>Countries Available: {countries.length}</h2>
//       {
//         countries.map(country => <Country name={country.name} capital={country.capital} region={country.region}></Country>)
//       }
//     </div>
//   )
// }
// function Country(props){
//   return (
//     <div>
//       <h3>Country Name: "{props.name}"</h3>
//       <h5>Capital: "{props.capital}", Region: "{props.region}"</h5>
//     </div>
//   )
// }
export default App;
