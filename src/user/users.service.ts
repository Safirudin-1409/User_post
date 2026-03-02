import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

export interface User {
    id: string;
    username : String
}

@Injectable()
export class UsersService {
    private users: User[] = [];

    // The restaurant menu (hardcoded for simplicity)
    // private menu = [
    //     { username: 'Soup'},
    // ];

    constructor() {
        // Chef keeps some starter orders warm
        this.createUser({
            id : "user101",
            username : "safir",
        });
    }

    // getMenu(page: number) {
    //     const itemsPerPage = 3;
    //     const start = (page - 1) * itemsPerPage;
    //     const items = this.menu.slice(start, start + itemsPerPage);
    //     return {
    //         page,
    //         totalPages: Math.ceil(this.menu.length / itemsPerPage),
    //         items,
    //     };
    // }

    createUser(dto: CreateUserDto) {
        //const total = dto.items.reduce((sum, item) => sum + item.price * item.qty, 0);
        const user: User  = {
            id: Math.random().toString(36).substr(2, 9),
            username: dto.username,
        };
        this.users.push(user);
        console.log(`UserName: ${dto.username}`);
        return user;
    }
    findById(id : string): boolean {
        const res = this.users.filter(o => o.id == id)
        //return res;
        if(res.length == 0) return false;
        else return true;
    }
    getUsers() {
        return this.users;
    }
}
