export type User = {
    id: string,
    username: string
}
export type userCreate = Pick<User, 'username'>