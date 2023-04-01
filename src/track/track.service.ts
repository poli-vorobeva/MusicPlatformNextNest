import { Get, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Track, TrackDocument } from './schemas/track.schema';
import { Model, Schema } from 'mongoose';
import { Comment, CommentDocument } from './schemas/comments.schema';
import { CreateTrackDTO } from './dto/create-track.dto';

import { CreateCommentDto } from './dto/create-comment.dto';
import * as mongoose from 'mongoose';

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

  async getOne(id: mongoose.Schema.Types.ObjectId): Promise<Track> {
    const track = await this.trackModel.findById(id).populate('comments');
    return track;
  }

  async delete(id: mongoose.Schema.Types.ObjectId): Promise<mongoose.Schema.Types.ObjectId> {
    const track = await this.trackModel.findByIdAndDelete(id);
    // @ts-ignore
    return track;
  }

  //todo upDateComment
  async addComment(dto: CreateCommentDto): Promise<Comment> {
    const track = await this.trackModel.findById(dto.trackId);
    const comment = await this.commentModel.create({ ...dto });
    // @ts-ignore
    track.comments.push(comment._id);
    await track.save();
    return comment;
  }
}