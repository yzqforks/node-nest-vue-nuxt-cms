
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import tagsView from "@/store/modules/tagsView";
import users from '@/store/modules/user'
import errorLog from "@/store/modules/errorLog";
import {createStore} from "vuex";


const store =createStore({
  app,settings,tagsView,users,errorLog,
  getters,
})
console.log(store)
export default store
