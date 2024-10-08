import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WeatherSearchHistoryController } from './weather-search-history.controller';
import { WeatherSearchHistoryService } from './weather-search-history.service';
import { WeatherSearchHistory, WeatherSearchHistorySchema } from './schemas/weather-search-history.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: WeatherSearchHistory.name, schema: WeatherSearchHistorySchema }]),
  ],
  controllers: [WeatherSearchHistoryController],
  providers: [WeatherSearchHistoryService],
})
export class WeatherSearchHistoryModule {}
