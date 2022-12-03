interface IMailConfig {
  driver: 'ethereal' | 'ses';
  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',
  defaults: {
    from: {
      email: 'suport@apivendas.com.br',
      name: 'Suporte API-VENDAS',
    },
  },
} as IMailConfig;
