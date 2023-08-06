import axios from "axios";
import { User, UserSKillCreate, UserSkill, userCreate } from './UserType'
export const fetchUser = () => axios.get<User[]>(`${process.env.VUE_APP_BACKEND_URL}/user`)
export const createUser = (params: userCreate) => axios.post<User>(`${process.env.VUE_APP_BACKEND_URL}/user/create`, params)

export const fetchUserSkill = (username: string) => axios.get<UserSkill[]>(`${process.env.VUE_APP_BACKEND_URL}/user-skill/${username}`)
export const createUserSkill = (params: UserSKillCreate) => axios.post<User>(`${process.env.VUE_APP_BACKEND_URL}/user-skill/create`, params)
export const updateUserSkill = (id: string, params: UserSKillCreate) => axios.post<User>(`${process.env.VUE_APP_BACKEND_URL}/user-skill/update/${id}`, params)