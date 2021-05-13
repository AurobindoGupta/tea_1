
import React, { useEffect, useState } from 'react';




function App() {
  const credit_API = "https://api.themoviedb.org/3/movie/567189/credits?api_key=1c40073fce452c87ff4ca4bee5877ecf&language=en-US";
    
    const Img_API = "https://image.tmdb.org/t/p/w1280";



    const [creditDetails, setCreditDetails] = useState([]);


    useEffect(() => {
       
        getMovies(credit_API);
        
    }, []);

    const getMovies = ( API) =>{
    
    
        fetch(API)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setCreditDetails(data.results);
      });
    
}
    
    
    return (
        <h3>
             { creditDetails && creditDetails.map ((c) =>  c.name )}
        </h3>
    );
}

export default App;
