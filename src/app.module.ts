import { Module } from '@nestjs/common';
import { HttpModule } from './infra/http/http.module';
import { databaseModule } from './infra/database/database.module';

@Module({
  imports: [HttpModule, databaseModule],
})
export class AppModule {}
