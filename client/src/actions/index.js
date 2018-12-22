import axios from 'axios';
import {FETCH_USER} from './types';

/*
//action creator called, returns function, redux thunk see function return
calls with dispatch and we then make a request. we wait until we get a response back from our api
than finally actually dispatch action
*/
export const fetchUser = ()=> async dispatch =>{
   const res = await axios.get('/api/current_user')
        dispatch({type: FETCH_USER, payload:res});
   };
4