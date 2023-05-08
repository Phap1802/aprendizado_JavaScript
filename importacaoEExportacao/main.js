
//ESTE ARQUIVO ESTA SENDO USADO PARA DAR EXEMPLO DE IMPORTAÇÃO DA "aula1.js"


// meio de importar " require (./nomeDoArquivo);"
const funcoes = require ('./aula1.js');

//executando função importada do arquivo "aula1.js" que executa a função print que tem como parametro o retorno da função "gets" ( ambas estão no arquivo importado.)
funcoes.print(funcoes.gets());


//sinta-se mais avançada passada pelo professor. 
/* const { gets, print} = require ('./aula1.js');

print(gets());

*/




