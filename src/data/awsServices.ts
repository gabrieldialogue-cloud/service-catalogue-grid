export interface Service {
  title: string;
  description: string;
}

export interface ServiceSection {
  letter: string;
  services: Service[];
}

export const awsServices: ServiceSection[] = [
  {
    letter: "A",
    services: [
      {
        title: "Activate for Startups",
        description: "Programa que fornece créditos, recursos e capacitação para startups, conectando-as a benefícios e integrações com produtos AWS."
      },
      {
        title: "AWS Amplify",
        description: "Plataforma gerenciada para desenvolvimento full-stack web/mobile, com hospedagem, CI/CD, autenticação e integração com APIs e armazenamento."
      },
      {
        title: "Apache Airflow gerenciado",
        description: "Serviço gerenciado de orquestração baseado em Airflow para agendamento, monitoramento e execução de pipelines de dados."
      },
      {
        title: "API Gateway",
        description: "Serviço gerenciado para criar, publicar, proteger e escalar APIs REST/WebSocket, atuando como front door para microsserviços e integrações serverless."
      },
      {
        title: "AWS App Mesh",
        description: "Malha de serviço gerenciada que oferece observabilidade e controle de tráfego entre microsserviços em containers e instâncias."
      },
      {
        title: "AWS App Runner",
        description: "Serviço totalmente gerenciado que implanta aplicações web/API a partir de código ou imagens de contêiner sem gerenciamento de infraestrutura."
      },
      {
        title: "AWS App Studio",
        description: "Ambiente integrado para design e desenvolvimento de aplicações, facilitando criação de interfaces e integração com serviços AWS."
      },
      {
        title: "AWS AppConfig",
        description: "Serviço para gerenciar, validar e implantar configurações de aplicações de forma segura e controlada, minimizando riscos por configuração."
      },
      {
        title: "AWS AppFabric",
        description: "Plataforma para integrar e gerenciar dados e aplicações SaaS empresariais com conectores, centralização e controles de segurança."
      },
      {
        title: "Amazon AppFlow",
        description: "Serviço gerenciado sem código para mover dados entre aplicações SaaS e AWS de forma segura e escalável."
      },
      {
        title: "Application Discovery Service",
        description: "Ferramenta para descobrir inventário de servidores e dependências on-premises para planejar migrações para AWS."
      },
      {
        title: "AWS Application Migration Service",
        description: "Serviço para migrar servidores físicos/VMs para AWS com replicação contínua e cutover automatizado."
      },
      {
        title: "Application Recovery Controller",
        description: "Ferramenta para orquestrar e validar planos de recuperação de desastres, garantindo RTOs e RPOs."
      },
      {
        title: "AppStream 2.0",
        description: "Serviço gerenciado de streaming de aplicações Windows que entrega apps via streaming para usuários sem instalação local."
      },
      {
        title: "AWS AppSync",
        description: "Serviço GraphQL gerenciado para APIs em tempo real e sincronização de dados entre dispositivos e backend."
      },
      {
        title: "AWS Artifact",
        description: "Portal para acessar documentos de conformidade, relatórios de auditoria e contratos de segurança da AWS."
      },
      {
        title: "Athena",
        description: "Serviço serverless para consultas SQL interativas diretamente em dados armazenados no S3, ideal para análises ad hoc."
      },
      {
        title: "AWS Audit Manager",
        description: "Serviço que automatiza coleta de evidências e mapeamento de controles para auditorias e conformidade."
      },
      {
        title: "Amazon Augmented AI",
        description: "Serviço que integra revisão humana em fluxos de inferência de ML para validar e melhorar decisões automatizadas."
      },
      {
        title: "Aurora and RDS",
        description: "Serviços gerenciados de bancos relacionais; Aurora oferece alta performance compatível com MySQL/PostgreSQL; RDS gerencia engines populares."
      },
      {
        title: "Aurora DSQL",
        description: "Variante do Aurora voltada para execução de consultas distribuídas/analíticas (DSQL) em workloads analíticos distribuídos."
      },
      {
        title: "AWS Auto Scaling",
        description: "Serviço que ajusta automaticamente capacidade de recursos (EC2, ECS, etc.) conforme políticas para manter desempenho e custo."
      }
    ]
  },
  {
    letter: "B",
    services: [
      {
        title: "AWS B2B Data Interchange",
        description: "Serviço para troca segura e governada de dados entre empresas, com controles de acesso e auditoria."
      },
      {
        title: "AWS Backup",
        description: "Serviço gerenciado para centralizar e automatizar backups de serviços AWS e on-premises com políticas de retenção e restauração."
      },
      {
        title: "Batch",
        description: "Serviço gerenciado para executar cargas de trabalho batch em escala, provisionando compute sob demanda e gerenciando filas."
      },
      {
        title: "Amazon Bedrock",
        description: "Plataforma gerenciada para acessar modelos foundation (LLMs) de múltiplos provedores e construir aplicações de IA."
      },
      {
        title: "Amazon Bedrock AgentCore",
        description: "SDK/componente para integrar agentes baseados em modelos com Bedrock e fluxos de trabalho personalizados."
      },
      {
        title: "AWS Billing Conductor",
        description: "Ferramenta para personalizar faturamento, alocação de custos e tarifação interna entre contas e unidades de negócio."
      },
      {
        title: "Amazon Braket",
        description: "Serviço gerenciado para desenvolvimento e execução de algoritmos quânticos em simuladores e hardware quântico acessível remotamente."
      }
    ]
  },
  {
    letter: "C",
    services: [
      {
        title: "Certificate Manager",
        description: "Serviço gerenciado para provisionar, renovar e gerenciar certificados TLS/SSL públicos e privados."
      },
      {
        title: "Amazon Chime",
        description: "Plataforma de comunicações unificadas para reuniões, chat e chamadas de voz/vídeo; inclui SDKs para integração."
      },
      {
        title: "Amazon Chime SDK",
        description: "Conjunto de APIs para incorporar áudio, vídeo e chat em aplicações customizadas."
      },
      {
        title: "AWS Clean Rooms",
        description: "Serviço para colaboração analítica segura entre organizações sem compartilhar dados sensíveis diretamente."
      },
      {
        title: "AWS Cloud Map",
        description: "Serviço de descoberta de serviços para registrar e localizar endpoints de aplicações por nome."
      },
      {
        title: "Cloud9",
        description: "IDE em nuvem com editor, terminal e ferramentas integradas acessível via navegador."
      },
      {
        title: "CloudFormation",
        description: "Infraestrutura como código para modelar, provisionar e versionar recursos AWS por meio de templates declarativos."
      },
      {
        title: "CloudFront",
        description: "CDN global para entrega de conteúdo com caching, baixa latência e integração de segurança."
      },
      {
        title: "CloudHSM",
        description: "Módulos HSM gerenciados para controle exclusivo de chaves criptográficas com isolamento físico."
      },
      {
        title: "CloudSearch",
        description: "Serviço gerenciado para provisionar capacidades de busca full-text em aplicações sem gerenciar infraestrutura de busca."
      },
      {
        title: "CloudShell",
        description: "Terminal shell no navegador com credenciais AWS para executar comandos e scripts rapidamente."
      },
      {
        title: "CloudTrail",
        description: "Serviço que registra chamadas de API e atividades da conta para auditoria e investigação."
      },
      {
        title: "CloudWatch",
        description: "Plataforma de monitoramento e observabilidade para métricas, logs, alarmes e dashboards."
      },
      {
        title: "CodeArtifact",
        description: "Repositório gerenciado para artefatos de build e pacotes (npm, Maven, pip) com controle de dependências."
      },
      {
        title: "CodeBuild",
        description: "Serviço de build contínuo gerenciado que compila código, executa testes e gera artefatos sem servidores."
      },
      {
        title: "Amazon CodeCatalyst",
        description: "Plataforma colaborativa integrando repositórios, pipelines e ferramentas de gerenciamento de desenvolvimento."
      },
      {
        title: "CodeCommit",
        description: "Repositório Git privado e gerenciado para controle de versão de código-fonte."
      },
      {
        title: "CodeDeploy",
        description: "Serviço para automatizar deploys em instâncias, servidores on-premises e ambientes serverless."
      },
      {
        title: "Amazon CodeGuru",
        description: "Ferramenta de análise de código com recomendações de performance e qualidade usando ML."
      },
      {
        title: "CodePipeline",
        description: "Orquestrador de CI/CD que automatiza estágios de build, teste e deploy via pipelines."
      },
      {
        title: "Cognito",
        description: "Serviço de autenticação e gestão de identidade para aplicações web e mobile, com federation e SSO."
      },
      {
        title: "Amazon Comprehend",
        description: "Serviço de NLP para extração de entidades, sentimento, categorias e resumo de texto."
      },
      {
        title: "Amazon Comprehend Medical",
        description: "Variante especializada para extrair informações clínicas de textos médicos com conformidade."
      },
      {
        title: "AWS Compute Optimizer",
        description: "Serviço que recomenda ajustes de recursos para otimizar custo e performance de infraestrutura."
      },
      {
        title: "AWS Config",
        description: "Serviço de avaliação contínua de conformidade, inventário de recursos e histórico de alterações."
      },
      {
        title: "Amazon Connect",
        description: "Contact center cloud-nativo gerenciado para voz e canais digitais com roteamento e análises."
      },
      {
        title: "Control Tower",
        description: "Serviço que automatiza configuração e governança de ambientes multi-conta com guardrails e melhores práticas."
      }
    ]
  },
  {
    letter: "D",
    services: [
      {
        title: "AWS Data Exchange",
        description: "Marketplace para descobrir, assinar e usar conjuntos de dados de terceiros dentro da AWS."
      },
      {
        title: "Amazon Data Firehose",
        description: "Serviço de ingestão de streaming que entrega dados a destinos como S3, Redshift e OpenSearch."
      },
      {
        title: "Database Migration Service",
        description: "Serviço para migrar bases de dados para AWS com replicação contínua e downtime reduzido."
      },
      {
        title: "DataSync",
        description: "Transferência automatizada e acelerada de dados entre on-premises e AWS ou entre serviços AWS."
      },
      {
        title: "Amazon DataZone",
        description: "Plataforma para catalogação, governança e compartilhamento centralizado de ativos de dados corporativos."
      },
      {
        title: "AWS Deadline Cloud",
        description: "Serviço gerenciado para render farms integrando Deadline (Thinkbox) com infraestrutura AWS."
      },
      {
        title: "AWS DeepRacer",
        description: "Plataforma educacional para experimentar aprendizado por reforço com simuladores e competições de carros autônomos."
      },
      {
        title: "Detective",
        description: "Serviço para investigação de segurança que correlaciona logs e eventos para identificar causas raiz de incidentes."
      },
      {
        title: "Device Farm",
        description: "Serviço de teste que executa apps mobile/web em dispositivos reais hospedados pela AWS."
      },
      {
        title: "Amazon DevOps Guru",
        description: "Serviço que usa ML para detectar anomalias operacionais e recomendar ações corretivas."
      },
      {
        title: "Direct Connect",
        description: "Conexão de rede dedicada entre data center on-premises e AWS para baixa latência e maior largura de banda."
      },
      {
        title: "Directory Service",
        description: "Serviços gerenciados para integrar e operar Microsoft Active Directory na AWS (Managed AD, AD Connector)."
      },
      {
        title: "Amazon DocumentDB",
        description: "Banco de documentos gerenciado compatível com MongoDB para armazenar e consultar JSON em escala."
      },
      {
        title: "DynamoDB",
        description: "Banco NoSQL gerenciado, alta performance e baixa latência para workloads de chave-valor e documentos."
      }
    ]
  },
  {
    letter: "E",
    services: [
      {
        title: "EC2",
        description: "Instâncias virtuais (VMs) elásticas que oferecem capacidade de computação configurável na nuvem."
      },
      {
        title: "EC2 Image Builder",
        description: "Ferramenta para criar, manter e distribuir imagens seguras e atualizadas para EC2 e containers."
      },
      {
        title: "EFS",
        description: "Sistema de arquivos elástico, gerenciado e compartilhado para uso com instâncias EC2 e serviços compatíveis."
      },
      {
        title: "Elastic Beanstalk",
        description: "Plataforma PaaS que facilita deploy e gerenciamento de aplicações web sem gerenciar infraestrutura subjacente."
      },
      {
        title: "Elastic Container Registry",
        description: "Registro de imagens Docker gerenciado, integrado ao ecossistema AWS."
      },
      {
        title: "Elastic Container Service",
        description: "Orquestrador de containers gerenciado (ECS) para executar aplicações containerizadas em clusters."
      },
      {
        title: "AWS Elastic Disaster Recovery",
        description: "Serviço para replicação e recuperação contínua de servidores para continuidade de negócios."
      },
      {
        title: "Elastic Kubernetes Service",
        description: "EKS: Kubernetes gerenciado com control plane mantido pela AWS."
      },
      {
        title: "Elastic Transcoder",
        description: "Serviço para transcodificação de mídia, convertendo vídeos para múltiplos formatos de reprodução."
      },
      {
        title: "Amazon Elastic VMware Service",
        description: "Serviço para executar ambientes VMware nativamente sobre infraestrutura AWS gerenciada."
      },
      {
        title: "ElastiCache",
        description: "Serviços de cache em memória gerenciados (Redis, Memcached) para acelerar aplicações e reduzir latência."
      },
      {
        title: "Elemental Appliances & Software",
        description: "Hardware/software para processamento e entrega de vídeo profissional e workflows de mídia."
      },
      {
        title: "EMR",
        description: "Serviço gerenciado para executar frameworks big data (Hadoop, Spark) para processamento em larga escala."
      },
      {
        title: "AWS End User Messaging",
        description: "Serviço para envio gerenciado de mensagens e notificações para usuários finais com personalização."
      },
      {
        title: "AWS Entity Resolution",
        description: "Serviço para identificar e consolidar registros duplicados de entidades em conjuntos de dados."
      },
      {
        title: "Amazon EventBridge",
        description: "Barramento de eventos serverless que conecta aplicações via eventos de AWS, SaaS e custom events."
      }
    ]
  },
  {
    letter: "F",
    services: [
      {
        title: "Amazon FinSpace",
        description: "Plataforma gerenciada para armazenar, catalogar e analisar grandes conjuntos de dados financeiros."
      },
      {
        title: "AWS Firewall Manager",
        description: "Serviço centralizado para gerenciar regras de segurança (WAF, Shield, etc.) across contas."
      },
      {
        title: "AWS FIS",
        description: "Fault Injection Simulator para executar experimentos de chaos engineering e testar resiliência de aplicativos."
      },
      {
        title: "Amazon Forecast",
        description: "Serviço gerenciado de previsão baseado em ML para séries temporais e planejamento de demanda."
      },
      {
        title: "Amazon Fraud Detector",
        description: "Serviço que usa ML pré-treinado para detectar atividade fraudulenta em transações."
      },
      {
        title: "FSx",
        description: "Família de sistemas de arquivos gerenciados (Lustre, Windows, NetApp) otimizados para diferentes workloads."
      }
    ]
  },
  {
    letter: "G",
    services: [
      {
        title: "Amazon GameLift Servers",
        description: "Hospedagem e escalonamento gerenciados para servidores de jogos multiplayer com matchmaking."
      },
      {
        title: "Amazon GameLift Streams",
        description: "Serviço para streaming de gameplay e renderização remota para experiências interativas."
      },
      {
        title: "Gerenciamento de cobrança e custos",
        description: "Ferramentas para monitorar, analisar e otimizar custos, orçamentos e alocação financeira."
      },
      {
        title: "Global Accelerator",
        description: "Serviço de rede que melhora disponibilidade e performance global via anycast e roteamento otimizado."
      },
      {
        title: "AWS Global View",
        description: "Visão consolidada de recursos e políticas across contas/regiões para governança centralizada."
      },
      {
        title: "AWS Glue",
        description: "Serviço ETL serverless para descoberta, preparação e carga de dados, com catálogo integrado."
      },
      {
        title: "AWS Glue DataBrew",
        description: "Ferramenta visual sem código para limpeza e preparação de dados com transformações prontas."
      },
      {
        title: "Amazon Grafana",
        description: "Serviço gerenciado que fornece dashboards Grafana integrados para visualizar métricas e logs."
      },
      {
        title: "Ground Station",
        description: "Serviço para comunicação e ingestão de dados de satélites via rede de estações terrestres gerenciadas."
      },
      {
        title: "GuardDuty",
        description: "Serviço gerenciado de detecção de ameaças que analisa logs e telemetria para identificar comportamentos maliciosos."
      }
    ]
  },
  {
    letter: "H",
    services: [
      {
        title: "AWS Health Dashboard",
        description: "Painel que informa sobre status de serviços AWS e eventos que podem impactar recursos do cliente."
      },
      {
        title: "AWS HealthImaging",
        description: "Serviço para gerenciar, armazenar e processar imagens médicas com conformidade e ferramentas analíticas."
      },
      {
        title: "AWS HealthLake",
        description: "Repositório e serviços analíticos para dados clínicos, facilitando interoperabilidade e pesquisa em saúde."
      },
      {
        title: "AWS HealthOmics",
        description: "Ferramentas para processamento e análise de dados ómicos e biológicos em escala na nuvem."
      }
    ]
  },
  {
    letter: "I",
    services: [
      {
        title: "IAM",
        description: "Identity and Access Management: gerencia identidades, políticas e permissões de acesso a recursos AWS."
      },
      {
        title: "IAM Identity Center",
        description: "Serviço de SSO gerenciado para centralizar autenticação e provisionamento de acesso entre contas e aplicações."
      },
      {
        title: "Incident Manager",
        description: "Ferramenta para coordenar resposta a incidentes operacionais com runbooks, notificações e escalonamento."
      },
      {
        title: "Infrastructure Composer",
        description: "Ferramenta para modelar e provisionar stacks de infraestrutura via UI e automação."
      },
      {
        title: "Amazon Inspector",
        description: "Avaliação automatizada de segurança para identificar vulnerabilidades e desvios de conformidade em instâncias e imagens."
      },
      {
        title: "Amazon Interactive Video Service",
        description: "Plataforma para criar experiências de vídeo interativas em tempo real com baixa latência."
      },
      {
        title: "IoT Analytics",
        description: "Serviço gerenciado para coletar, processar e analisar dados de dispositivos IoT em escala."
      },
      {
        title: "IoT Core",
        description: "Serviço para conectar, gerenciar e ingerir dados de dispositivos IoT com segurança e protocolos escaláveis."
      },
      {
        title: "IoT Device Defender",
        description: "Serviço de segurança que monitora e protege dispositivos IoT contra configurações e comportamentos inseguros."
      },
      {
        title: "IoT Device Management",
        description: "Ferramenta para provisionar, organizar, monitorar e gerenciar dispositivos em larga escala."
      },
      {
        title: "IoT Events",
        description: "Serviço para detectar e responder a eventos e condições anômalas geradas por dispositivos IoT."
      },
      {
        title: "AWS IoT FleetWise",
        description: "Serviço para coletar, transformar e transmitir dados de veículos automotivos para a nuvem."
      },
      {
        title: "IoT Greengrass",
        description: "Runtime que permite executar funções e ML localmente em dispositivos IoT com sincronização para a nuvem."
      },
      {
        title: "IoT SiteWise",
        description: "Serviço para coletar, organizar e visualizar dados industriais e de sensores para monitoramento de equipamentos."
      },
      {
        title: "IoT TwinMaker",
        description: "Ferramenta para criar gêmeos digitais de sistemas físicos integrando modelos, sensores e visualizações."
      },
      {
        title: "AWS IQ",
        description: "Marketplace para contratar especialistas certificados AWS para projetos e suporte técnico sob demanda."
      }
    ]
  },
  {
    letter: "K",
    services: [
      {
        title: "Amazon Kendra",
        description: "Motor de busca empresarial baseado em ML para consultas semânticas e relevância em repositórios de documentos."
      },
      {
        title: "Key Management Service",
        description: "KMS: serviço gerenciado para criar, armazenar e controlar chaves criptográficas e operações de criptografia."
      },
      {
        title: "Amazon Keyspaces",
        description: "Serviço compatível com Apache Cassandra para bancos NoSQL gerenciados e escaláveis."
      },
      {
        title: "Kinesis",
        description: "Plataforma de streaming (Data Streams) para ingestão e processamento de dados em tempo real."
      },
      {
        title: "Kinesis Video Streams",
        description: "Serviço para ingestão, processamento e armazenamento de fluxos de vídeo de dispositivos para análise e playback."
      }
    ]
  },
  {
    letter: "L",
    services: [
      {
        title: "AWS Lake Formation",
        description: "Serviço para criar e gerenciar data lakes seguros e governados sobre S3 com catálogo e políticas."
      },
      {
        title: "Lambda",
        description: "Serviço serverless para executar funções sob demanda com escalabilidade automática e sem gerenciamento de servidores."
      },
      {
        title: "Launch Wizard",
        description: "Assistente que simplifica deploy de aplicações complexas (ex.: SAP, SQL Server) com dimensionamento e melhores práticas."
      },
      {
        title: "Amazon Lex",
        description: "Serviço para criar interfaces de conversação (chatbots) com reconhecimento de fala e compreensão de linguagem natural."
      },
      {
        title: "AWS License Manager",
        description: "Ferramenta para gerenciar, monitorar e otimizar licenças de software em ambientes AWS e on-premises."
      },
      {
        title: "Lightsail",
        description: "Plataforma simplificada para criar servidores, bancos de dados e aplicações com preços previsíveis para workloads menores."
      },
      {
        title: "Amazon Location Service",
        description: "Serviço para adicionar mapas, geocoding e roteamento em aplicações com controle de privacidade."
      },
      {
        title: "Amazon Lookout for Equipment",
        description: "Serviço de ML para detectar anomalias em dados de sensores industriais e prever falhas."
      },
      {
        title: "Amazon Lookout for Metrics",
        description: "Serviço que detecta automaticamente anomalias em séries temporais de métricas usando ML."
      },
      {
        title: "Amazon Lookout for Vision",
        description: "Serviço para inspeção visual automatizada com ML para detectar defeitos e anomalias em imagens."
      }
    ]
  },
  {
    letter: "M",
    services: [
      {
        title: "Amazon Macie",
        description: "Serviço que usa ML para descobrir e proteger dados sensíveis armazenados no S3."
      },
      {
        title: "AWS Mainframe Modernization",
        description: "Ferramentas e serviços para migrar, modernizar e executar workloads mainframe na AWS."
      },
      {
        title: "Managed Apache Flink",
        description: "Serviço gerenciado para executar aplicações Apache Flink de streaming com operações simplificadas."
      },
      {
        title: "Amazon Managed Blockchain",
        description: "Serviço para criar e gerenciar redes blockchain escaláveis com frameworks como Hyperledger."
      },
      {
        title: "Managed Services",
        description: "AWS Managed Services: operação gerenciada contínua de infraestrutura AWS seguindo práticas operacionais definidas."
      },
      {
        title: "AWS Marketplace",
        description: "Loja digital para encontrar, testar e comprar software de terceiros pré-configurado para AWS."
      },
      {
        title: "MediaConnect",
        description: "Transporte confiável e de baixa latência de streams de vídeo profissionais entre locais e nuvem."
      },
      {
        title: "MediaConvert",
        description: "Serviço para transcodificação de vídeo file-based com suporte a múltiplos formatos e legendas."
      },
      {
        title: "MediaLive",
        description: "Codificação de vídeo em tempo real e transmissão de canais ao vivo em escala."
      },
      {
        title: "MediaPackage",
        description: "Serviço para empacotar e proteger fluxos de vídeo em múltiplos formatos de reprodução."
      },
      {
        title: "MediaStore",
        description: "Armazenamento otimizado para mídia com latência e throughput sustentado para workflows de vídeo."
      },
      {
        title: "MediaTailor",
        description: "Serviço de inserção de anúncios para personalização e monetização de streams de vídeo."
      },
      {
        title: "Amazon MemoryDB",
        description: "Banco em memória compatível com Redis, gerenciado, persistente e otimizado para alta performance."
      },
      {
        title: "AWS Migration Hub",
        description: "Painel central para rastrear progresso e orquestrar migrações de aplicações para AWS."
      },
      {
        title: "Amazon Monitron",
        description: "Solução de monitoramento de condições industriais baseada em sensores e ML para detecção precoce de falhas."
      },
      {
        title: "Amazon MQ",
        description: "Broker gerenciado compatível com ActiveMQ e RabbitMQ para mensageria entre aplicações."
      },
      {
        title: "MSK",
        description: "Managed Streaming for Kafka: serviço gerenciado para executar clusters Apache Kafka sem operar infraestrutura."
      }
    ]
  },
  {
    letter: "N",
    services: [
      {
        title: "Neptune",
        description: "Banco de dados de grafos gerenciado otimizado para consultas de grafos com suporte a Gremlin e SPARQL."
      }
    ]
  },
  {
    letter: "O",
    services: [
      {
        title: "Amazon One Enterprise",
        description: "Solução de autenticação biométrica (palma) para identificação rápida e sem contato em ambientes físicos."
      },
      {
        title: "Amazon OpenSearch Service",
        description: "Serviço gerenciado para busca e análise em tempo real baseado em OpenSearch/Elasticsearch."
      },
      {
        title: "Oracle Database@AWS",
        description: "Serviço para executar Oracle Database gerenciado na infraestrutura AWS com opções de licenciamento."
      },
      {
        title: "AWS Organizations",
        description: "Serviço para gerenciar múltiplas contas AWS com políticas, faturamento centralizado e governança."
      },
      {
        title: "AWS Outposts",
        description: "Infraestrutura gerenciada que estende serviços e hardware AWS on-premises para baixa latência local."
      }
    ]
  },
  {
    letter: "P",
    services: [
      {
        title: "AWS Panorama",
        description: "Plataforma para executar visão computacional na borda, com gerenciamento central de modelos e dispositivos."
      },
      {
        title: "Parallel Computing Service",
        description: "Serviço para executar computação paralela e HPC distribuída (alta performance) na nuvem."
      },
      {
        title: "AWS Payment Cryptography",
        description: "Serviço gerenciado para emissão e processamento seguro de chaves e transações de pagamento."
      },
      {
        title: "Amazon Personalize",
        description: "Serviço de recomendações em tempo real usando ML, sem necessidade de expertise avançada em ML."
      },
      {
        title: "Amazon Pinpoint",
        description: "Plataforma para campanhas de marketing, notificações e análise de engajamento multicanal."
      },
      {
        title: "Amazon Polly",
        description: "Serviço de síntese de voz (TTS) que converte texto em fala natural em vários idiomas."
      },
      {
        title: "AWS Private Certificate Authority",
        description: "CA privada gerenciada para emitir certificados internos com cadeia de confiança controlada."
      },
      {
        title: "Amazon Prometheus",
        description: "Serviço gerenciado compatível com Prometheus para coleta, armazenamento e consulta de métricas."
      },
      {
        title: "AWS Proton",
        description: "Serviço para provisionar e gerenciar infraestrutura e pipelines padronizadas para aplicações containerizadas/serverless."
      },
      {
        title: "Página inicial do console",
        description: "Página inicial do console AWS que fornece acesso rápido a serviços, recursos e informações da conta."
      }
    ]
  },
  {
    letter: "Q",
    services: [
      {
        title: "Amazon Q",
        description: "Plataforma AWS focada em capacidades de IA conversacional e assistentes."
      },
      {
        title: "Amazon Q Business",
        description: "Versão do Amazon Q orientada para uso empresarial com controles e integrações."
      },
      {
        title: "Amazon Q Developer (Including Amazon CodeWhisperer)",
        description: "Ferramentas e SDKs para desenvolvedores integrando capacidades de IA assistiva e geração de código."
      },
      {
        title: "Amazon Q Developer in chat applications (Anteriormente AWS Chatbot)",
        description: "Integração de ferramentas de desenvolvedor em aplicações de chat para automações e alertas."
      },
      {
        title: "Amazon Quick Suite",
        description: "Conjunto de ferramentas rápidas para análises e insights empresariais (pacote de produtividade)."
      },
      {
        title: "QuickSight",
        description: "Serviço de BI e visualização serverless para criar dashboards interativos a partir de múltiplas fontes."
      }
    ]
  },
  {
    letter: "R",
    services: [
      {
        title: "AWS re:Post Private",
        description: "Plataforma de Q&A privada e colaborativa para equipes compartilharem conhecimento técnico com controle de acesso."
      },
      {
        title: "Recycle Bin",
        description: "Recurso que retém recursos excluídos por período configurável para recuperação antes da remoção final."
      },
      {
        title: "Red Hat OpenShift Service on AWS",
        description: "Serviço gerenciado para executar clusters OpenShift integrados à infraestrutura AWS."
      },
      {
        title: "Amazon Redshift",
        description: "Data warehouse gerenciado, columnar e escalável para análises em grande escala com SQL."
      },
      {
        title: "Amazon Rekognition",
        description: "Serviço de análise de imagens e vídeos que detecta objetos, faces, texto e conteúdo moderado usando ML."
      },
      {
        title: "AWS Resilience Hub",
        description: "Ferramenta para avaliar, monitorar e melhorar resiliência de aplicações contra falhas e desastres."
      },
      {
        title: "Resource Access Manager",
        description: "Serviço para compartilhar recursos AWS (subnets, transit gateways) entre contas de forma controlada."
      },
      {
        title: "AWS Resource Explorer",
        description: "Ferramenta para pesquisar e descobrir recursos em contas e regiões AWS centralmente."
      },
      {
        title: "Resource Groups & Tag Editor",
        description: "Ferramentas para agrupar, gerenciar e editar tags de recursos para organização e automação."
      },
      {
        title: "Route 53",
        description: "Serviço de DNS escalável e roteamento de tráfego com health checks e políticas de failover."
      },
      {
        title: "RTB Fabric",
        description: "Infraestrutura/serviço voltado a ecosistema de publicidade em tempo real (real-time bidding) para buyers/sellers."
      }
    ]
  },
  {
    letter: "S",
    services: [
      {
        title: "S3",
        description: "Armazenamento de objetos durável e escalável usado para dados, backup, hosting estático e data lakes."
      },
      {
        title: "S3 Glacier",
        description: "Armazenamento de custo reduzido para arquivamento com opções de recuperação em diferentes SLAs."
      },
      {
        title: "Amazon SageMaker",
        description: "Plataforma completa para construir, treinar e implantar modelos de machine learning gerenciados."
      },
      {
        title: "Amazon SageMaker AI",
        description: "Conjunto de capacidades AI dentro do SageMaker para acelerar desenvolvimento e inferência."
      },
      {
        title: "Secrets Manager",
        description: "Serviço para armazenar, rotacionar e acessar segredos e credenciais com segurança."
      },
      {
        title: "Security Hub",
        description: "Painel central para agregação, correlação e priorização de descobertas de segurança."
      },
      {
        title: "Security Hub CSPM",
        description: "Módulo de Cloud Security Posture Management dentro do Security Hub para verificar conformidade em nuvem."
      },
      {
        title: "AWS Security Incident Response",
        description: "Conjunto de ferramentas e orquestração para resposta a incidentes de segurança."
      },
      {
        title: "Security Lake",
        description: "Repositório gerenciado para ingestão e análise de logs de segurança em larga escala."
      },
      {
        title: "Serverless Application Repository",
        description: "Catálogo para publicar e implantar aplicações serverless reutilizáveis."
      },
      {
        title: "Service Catalog",
        description: "Ferramenta para criar e gerenciar catálogos de produtos aprovados para provisionamento corporativo."
      },
      {
        title: "Service Quotas",
        description: "Serviço para visualizar e gerenciar limites e cotas de serviços AWS por conta/region."
      },
      {
        title: "AWS Signer",
        description: "Serviço para assinar digitalmente código e artefatos garantindo integridade e autoria."
      },
      {
        title: "Amazon Simple Email Service",
        description: "SES: serviço escalável para envio e recebimento de e-mail por aplicações."
      },
      {
        title: "Simple Notification Service",
        description: "SNS: serviço pub/sub e notificações push para entrega em múltiplos endpoints."
      },
      {
        title: "Simple Queue Service",
        description: "SQS: filas gerenciadas para desacoplamento de componentes e processamento resiliente de mensagens."
      },
      {
        title: "AWS SimSpace Weaver",
        description: "Plataforma para simulações distribuídas em larga escala interoperáveis com ambientes de simulação."
      },
      {
        title: "AWS Snow Family",
        description: "Dispositivos e serviços para transferência física de grandes volumes de dados entre local e AWS."
      },
      {
        title: "Step Functions",
        description: "Orquestrador serverless de workflows e máquinas de estado que coordenam serviços AWS e Lambdas."
      },
      {
        title: "Storage Gateway",
        description: "Appliance híbrido que conecta aplicações on-premises ao armazenamento AWS de forma transparente."
      },
      {
        title: "AWS Supply Chain",
        description: "Solução para visibilidade, planejamento e otimização da cadeia de suprimentos com dados e ML."
      },
      {
        title: "Support",
        description: "Serviços de suporte técnico AWS com níveis, SLAs e recursos de assistência técnica."
      },
      {
        title: "SWF",
        description: "Simple Workflow Service: serviço legacy para coordenação de tarefas e workflows distribuídos."
      },
      {
        title: "Systems Manager",
        description: "Conjunto de ferramentas para operações, automação, inventário e gerenciamento de configurações e instâncias."
      }
    ]
  },
  {
    letter: "T",
    services: [
      {
        title: "AWS Telco Network Builder",
        description: "Conjunto de soluções e ferramentas para construir e operar redes de telecomunicações na AWS."
      },
      {
        title: "Terminal de Transferência de Dados da AWS",
        description: "Serviço/appliance para mover dados de/para AWS usando terminais físicos gerenciados."
      },
      {
        title: "Amazon Textract",
        description: "Serviço que extrai texto e dados estruturados de documentos usando OCR e ML."
      },
      {
        title: "Amazon Timestream",
        description: "Banco de dados time-series gerenciado, otimizado para ingestão e consultas de métricas temporais."
      },
      {
        title: "Amazon Transcribe",
        description: "Serviço de transcrição de fala para texto com suporte a múltiplos idiomas e APIs em tempo real."
      },
      {
        title: "AWS Transfer Family",
        description: "Serviços gerenciados para transferências de arquivos via SFTP, FTPS e FTP para S3/EFS."
      },
      {
        title: "AWS Transform",
        description: "Serviço/funcionalidade para transformar e preparar dados (ETL/transform) em pipelines gerenciados."
      },
      {
        title: "Amazon Translate",
        description: "Serviço de tradução automática neural para traduzir texto entre idiomas de forma escalável."
      },
      {
        title: "Trusted Advisor",
        description: "Ferramenta que fornece recomendações em segurança, performance, custo e tolerância a falhas."
      }
    ]
  },
  {
    letter: "U",
    services: [
      {
        title: "AWS User Notifications",
        description: "Serviço/funcionalidade para envio e gerenciamento de notificações ao usuário através de canais configuráveis."
      }
    ]
  },
  {
    letter: "V",
    services: [
      {
        title: "Amazon Verified Permissions",
        description: "Serviço para gerenciar autorização baseada em políticas e controles de acesso finos em aplicações."
      },
      {
        title: "VPC",
        description: "Virtual Private Cloud: provisiona redes virtuais isoladas, subnets, roteadores e controles de segurança na nuvem."
      }
    ]
  },
  {
    letter: "W",
    services: [
      {
        title: "WAF & Shield",
        description: "WAF: firewall de aplicação; Shield: proteção DDoS gerenciada; ambos protegem aplicações web na AWS."
      },
      {
        title: "AWS Well-Architected Tool",
        description: "Ferramenta para avaliar workloads frente às melhores práticas AWS e gerar relatórios de melhorias."
      },
      {
        title: "AWS Wickr",
        description: "Plataforma de comunicação segura e criptografada para mensagens empresariais."
      },
      {
        title: "Amazon WorkDocs",
        description: "Serviço de colaboração e armazenamento de documentos corporativos com controle de versões."
      },
      {
        title: "Amazon WorkMail",
        description: "Serviço de e-mail corporativo gerenciado com integração a calendários e clientes padrão."
      },
      {
        title: "WorkSpaces",
        description: "Desktop as a Service gerenciado que fornece desktops Windows ou Linux na nuvem."
      },
      {
        title: "WorkSpaces Secure Browser",
        description: "Navegador seguro gerenciado para acesso a aplicações web sem expor endpoints locais."
      },
      {
        title: "WorkSpaces Thin Client",
        description: "Solução leve/dispositivo para acessar WorkSpaces com baixo overhead de hardware."
      }
    ]
  },
  {
    letter: "X",
    services: [
      {
        title: "X-Ray",
        description: "Serviço de tracing distribuído para analisar, debugar e otimizar desempenho de aplicações distribuídas e microserviços."
      }
    ]
  }
];
