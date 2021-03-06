import axios from 'axios';
import Cookies from 'js-cookie';

const api = axios.create({
	// baseURL: process.env.REACT_APP_API_URL,
	baseURL: 'https://navedex-api.herokuapp.com/v1',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${Cookies.get('nave_token')}`
		}
	}); 
	
	export function setAccessToken(token: string) {
		Cookies.set('nave_token', token);
		api.defaults.headers = {
			Authorization: `Bearer ${Cookies.get('nave_token')}`
		}
	}

	export function isUserAuthorized() {
		if(Cookies.get('nave_token') != 'null'){
			return true;
		}
		else return false;
	}

export default api; 
