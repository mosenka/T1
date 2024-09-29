import { TypedUseSelectorHook, useSelector } from 'react-redux'

import { RootState } from '@app/model/store'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
