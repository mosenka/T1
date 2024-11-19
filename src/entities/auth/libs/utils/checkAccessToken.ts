export const checkAccessToken = () => {
	const accessToken = localStorage.getItem('accessToken')
	return !!accessToken
}
