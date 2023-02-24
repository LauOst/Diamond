
// * 登录模块
export interface Departs {
    departName: string
    id: string
}
interface UserTokenMsg {
    access_token: string
    code: string
    creatTime: number
    expires_in: number
    refTokenMsg: any
    refresh_token: string
    sub: string
}
export namespace Login {
    export interface ReqLoginForm {
        username: string
        password: string
    }
    export interface ResLogin {
        departs: Departs[]
        userTokenMsg: UserTokenMsg
    }
    export interface ResAuthButtons {
        [key: string]: string[]
    }
}

// * Menu
declare namespace Menu {
    interface MenuOptions {
        path: string;
        name: string;
        component?: string | (() => Promise<any>);
        redirect?: string;
        meta: MetaProps;
        children?: MenuOptions[];
    }
    interface MetaProps {
        icon: string;
        title: string;
        link?: string;
        hidden: boolean;
        noCache: boolean;
    }
}
