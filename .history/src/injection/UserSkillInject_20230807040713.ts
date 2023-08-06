import { User } from "@/UserType";
import { InjectionKey, Ref } from "vue";

export const UserSkillInject: InjectionKey<{
    users: Ref<User[]>,
    fetchData: () => void
}> = Symbol('UserSkillInject')