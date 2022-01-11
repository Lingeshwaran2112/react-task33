import { useState} from "react";
import "./App.css";
import { MovieList } from "./MovieList";

import TextField from '@mui/material/TextField';
import { Switch, Route, Link } from "react-router-dom";
import { Button } from "@mui/material";
import React from "react";



export default function App() {
 console.log("Hi");




/* For Using Api
useEffect(() => {
fetch("https://6166c4df13aa1d00170a6708.mockapi.io/movies")
.then((data) => data.json())
.then((mvs) => setMovies(mvs));
}, []);

*/








 const INITIAL_MOVIES = [
  {
    name:"Spiderman No Way Home",
  poster:"https://terrigen-cdn-dev.marvel.com/content/prod/1x/spider-mannowayhome_lob_crd_03.jpg",
  rating: 9.8,
  summary: `Awesome Movie`,
  },
  {
  name:"Venom 2",
  poster:"https://thakoni.com/wp-content/uploads/2020/09/Venom-2-Release-Date-Delayed-amp-What-We-Know-So.jpgfit768960ssl1-1200x1500.jpeg",
  rating: 8.6,
  summary: `Awesome Movie`,
  },
  {
  name:"KGF",
  poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPjeMZ8By7pXrKnBwMtW4UUOEuRoeXrv4JhA&usqp=CAU",
  rating: 8.6,
  summary: `Nice Movie`,
  },
  {name:"Avengers",
  poster:"https://image.api.playstation.com/vulcan/img/cfn/11307mfB_C9XcqTOrc2UYKVwNS-Im4Ncsv0WDC50BU-j1hyUXTfzKxgxKSMz_mbBtVoQmuvDLHzPclp__egUa2LmmHoD6uEO.png",
  rating: 8.6,
  summary: `Nice Movie`,
  },
  {
  name:"Iron Man",
  poster:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_2_5x/sources/r1/cms/prod/4432/674432-v",
  rating: 9.6,
  summary: `Nice Movie`,
  },
  {
  name:"Master",
  poster:"https://m.media-amazon.com/images/M/MV5BNmU1OTYzYzAtMDcyOS00MDI0LTg2ZmQtYTEyMDdmMmQ0MjY5XkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_FMjpg_UX1000_.jpg",
  rating: 9.6,
  summary: `Awesome Movie`,
  },
  {
  name: "Thuppakki",
  poster:"https://upload.wikimedia.org/wikipedia/en/8/8c/Thuppakki_Audio.jpg",
  rating:9.6,
  summary: `Mass Movie`,
  }
];








const [movies, setMovies] = useState(INITIAL_MOVIES);


 
  










return(<div className ="App">
   <nav>
    <Link to="/"><Button variant="contained">Home</Button></Link> 
<Link to="/movies"><Button variant="contained">Movies</Button></Link> 
<Link to="/add-movies"><Button variant="contained">Add Movies</Button></Link> 
<Link to="/tic-tac-toe"><Button variant="contained">Game</Button></Link> 
<Link to="/color-game"><Button variant="contained">Color Game</Button></Link> 
</nav>
<Switch>
  <Route path="/movies">
    <MovieList movies = {movies}  />
    </Route>
  <Route path="/add-movies">
    <AddMovie movies = {movies} setMovies = {setMovies}/>
    </Route>

    <Route path="/tic-tac-toe">
    <TicTacToe/>
    </Route>

  <Route path="color-game">
 <AddColor />
  </Route>
          <Route path="/"><p style={{color:"blue"}}>Welcome to All..!</p> 
          {/* eslint-disable-next-line  */}
  <img src="https://i.ytimg.com/vi/MH4LLurnoWk/maxresdefault.jpg" className="Centre"></img>
  {/*<background img src="https://i.pinimg.com/originals/18/c2/b5/18c2b54d2c1c4715b8607f5f092948cf.jpg"></background>*/}
          </Route>
  </Switch>

</div>
);
}

function AddMovie({movies, setMovies})
{  
const [name, setName] = useState("");
const [poster, setPoster] = useState("");
const [rating, setRating] = useState("");
const [summary, setSummary] = useState("");

const addMovie = () => {
  const newMovie = {
    name,
    poster,
    rating,
    summary,};
    console.log(newMovie);
setMovies([...movies, newMovie]);
  };

return(
    <div className="add-movie-form">
      <TextField 
      value={name}
      onChange={(event) => setName(event.target.value)} 
      label="Name"
      variant="standard" />
      <TextField 
      value={poster}
      onChange={(event) => setPoster(event.target.value)} 
      label="poster"
      variant="standard" />
      <TextField 
      value={rating}
      onChange={(event) => setRating(event.target.value)} 
      label="rating"
      variant="standard" />
      <TextField 
      value={rating}
      onChange={(event) => setSummary(event.target.value)} 
      label="summary"
      variant="standard" />
<Button onClick={addMovie} variant="outlined">
  Add movie
</Button>


  </div>
);
}



function AddColor() { 
  const [color, setColor] = useState("orange");
  const styles = { backgroundColor : color};
  const [colors, setColors] = useState(["teal", "orange", "lavender"]);
return(
  <div>
<div className="add-color-form">
<TextField 
      value={color}
      onChange={(event) => setColor(event.target.value)}
      style={styles} 
      label="Enter a color"
      variant="standard" />

      <Button onClick={() => setColors([...colors, color])}
      variant="outlined">
        Add color
      </Button>
      </div>
 {colors.map((clr, index) => (
  <ColorBox key={index} color={clr}/>
 ))}
    </div>
);
}

function ColorBox({ color })
{
  const styles = {
  backgroundColor: color, 
  height: "25px", 
  width:"250px",
  marginTop: "10px",
  };
  return <div style={styles}></div>;
}




function TicTacToe()
{
  
  const[board, setBoard] = useState([
null,
null,
null,
null,
null,
null,
null,
null,
null,

  ]);

  const [isXTurn, setIsXTurn] = useState(true);

  const decideWinner = (board) => {
const lines = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,60],
];

for(let i=0; i<lines.length; i++)
{
  const [a,b,c] = lines[i];
  if (board[a] === null && board[a] === board[b] && board[b] === board[c])
  {
    console.log("winner is", board[a]);
    return board[a];
  
  }
}
return null;
};

const winner = decideWinner(board);

const handleClick = (index) => {

  if (winner===null&& !board[index])
  {
    const boardCopy = [...board];
    boardCopy[index] = isXTurn ? "X" : "0";
    setBoard(boardCopy);
    setIsXTurn(!isXTurn);
  }
};

return(
<div className ="full-game">
  <div className="board">
{board.map((val, index) => (
  <GameBox val = {val} onPlayerClick={()=> handleClick(index)} />
))}

</div>
{winner ? <h2>Winner is: {winner}</h2>: ""}
  </div>
);
}







function GameBox({ onPlayerClick, val})
{
const styles = { color: val === "X" ? "green" : "red" };
return(
  <div style = {styles} onClick={onPlayerClick} className="game-box">

{val}
</div>
);
}














