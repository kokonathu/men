// import './App.css';
import React, { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import { postAxios } from '../method/postAxios';
// import { test } from '../flask-app';

export function Test() {
  const [getMessage, setGetMessage] = useState({})

  useEffect(()=>{
    return;
  }, [])

  const Test_API = async () => {
	const res:AxiosResponse<any> = 
		await postAxios.post('/company_regist/insert').catch(e => {throw e});
		alert(res.data.return_value)
  	};
	

	  
  return (
	<div>
		<p>t</p>
		<button onClick={Test_API}>botan</button>
	</div>
  );
}
