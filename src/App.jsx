import './App.css';


function App(props) {
  return(
    <img key={props.id} src={props.imgUrl} alt="" />
  )
}

export default App
