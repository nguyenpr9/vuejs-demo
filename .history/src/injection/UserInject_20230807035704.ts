import { User } from "@/UserType";
import { InjectionKey, Ref } from "vue";

export const UserInject: InjectionKey<{
    users: Ref<User[]>,
    fetchData: () => void
}> = Symbol('UserInject')