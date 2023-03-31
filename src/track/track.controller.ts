import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TrackService } from './track.service';
import { CreateTrackDTO } from './dto/create-track.dto';
import { Schema } from 'mongoose';
import ObjectId = module;

@Controller('/tracks')
export class TrackController {
  constructor(private trackService: TrackService) {
  }

  @Post()
  create(@Body() dto: CreateTrackDTO) {
    return this.trackService.create(dto);
  }

  @Get()
  getAll() {
    return this.trackService.getAll();
  }

  @Get()
  getOne(@Param('id') id: ObjectId) {
    return this.trackService.getOne(id);
  }

  @Delete('id')
  delete(@Param('id') id: ObjectId) {
return this.trackService.delete(id)
  }
}
