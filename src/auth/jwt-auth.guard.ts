// //The guard is responsible for protecting routes
// //ensure only authenticated members can access the details page

// import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
// import { AuthGuard } from '@nestjs/passport';

// @Injectable()
// export class JwtAuthGuard extends AuthGuard('jwt') {
//   canActivate(context: ExecutionContext) {
//     // Add custom authentication logic here if needed
//     return super.canActivate(context);
//   }
// }
