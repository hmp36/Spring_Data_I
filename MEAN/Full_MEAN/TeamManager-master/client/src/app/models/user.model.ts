export interface IUser {
    /**
     * @roles:
     *   employee,
     *   employer
     */
    idUser: string,
    role: string, // see @roles
	name_first: string,
	name_last: string,
	age: number,
	skill: {
		level: number,
        name: string
	}
}

export class User implements IUser {
    idUser: string;
    role: string;
	name_first: string;
	name_last: string;
	age: number;
	skill: {
		level: number,
        name: string
	}

    constructor(
        idUser?: string,
        role?: string,
        name_first?: string,
        name_last?: string,
        age?: number,
        skill?: {
            level?: number,
            name?: string
        }
    ) {
        this.idUser = idUser || '';
        this.role = role || '';
        this.name_first = name_first || '';
        this.name_last = name_last || '';
        this.age = age || 18;
        skill = skill || {};
        this.skill = {
            level: skill.level || 1,
            name: skill.name || ''
        };
    }
}