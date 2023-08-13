import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { User } from 'src/modules/auth/types/auth.types';
import templates from '../constants/email.template';

@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendEmail(template: any, user: User) {
    const { subject, text } = templates[template]();
    this.mailerService.sendMail({
      to: user.email,
      from: process.env.EMAIL_USER_ID,
      subject,
      text,
    });
    console.log('Email sent');
  }
}
