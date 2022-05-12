import {icon, IInformationConfig} from "@/typings/types";

export interface IUserRequest {
	id: string;
	username: string;
	name: string;
	avatar: string;
	mail: string;
	created: string;
	last_login_time: string;
	social_ids: UserSocial_ids;
	introduce: string;
	url: string;
}
 interface UserSocial_ids {
	bilibili: string;
}

export interface IUSer {
	username:string,
	introduce:string,
	avatar:string,
	social:{
		middle:icon[],
		bottom:{ //左侧底部的社交信息
			Blog?:string,
			Github?:string,
		}
	}
}
