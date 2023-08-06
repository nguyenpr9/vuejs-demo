import { UserSKillCreate, UserSkill } from "@/UserType";
import { InjectionKey, Ref } from "vue";

export const UserSkillInject: InjectionKey<{
    users: Ref<UserSkill[]>,
    request: UserSKillCreate,
    isUpdate: boolean
    fetchData: () => void
}> = Symbol('UserSkillInject')