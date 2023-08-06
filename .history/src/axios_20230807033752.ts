import axios from "axios";
import {User} from './UserType'
export const getUser = () => axios.get(User)