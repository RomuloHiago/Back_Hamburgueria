
import app from "./app"

const port = process.env.PORT || 3001

app.listen(port,'0.0.0.0')




 


// yarn add sucrase -D
// yarn sucrase-node .\src\server.js
// https://hub.docker.com/_/postgres       -> docker run --name codeburguer-postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres
                         // docker ps -> consulta o status do banco se esta rodando ou nao
                         // docker stop codeburguer-postgres -> parar o banco
                         // docker start codeburguer-postgres  -> Iniciar banco 
                            
 // https://www.softpedia.com/get/Internet/Servers/Database-Utils/Postbird.shtml#download'
 // yarn add sequelize-cli -D
 // yarn add pg pg-hstore     
 // yarn sequelize migration:create --name=create-users   
 // yarn sequelize db:migrate   
 // yarn add uuid
 // yarn add yup
 // yarn add bcrypt
 // yarn sequelize migration:create --name=create-products
 // yarn sequelize db:migrate 
 // yarn add multer
 // yarn add jsonwebtoken
 // MD5 -> gerador de hash (palavra criptografada) no google
 // yarn sequelize migration:create --name=create-categories
 // yarn sequelize db:migrate 
 // yarn sequelize migration:create --name=delete-category-cololumn     -> dentro dele solicitei pra que ele exluisse uma coluna no banco de dados 'products' podia ser qualquer uma
 // yarn sequelize db:migrate    -> executei o comando pra ser deletado nesse caso a coluna 'product'

 // docker run --name mongo -p 27017:27017 -d -t mongo
 // yarn add mongoose
 // https://www.mongodb.com/try/download/compass -> fazer download
 // yarn add cors
 // https://railway.app/new
 // npx sequelize-cli db:migrate /////////////////
 // npx sequelize-cli db:migrate:undo:all




// --- AO CRIAR UMA CONEXÃO COM A NUVEM PASSO A PASSO

// https://railway.app/project
// criar conexao com o postgres
// // com o mongodb
// TROCAR A POSTGRES_URL no index E database
// TROCAR A MONGO_URL no index
// para criar usuario e demais coisas no banco
// npx sequelize-cli db:migrate -> vai subir toda as tabelas pra nuvem
// criar conexao com o git hub no setting colocar como confg ->   yarn run dev
//  
//
//

