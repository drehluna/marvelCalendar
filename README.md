# Calendário marvel
###### O que foi usado:
- React
- Context API
- React-big-calendar
- Moment
- Custom Hooks
- Firebase 
- Social Login
- React router dom

# Informações

###### A aplicação se baseia em um calendário onde você pode ver de forma fictícia datas de lançamentos de filmes.

# Modo de uso 
###### Use o git clone para pegar os arquivos do projeto. Na pasta onde foi criado os arquivos, rode um yarn install. Após isso rode npm start para inicar o projeto.

# Detalhes
###### O projeto possui uma autenticação social com o google, usando o firebase como middleware. usa a biblioteca react-big-calendar para gerar o calendário e mostrar os eventos. Os eventos são salvos após a primeira requisição no localStorage e muda quando é alterado uma data usando o "
drag and drop". Possui rotas e rotas protegidas, só é possivel acessar o calendário quando está autenticado, caso não esteja é redirecionado de volta para o login. Possui rota de notFound caso seja buscado uma rota inexistente.

# Deploy

  ###### https://marvel-calendar.vercel.app/calendar
