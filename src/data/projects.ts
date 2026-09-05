import type { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'Microsserviço de Pagamentos',
    description: 'Microsserviço escalável focado no processamento seguro de transações financeiras e regras de negócio de alta complexidade. Implementa lógicas rigorosas de idempotência, garantindo a mitigação de 100% de transações duplicadas.',
    technologies: ['ASP.NET Core 8.0', 'C#', 'Microsserviços', 'Idempotência'],
    githubUrl: 'https://github.com/PedroJuanDEV/Payment-Gateway.API'
  },
  {
    id: '2',
    title: 'Library Management System API',
    description: 'API RESTful completa voltada para o gerenciamento de bibliotecas e fluxos de empréstimos. Utiliza o padrão Repository Pattern para redução de redundância e documentação interativa via Swagger UI.',
    technologies: ['.NET 9', 'C#', 'SQL Server', 'Entity Framework Core', 'Swagger UI'],
    githubUrl: 'https://github.com/PedroJuanDEV/BibliotecaAPI-DotNet'
  },
  {
    id: '3',
    title: 'API de Gerenciamento de Usuários (Cadastro de Clientes)',
    description: 'API para gestão e persistência de dados de usuários com operações CRUD completas. Conta com métodos assíncronos otimizados para alta concorrência e validações via Data Annotations.',
    technologies: ['.NET 9', 'C#', 'MySQL', 'DBeaver', 'Métodos Assíncronos'],
    githubUrl: 'https://github.com/PedroJuanDEV/cadastro-de-clientes'
  }
];