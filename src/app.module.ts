/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { DatabaseModule } from './infra/database/database.module';
import { HttModule } from './infra/http/http.module';

@Module({
  imports: [HttModule, DatabaseModule],
})
export class AppModule {}
