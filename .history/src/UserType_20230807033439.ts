export type User = {
    id: string,
    username: string
}
export type userCreate = Pick<User, 'username'>

export type UserSkill = {
    id: string,
    username: string,
    skill: string,
    level: number
}