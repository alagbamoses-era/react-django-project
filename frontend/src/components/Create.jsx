import { React, useState, useEffect} from 'react';
import AxiosInstance from './Axios';
import {Box, Typography} from '@mui/material';
import '../App.css';
import AddBoxIcon from '@mui/icons-material/AddBox';
import TextForm from './forms/TextForm'
import SelectForm from './forms/SelectForm';


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
      
      <Box className = "TopBar">
        <AddBoxIcon />
        <Typography sx= {{marginLeft: '15px', fontWeight: 'bold', variant:'subtitle2'}}> Create a new club </Typography>
       
        </Box>

        <Box className= 'FormBox'>
            <Box className={'FormArea'}>
              <TextForm label= {'Club name'}/>

            </Box>
            <Box className={'FormArea'}>
               <TextForm label= {'City'}/>

            </Box>
            <Box className={'FormArea'}>
              <SelectForm label={"League"}
              options={league}
              />
            </Box>

            <Box className={'FormArea'}>
              <SelectForm label={"Country"}
              options={country}
              />
            </Box>
        </Box>
    </div>
  )
}

export default Create
