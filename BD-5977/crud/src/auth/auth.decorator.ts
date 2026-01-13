import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { applyDecorators } from '@nestjs/common';

export function Auth() {
  return applyDecorators(
    // SetMetadata('roles', roles),
    // UseGuards(AuthGuard()), 
    UseGuards(AuthGuard('jwt'))
    // ApiBearerAuth(),
    // ApiUnauthorizedResponse({ description: 'Unauthorized' }),
  );
}
