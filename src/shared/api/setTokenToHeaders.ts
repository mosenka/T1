import { getAccessToken } from '@entities/auth'

export const setTokenToHeaders = async (headers: Headers) => {
	const accessToken = getAccessToken()

	if (!accessToken) {
		return headers
	}

	headers.set('Authorization', `${accessToken}`)

	return headers
}
