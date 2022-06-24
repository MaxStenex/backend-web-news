import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./user/user.entity";
import { UserModule } from "./user/user.module";
import { AuthModule } from "./auth/auth.module";
import { PostModule } from "./post/post.module";
import { Post } from "./post/post.entity";
import { CommentModule } from "./comment/comment.module";
import { Comment } from "./comment/comment.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "sql4.freemysqlhosting.net",
      port: 3306,
      username: "sql4501820",
      password: "fmKwVE3L2j",
      database: "sql4501820",
      entities: [User, Post, Comment],
      synchronize: false,
    }),
    UserModule,
    AuthModule,
    PostModule,
    CommentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
