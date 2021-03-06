export default function isAuthenticated(req) {
	if (!req?.headers?.cookie) {
		return undefined;
	}

	const match = req.headers.cookie
		.split(';')
		.find((item) => item.trim().startsWith('nave_token='));

	if (!match) {
		return undefined;
	}

	return match.split('=')[1];
};