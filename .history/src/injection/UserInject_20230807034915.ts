import { User } from "@/UserType";
import { InjectionKey, Ref } from "vue";

export const UserInject: InjectionKey<{
    user: Ref<User[]>,
    fetchUser: () => void
}> = Symbol('UserInject')