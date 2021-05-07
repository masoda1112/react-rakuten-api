import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

const getHotels = () => {
  const q = "ディズニー"
  return axios.get(`https://app.rakuten.co.jp/services/api/Travel/KeywordHotelSearch/20170426?&applicationId=1045672106844728294&format=json&keyword=${q}`)
}

const App =()=> {
  const [hotels, setHotels] = useState([])
  // const [hotels, setHotels] = useState([]);
  // setHotels(getHotel())

  useEffect(async () => {
    const res = await getHotels()
    const hotels = res.data
    setHotels(hotels.hotels)
  }, [])

  // mapがうまくいかない仮説：配列になってない
  console.log(hotels)
  // console.log(hotels[0].hotel[0])
  return (
    <div className="App">
      {hotels.length > 1 && 
      // mapする時にkeyidを入れることで、後から指定してスタイル変更などができなくなる
        hotels.map((hotel, id)=>{
          console.log(hotel.hotel[0])
          return(
            <div className="hotel" key={id}>
              <div className="hotel-name">{hotel.hotel[0].hotelBasicInfo["hotelName"]}</div>
              <div className="hotel-access">{hotel.hotel[0].hotelBasicInfo["access"]}</div>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
