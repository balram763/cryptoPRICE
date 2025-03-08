import React, { useEffect } from 'react'
import Allcoins from '../components/Allcoins'
import { getTrendingCoins } from '../features/coins/coinSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {

 const dispatch = useDispatch()
 const navigate = useNavigate()
 const { coins, isLoading } = useSelector((state) => state.Coins);
 const { user } = useSelector((state) => state.auth);


 
 



  useEffect(() => {
    dispatch(getTrendingCoins());

    // if(!user){
    //   navigate("/login")
    //  }
  }, []);
  return (
    <>
     <Allcoins/>
    {/* <Container sx={{padding:'80px 0px'}}>
        <Typography variant='h4' textAlign={'center'}>Top Trending coins</Typography>
       
    </Container> */}



    </>
  )
}

export default Home
