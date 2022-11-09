import nodemailer from 'nodemailer';

interface ISandMail {
  to: string;
  body: string;
}

export default class EtherealMail {
  static async sandMail({ to, body }: ISandMail): Promise<void> {
    const account = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
      host: account.smtp.host,
      port: account.smtp.port,
      secure: account.smtp.secure,
      auth: {
        user: account.user,
        pass: account.pass,
      },
    });
    const message = await transporter.sendMail({
      from: 'suport@apivendas.com.br',
      to,
      subject: 'Recuperação de Senha',
      text: body,
    });

    console.log('Message sent: %s', message.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(message));
  }
}
