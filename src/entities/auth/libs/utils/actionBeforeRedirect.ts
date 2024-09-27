export const actionBeforeRedirect = () => {
	localStorage.removeItem('accessToken')
	window.location.href = import.meta.env.VITE_LOGIN_URL
}
