import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/product.module';
import { ProductCategoriesModule } from './product-categories/product-categories.module';
import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { BannerModule } from './banner/banner.module';
import { UploadModule } from './upload/upload.module';
import { AuthModule } from './auth/auth.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { Log4jsModule } from './libs/log4js/';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
const ENV = process.env.NODE_ENV;
const dbInfo = {
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123456',
};
if (ENV === 'prod') {
  dbInfo.host = '10.0.224.4';
  dbInfo.port = 25532 || 3306;
  dbInfo.username = 'root';
  dbInfo.password = '';
}
const { host, port, username, password } = dbInfo;

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host,
      port,
      username,
      password,
      database: 'nest_cms_api',
      entities: [],
      autoLoadEntities: true,
      // synchronize: true,
      namingStrategy: new SnakeNamingStrategy(),
    }),
    UsersModule,
    ProductsModule,
    ProductCategoriesModule,
    AboutModule,
    HomeModule,
    BannerModule,
    UploadModule,
    AuthModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    Log4jsModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
