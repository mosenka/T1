import { useStore } from 'react-redux'

import { AppStore } from '@app/model/store'

export const useAppStore: () => AppStore = useStore
