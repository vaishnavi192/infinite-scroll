import MovieComponent from './MovieComponent';
import { useState, useEffect } from 'react';


const Movie = () => {
    const [movie, setMovie] = useState([]);
    const [page, setPage] = useState(1);
    

    const getCardData = async (pageNum)=>{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${pageNum}`)
        const data = await response.json();
        // setMovie(data); agr aise likhenge to pehli baar mein 9 items and then sab ek sath load hoke gayab hojaega
        // ya new set of 9 items aaenge hamko purane wale bhi chahiye aur naye wale bhi isliye spread operator use krke 
        // copy karenge purana wala 
        setMovie((prev) => [...prev, ...data]);
    }

    const handleScroll = async ()=>{
    try{
        if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight){
            setPage((prev) => prev + 1);
        }
    }
        catch(error){
        console.log(error);
        }
    };


    useEffect(() =>{
        getCardData(page);
    }, [page]);

    useEffect(() =>{
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll); //clean the function
    }, [])

    return (
        <>
        
        <MovieComponent movie={movie}/>
         
        </>

    );
};
export default Movie;
