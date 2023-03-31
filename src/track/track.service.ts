import { Get, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Track, TrackDocument } from './schemas/track.schema';
import { Model, Schema } from 'mongoose';
import { CommentDocument } from './schemas/comments.schema';
import { CreateTrackDTO } from './dto/create-track.dto';
import ObjectId = module;

@Injectable()
export class TrackService {
  constructor(@InjectModel(Track.name) private trackModel: Model<TrackDocument>,
              @InjectModel(Comment.name) private commentModel: Model<CommentDocument>) {
  }

  async create(dto: CreateTrackDTO): Promise<Track> {
    return await this.trackModel.create({ ...dto, listen: 0 });
  }

  @Get()
  async getAll(): Promise<Track[]> {
    return this.trackModel.find();
    //delete await
  }

  async getOne(id: ObjectId): Promise<Track> {
    const track = await this.trackModel.findById(id);
    return track;
  }

  async delete(id: ObjectId): Promise<ObjectId> {
    const track = await this.trackModel.findByIdAndDelete(id);
    return track;
  }
}