import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { EmailService } from './services/email.service';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        service: 'hotmail',
        auth: {
          user: 'orlyteam@outlook.com',
          pass: 'Ovadia8935',
        },
      },
    }),
  ],
  providers: [EmailService],
  exports: [EmailService],
})
export class EmailModule {}
