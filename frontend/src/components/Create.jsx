import { React, useState, useEffect} from 'react';
import AxiosInstance from './Axios';

const Create = () => {

  const [country, setCountry] = useState([]);
   const [league, setLeague] = useState([]);
    const [characteristic, setCharacteristic] = useState([]);


  console.log('country', country);
  console.log('league', league);
  console.log('characteristic', characteristic);

  const GetData = () => {
    AxiosInstance.get('country/').then((response) => {
      setCountry(response.data);
    });

    AxiosInstance.get('league/').then((response) => {
      setLeague(response.data);
    });

    AxiosInstance.get('characteristic/').then((response) => {
      setCharacteristic(response.data);
    });
  };

  useEffect(() => {
    GetData();
  }, []);

  return (
    <div>
      <h1>This is the Create Page</h1>
    </div>
  )
}

export default Create
