import useSwr from 'swr';
import api from '../functions/api';

export function getNavers<Data = any>(url: string) {
	const {data, error, mutate} = useSwr<Data>(url, async url => {
		try {
			const response = await api.get(url);
			const data = await response.data;
			return data;

		} catch( err ) {
			console.log(err);
		}
	}, {
		revalidateOnFocus: true,
		revalidateOnMount: true,
		refreshWhenHidden: true
	})

	return {data, error, mutate}
}