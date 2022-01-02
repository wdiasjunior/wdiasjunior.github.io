// Carregar mais // jQuery
$(document).ready(function() {
  // MAIN SCRIPT
  // Exibe os produtos na tela no carregamento do site
  var produtos_tela = products;
  var carrinho = [];
  listaProdutos(produtos_tela);

  $('body').on('click', '.body_products_load_more_box', function () {
    $(".body_products_item:hidden").slice(0, 6).slideDown(100);
    if ($(".body_products_item:hidden").length == 0) {
      $(".body_products_load_more_box").fadeOut(300);
    }
  });

});

// listar produtos
function listaProdutos(produtos) {
  $('.body_products_box').empty();
  $('.body_products_load_more').remove();
  var qtd_produtos = produtos.length;
  for(i=0;i<qtd_produtos;i++) {
    var preco_parcelas = (produtos[i].price/produtos[i].parcelas).toFixed(2).replace('.',',')
    var html_produtos = `<div class='body_products_item'>
                          <div class='body_products_item_image'>
                            <img src="./img/${produtos[i].img} " alt="">
                          </div>
                          <div data-id='${produtos[i].id}' class='body_products_item_info'>
                            <div class='body_products_item_info_title'>
                              <h4> ${produtos[i].name} </h4>
                            </div>
                            <div class='body_products_item_info_price'>
                              <span> R$ ${(produtos[i].price).toFixed(2).replace('.',',')} </span>
                            </div>
                            <div class='body_products_item_info_parcelas'>
                              <span> até ${produtos[i].parcelas}x de R$  ${preco_parcelas} </span>
                            </div>
                            <div class='body_products_item_info_buy_button'>
                              <span> COMPRAR </span>
                            </div>
                          </div>
                        </div>`;
   $('.body_products_box').append(html_produtos);
  }

  $(".body_products_item").slice(0, 6).show();
  if(qtd_produtos > 6) {
    $('.body_products').append(`
    <div class='body_products_load_more'>
      <div class='body_products_load_more_box'>
        <span> CARREGAR MAIS </span>
      </div>
    </div>`)
  }
