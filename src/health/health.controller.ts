import { Controller, Get } from '@nestjs/common';
//this controller is used for health check endpoint, it will be used by kubernetes liveness and readiness probes
//controller used to derfine a controller class
//get used to handle get request to the endpoint, in this case 
// it will be /health, and return a json object with status ok, timestamp, uptime and service name
@Controller('health') // this controller will handle requests starting with /health
export class HealthController {
  @Get() // method is get. it will handle get requests to /health endpoint
  check() {
    return { //fn returns a plan object with status ok, timestamp, uptime and service name
      status: 'ok',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      service: 'ai-support-copilot',
    };
  }
}