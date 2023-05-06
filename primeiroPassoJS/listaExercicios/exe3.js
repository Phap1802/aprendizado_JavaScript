/*
    3) Elabore um algoritimo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta. 

    Utilize os codigos da tabela aseguir para ler qula a condição de pagamento adequado. 

    Codigos Condição de pagamento:
    - À vista Débito, recebe 10% de desconto;
    - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    - Em 2x credito, preço normal de etiqueta sem juros;
    - Acima de 2x credito, preço normal de etiqueta mais juros de 10%;

    */


    /*VIM DO FUTURO PARA FALA QUE, CORRIGINDO O EXE03 O PROFESSOR FEZ DE FORMA DIFERENTE DA MINHA MAS AMBAS FUNCIONAM*/
    let precoEtiqueta = 100;
    let tipoPagamento = 'A vista Debito';

    console.log('Tipo de pagamento : '+tipoPagamento);


    if (tipoPagamento === 'A vista Debito'){

        console.log('Voce recebeu 10% de desconto')
        let valorAtualizado = precoEtiqueta - (precoEtiqueta * (10/100));
        console.log(valorAtualizado);
        console.log('o valor acima é o preço com desconto');

    } else if (tipoPagamento === 'A vista Dinheiro ou Pix'){

        console.log('Voce recebeu 15% de desconto')
        let valorAtualizado = precoEtiqueta - (precoEtiqueta * (10/100));
        console.log(valorAtualizado);
        console.log('o valor acima é o preço com desconto');

    } else if (tipoPagamento === 'Em 2x'){

        console.log(precoEtiqueta);
           
    } else if (tipoPagamento === 'Acima de 2x'){

        console.log('Voce recebeu 10% de Juros Mensais')
        let valorAtualizado = precoEtiqueta + (precoEtiqueta * (10/100));
        console.log(valorAtualizado);
        console.log('o valor acima é o preço com Juros');

    }  