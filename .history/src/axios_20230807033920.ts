import axios from "axios";
import { User, userCreate } from './UserType'
export const fetchUser = () => axios.get<User[]>(`${process.env.VUE_APP_BACKEND_URL}/user`)
export const createUser = (params: userCreate) => axios.post<User>(`${process.env.VUE_APP_BACKEND_URL}/user`, params)