import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { WeatherSearchHistory } from './schemas/weather-search-history.schema';

@Injectable()
export class WeatherSearchHistoryService {
  constructor(
    @InjectModel(WeatherSearchHistory.name) private weatherSearchHistoryModel: Model<WeatherSearchHistory>,
  ) {}

  // Get search history by user ID
  async getHistoryByUserId(userId: string): Promise<WeatherSearchHistory[]> {
    return await this.weatherSearchHistoryModel
      .find({ userId }) 
      .populate('userId', 'username email'); // Populate with user details
  }
}
