import { Get, Injectable, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Track, TrackDocument } from './schemas/track.schema';
import * as mongoose from 'mongoose';
import { Model } from 'mongoose';
import { Comment, CommentDocument } from './schemas/comments.schema';
import { CreateTrackDTO } from './dto/create-track.dto';

import { CreateCommentDto } from './dto/create-comment.dto';
import { FileService, FileType } from '../file.service';

@Injectable()
export class TrackService {
  constructor(@InjectModel(Track.name) private trackModel: Model<TrackDocument>,
              @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
              private fileService: FileService) {
  }

  async create(dto: CreateTrackDTO, picture, audio): Promise<Track> {
    const audioPath = this.fileService.createFile(FileType.AUDIO, audio);
    const picturePath = this.fileService.createFile(FileType.IMAGE, picture);
    return await this.trackModel.create({ ...dto, listens: 0, audio: audioPath, picture: picturePath });
  }

  async getAll(count: number, offset: number): Promise<Track[]> {
    return this.trackModel.find().skip(offset).limit(count);
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

  async listen(id: mongoose.Schema.Types.ObjectId) {
    const track = await this.trackModel.findById(id);
    track.listens += 1;
    await track.save();
  }

  async search(query: string) {
    const tracks = await this.trackModel.find({
      name: {
        $regexp: new RegExp(query,'i'),
      }
    })
    return tracks
  }
}