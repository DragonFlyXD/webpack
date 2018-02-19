import { GetterTree } from 'vuex'
import state from './state'

const getters: GetterTree<any, any> = {
  isLogined (state): boolean {
    return state.isLogined
  }
}

export default getters
