import { UserSKillCreate, UserSkill } from "@/UserType";
import { InjectionKey, Ref } from "vue";

export const UserSkillInject: InjectionKey<{
    users: Ref<UserSkill[]>,
    request: Ref<UserSKillCreate>,
    id: Ref<string>,
    fetchData: (username?: string) => void
}> = Symbol('UserSkillInject')