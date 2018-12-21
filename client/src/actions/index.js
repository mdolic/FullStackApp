import axios from 'axios';
import {FETCH_USER} from './types';

/*
//action creator called, returns function, redux thunk see function return
calls with dispatch and we then make a request. we wait until we get a response back from our api
than finally actually dispatch action
*/
const fetchUser = ()=>{
   return function(dispatch){
     axios
        .get('/api/current_user')
        .then(res =>dispatch({type: FETCH_USER, payload:res}));

   }

};