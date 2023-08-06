import { UserSKillCreate, UserSkill } from "@/UserType";
import { InjectionKey, Ref } from "vue";

export const UserSkillInject: InjectionKey<{
    users: Ref<UserSkill[]>,
    isUpdate: Ref<boolean>,
    fetchData: () => void
}> = Symbol('UserSkillInject')