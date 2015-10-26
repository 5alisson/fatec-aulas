/*
DECLARAÇAO DO MODULO
* PASSO 1
*/

angular.module('pessoas',[])

/*
CRIAÇÃO DAS ROTAS
PASSO 3
*/

.config(function($routeProvider){
    
    $routeProvider
    .when('/',{templateUrl: 'listar.html'})
    .when('/pessoa/adicionar',{templateUrl: 'adicionar.html', controller:'CtrlAdicionar'})
})

/*
CRIAR O CONTROLLER
* PASSO 2
*/

.controller('CtrlPessoas', function($scope){
    
    $scope.pessoas =[
        {nome:"mikaell", cidade:"goiania"},
        {nome:"samuel", cidade:"porto velho"},
        {nome:"joao", cidade:"natal"},
        {nome:"maria", cidade:"fortaleza"},
        ];
})

.controller('CtrlAdicionar',function($scope){
$scope.add =function(){

  /*  $scope.pessoas.push({
        
        nome: $scope.pessoas.nome,
        cidade: $scope.pessoas.cidade
        
         ]);
    */    
        $scope.pessoas.push($scope.pessoa);
        
        $scope.pessoa=""
        
        $scope.result="Adicionado com sucesso"
    };
})


        