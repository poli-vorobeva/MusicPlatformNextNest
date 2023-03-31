import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.hr4nj2z.mongodb.net/musicApp?retryWrites=true&w=majority'),
    TrackModule],
})
export class AppModule {
}