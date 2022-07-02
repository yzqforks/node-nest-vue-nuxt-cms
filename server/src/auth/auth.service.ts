import { Injectable } from '@nestjs/common';
import { cryptoString } from '../libs/lib';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    console.log('auth service validateUser', username, password);
    const data = await this.usersService.findOneByName(username);

    console.log('auth service validateUser data', data);

    const user = JSON.parse(JSON.stringify(data || {}));

    password = cryptoString(password);
    console.log('加密后密码', password);
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  // 登录
  async login(user: LoginUserDto) {
    console.log('login  xxxxxx', user);
    let sqlUser = await this.usersService.findOneByName(user.username);
    const payload = {
      username: sqlUser.name,
      userId: sqlUser['id'],
      roles: sqlUser.roles,
      status: sqlUser.status,
      department: sqlUser.department,
      phone: sqlUser.phone,
      avatar: sqlUser.avatar,
      departmentName: sqlUser.departmentName,
      departmentId: sqlUser.departmentId,
      areaId: sqlUser.areaId,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  // 登出
  async logout() {
    return {
      message: 'ok',
    };
  }
}
