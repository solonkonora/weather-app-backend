import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { WeatherSearchHistoryService } from './weather-search-history.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('history')
export class WeatherSearchHistoryController {
  constructor(private readonly historyService: WeatherSearchHistoryService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getUserHistory(@Req() req) {
    const userId = req.user._id; // Get the user ID from the JWT token
    const history = await this.historyService.getHistoryByUserId(userId);
    return history;
  }
}
