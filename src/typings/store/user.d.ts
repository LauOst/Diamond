/* user */
export interface UserState {
    token: string;
    sub: string;
    code: string;
    openedLogin: boolean
    roles: any[]
    permissions: string[]
    departOptions: string[]
}
