import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuardUser } from './guards/local-auth.guard';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { Log } from 'src/libs/utils';
import { LoginUserDto } from './dto/login-user.dto';

@ApiTags('user auth')
@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuardUser)
  @Post('login')
  @ApiOperation({ summary: '用户登录' })
  //https://github.com/nestjs/passport/blob/bec5fb75896b9d7e5e23045d47973d87bbb2c9ca/lib/auth.guard.ts#L62
  //userguard会把user注入到req对象里面,而不是req.body
  // async login(@Request() req) {
  //   console.log('req object =>');
  //   console.log(req);
  //   console.log('user auth ctrl', req.user);
  //   Log({ req, user: req.user });
  //   return this.authService.login(req.user);
  // }
  async login(@Body() loginUserDto: LoginUserDto) {
    console.log('user auth ctrl', loginUserDto);

    return this.authService.login(loginUserDto);
  }

  @Post('logout')
  @ApiOperation({ summary: '用户登出' })
  async logout() {
    return this.authService.logout();
  }
}
