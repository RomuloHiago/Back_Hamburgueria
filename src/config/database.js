module.exports ={
    dialect: 'postgres',
    url:'postgresql://postgres:nQVUoSXOgSjWQYzzItLiRrZpCEMkuVvY@viaduct.proxy.rlwy.net:45569/railway', // é aqui e no index
    
    
    // host: 'localhost',
    // username: 'postgres',
    // password: 'postgres',
    // database: 'codeburguer',
    define:{
        timespamps: true, //* adiciona os campos 'createdAt' e 'updatedAt' automaticamente, ao criar um dado */,
        underscored: true,
        underscoredAll: true, //* os nomes de cada dado de uma tabela fica no estilo 'snake_case' */
    },
}

