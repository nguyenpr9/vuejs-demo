export type User = {
    _id: string,
    username: string
}
export type userCreate = Pick<User, 'username'>

export type UserSkill = {
    _id: string,
    username: string,
    skill: string,
    level: number
}

export type UserSKillCreate = Omit<UserSkill, '_id'>

export type UserSKillUpdate = Omit<UserSkill, '_id' | 'username'>