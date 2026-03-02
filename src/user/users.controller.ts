import { Controller, Get, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
//import { OrdersService } from './orders.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    // Waiter needs the Chef to work
    constructor(private chef: UsersService) {}

    @Post()
    takeOrder(@Body() createUserDto: CreateUserDto) {
        return this.chef.createUser(createUserDto);
    }
    
    @Get()
    listUsers() {
        return this.chef.getUsers();
    }
}
