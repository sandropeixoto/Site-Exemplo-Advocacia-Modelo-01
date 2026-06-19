<div align="center">
  <img src="https://nano.net.br/assets/programacao-DzAvORjU.png" width="50" alt="Logo NANO" />
  
  # NANO
  
  ### TECNOLOGIA SOB MEDIDA
</div>

---

# Auden Advocacia de Prestígio

Uma solução de landing page institucional de altíssimo padrão, refinada e estrategicamente otimizada para conversão de leads corporativos e patrimoniais. Desenvolvida para bancas de advocacia boutique que prezam pela sobriedade, imponência e absoluto sigilo profissional.

## 📋 Visão Geral

O projeto consiste em uma plataforma corporativa de página única (single-page) construída sob a ótica de usabilidade premium e foco em conversão no ecossistema mobile e desktop. O design reflete autoridade por meio de paleta cromática imponente — azul marinho profundo (#011627), dourado nobre (#D4AF37) e matizes de grafite.

Além de apresentar a banca técnica, histórico de conquistas tangíveis e áreas de especialização jurídica, a aplicação integra uma central de conversão contínua com formulário de triagem seguro (multistep) e canais diretos integrados para conexão prioritária com a banca.

---

## ✨ Funcionalidades Principais

Aqui estão as funcionalidades estruturadas para maximizar a autoridade e captação ética de leads:

> **Header Fixo Responsivo**  
> Barra de navegação flutuante com compressão visual ao scroll, suporte a transição de seções inteligente via scroll suave com compensação de offset e atalhos rápidos para agendamento.

> **Hero Section de Alto Impacto**  
> Título imponente integrado sobre visual refinado de biblioteca jurídica, estatísticas de excelência mensuráveis, pilares de credibilidade e chamada dupla para conversões imediatas.

> **Timeline Estilizada de Conquistas**  
> Seção detalhada sobre a filosofia da banca equipada com uma linha cronológica vertical reativa que ilustra casos de sucesso, valores economizados e consolidação profissional.

> **Banca Técnica de Especialistas**  
> Apresentação fotográfica refinada do corpo diretivo do escritório, destacando qualificações acadêmicas, registros da OAB e botão dedicado para solicitar contato direto com o sócio responsável.

> **Módulos de Atuação Interativos**  
> Apresentação estruturada das especialidades jurídicas em cards responsivos e seções expansíveis (accordion) para detalhamento de teses de vanguarda e especificidades processuais.

> **Garantia de Sigilo & Feedbacks Confidenciais**  
> Seção de relatos de clientes devidamente alinhada à conformidade ética e regulações da OAB (Provimento nº 205/2021). Utiliza apenas as iniciais qualificadoras e segmentos econômicos para resguardar disputas de mercado e segredos comerciais.

> **FAQ com Accordion Inteligente**  
> Interface reativa para resolução das principais dúvidas de relacionamento contratual, precificação de honorários e atendimento virtual, evitando ruídos de assessoria primária.

> **Central Flutuante de Conversão (Tray)**  
> Menu flutuante adaptado ergonomicamente para celulares que consolida canais de telefone físico, WhatsApp corporativo pré-preenchido e botão de triagem judicial em uma única bolha interativa de fácil alcance.

> **Formulário de Triagem Multistep**  
> Modal dinâmico com fluxos para coleta qualificada de dados (empresa, área judicial pretendida, urgência e notas sobre a demanda), garantindo conformidade com a LGPD e regras de confidencialidade desde o primeiro clique.

---

## 🛠️ Stack Técnica

A tecnologia adotada preza pelo carregamento instantâneo, fidelidade visual e ausência de travamentos:

| Categoria | Tecnologia |
|---|---|
| **Linguagem Principal** | TypeScript (Tipagem Estrita) |
| **Framework Base** | React 19.0.1 (Componentes Funcionais & Hooks) |
| **Ferramenta de Build** | Vite 6.2.3 |
| **Estilização & Temas** | Tailwind CSS v4 (@tailwindcss/vite nativo como plugin) |
| **Animações & Transições** | Motion 12.23.24 (para transições suaves e expansão de modais) |
| **Conjunto de Ícones** | Lucide-React v0.546.0 |
| **CI/CD & Deploy** | GitHub Actions (`peaceiris/actions-gh-pages@v4`) |
| **Ambiente de Execução** | Node.js 22 (Compatível com ambientes retroativos de CI) |

---

## 🏛️ Arquitetura do Projeto

O código foi projetado seguindo princípios de **Clean Code**, **SOLID** e separação completa de interesses (*Separation of Concerns*). Toda a inteligência de negócios, dados constantes e tipos estão segregados do pipeline visual de renderização de componentes, garantindo escalabilidade e facilidade de manutenção futura.

* **Tipagem Centralizada**: Definição de contratos de dados rígidos em `src/types.ts` (interfaces para advogados, depoimentos, áreas jurídicas e eventos).
* **Base de Conhecimento**: Desacoplamento estrutural de textos institucionais e metadados no arquivo estático `src/data.ts`.
* **Componentização Modular**: Divisão de cada seção física da landing page em pacotes atômicos reutilizáveis sob a pasta `src/components/`.
* **Centralização de Estado**: Controle integrado no componente central (`App.tsx`) para gerenciar a abertura do modal de agendamento compartilhado e sincronização de dados de entrada de canais corporativos externos.

---

## 💻 Instalação e Execução

Siga os passos simplificados para dispor do ambiente de desenvolvimento ou compilação local:

### Pré-requisitos
* **Node.js** (recomenda-se versão 18 ou superior, homologado para v20 e v22)
* **NPM** (instalado nativamente junto ao Node)

### 1. Clonar o Repositório
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### 2. Instalar Dependências
```bash
npm install
```

### 3. Executar em Ambiente de Desenvolvimento
Roda o servidor Vite com hot-reload ativo na porta local:
```bash
npm run dev
```

### 4. Compilar para Produção (Build)
Gera o bundle otimizado, minificado e pronto para servir estaticamente na pasta `/dist`:
```bash
npm run build
```

---

## 🚀 Scripts Disponíveis

Abaixo estão listadas as rotinas operacionais pré-definidas no arquivo `package.json`:

| Script | Ação Executada |
|---|---|
| `npm run dev` | Inicia o servidor local de desenvolvimento do Vite. |
| `npm run build` | Compila os ativos e gera os arquivos otimizados finais de distribuição na pasta `dist/`. |
| `npm run lint` | Executa a verificação estática do compilador TypeScript (`tsc --noEmit`) para validar tipagem estrutural. |
| `npm run preview` | Executa um servidor local rápido para simular o comportamento da pasta compilada de produção `/dist`. |

---

## 📂 Estrutura de Pastas

Estrutura visual resumida das principais ramificações do repositório:

```text
├── .github/
│   └── workflows/
│       └── deploy.yml          # Pipeline automatizado de testes estáticos, lint e deploy
├── assets/
├── src/
│   ├── components/             # Componentes de interface modulares da Landing Page
│   │   ├── About.tsx           # Seção da história, diferenciais éticos e sócios
│   │   ├── FAQ.tsx             # Módulo de perguntas frequentes estruturado com Accordions
│   │   ├── Footer.tsx          # Rodapé institucional, mapas de localização e selo OAB
│   │   ├── Header.tsx          # Menu de navegação fixo com link suave e responsivo
│   │   ├── Hero.tsx            # Seção nobre de boas-vindas com estatísticas e conversões
│   │   ├── PracticeAreas.tsx   # Vitrine de serviços com teses expansíveis individuais
│   │   ├── SchedulingModal.tsx # Modal interativo de triagem e redirecionamento WhatsApp
│   │   └── Testimonials.tsx    # Feedbacks confidenciais com máscara ética descritiva
│   ├── App.tsx                 # Ponto central de montagem estrutural e estados globais
│   ├── data.ts                 # Constantes textuais segregadas e metadados institucionais
│   ├── index.css               # Folha de estilo de variáveis em CSS (Tailwind v4 Setup)
│   ├── main.tsx                # Arquivo raiz de montagem do React virtual DOM
│   └── types.ts                # Interfaces estritas e tipos globais TypeScript
├── index.html                  # Arquivo HTML base de montagem estrutural do browser
├── package.json                # Configurações de dependências e scripts operacionais
├── tsconfig.json               # Configurações estritas do compilador TypeScript
└── vite.config.ts              # Arquivo de diretivas do empacotador Vite e aliases de caminhos
```

---

## 📦 Deploy Contínuo (CI/CD)

O projeto conta com automação nativa para integração contínua (CI/CD) através do **GitHub Actions**. O arquivo de workflow localizado em `.github/workflows/deploy.yml` é disparado de forma automática sempre que alterações são consolidadas na branch principal `main`.

### Etapas do Pipeline de Deploy:
1. **Ambiente Isolado**: Inicializa uma máquina virtual contendo o Ubuntu virtual e instancia o ambiente executável do Node.js v22.
2. **Checagem de Integridade (Lint)**: Executa `npm install` seguido pelo teste de erros estático `npm run lint`. Caso alguma tipagem TypeScript esteja incorreta ou importações estejam ausentes, o pipeline é abortado de imediato, garantindo que versões quebradas nunca sejam publicadas.
3. **Distribuição Real**: Se os testes passarem perfeitamente, o workflow roda o compilador de produção (`npm run build`) e utiliza a action `peaceiris/actions-gh-pages@v4` para realizar o deploy automático para o **GitHub Pages**, injetando os arquivos compilados da pasta `dist` na branch correspondente sem nenhuma necessidade de intervenção humana.

---

## 🛡️ Considerações Técnicas e de Segurança

O projeto foi inteiramente delineado para atender a métricas máximas de performance e requisitos de governança digital:

* **Variáveis de Estilo Escaláveis**: Variáveis de temas declaradas de forma nativa no `@theme` no arquivo `src/index.css`. Permite que a paleta de cores principal ou fontes corporativas sejam alteradas instantaneamente em toda a plataforma através de uma única alteração no arquivo CSS padrão.
* **Refined Typography**: Amálgama harmonioso entre a fonte serifada clássica **Cinzel** (para títulos de autoridade jurídica) e a semântica sans-serif moderna **Inter** (para parágrafos e fluxos de leitura confortáveis no mobile).
* **Segurança e Confidencialidade**: Os formulários não registram segredos de negócios em consoles abertos do cliente. Ao invés disso, realizam sanitização básica dos caracteres, criptografam interativamente os estados em memória e estruturam uma mensagem pré-formatada para o canal de atendimento direto, agilizando o crivo de conformidade da secretaria.
* **Performance Otimizada**: Carregamento instantâneo possibilitado pelo modelo Single Page Application (SPA), arquivos estáticos compilados para renderização assíncrona imediata e total ausência de re-renders desnecessários no ciclo de vida do React.

---

## 🚀 Desenvolvido por

> **Sandro Peixoto**  
> https://www.sandropeixoto.com.br
>
> **NANO**  
> https://nano.net.br
