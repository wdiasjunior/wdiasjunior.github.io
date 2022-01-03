$(document).ready(function() {
  // LOAD PRODUCTS
  $('.productsList').empty();
  $('.loadMoreButtonContainer').remove();
  var qtd_products = products.length;
  for(let i = 0; i < qtd_products; i++) {
    var priceOff = (products[i].price * products[i].discount).toFixed(2).replace('.',',')
    var html_products = `<div data-id='${products[i].id}' class="product">
                          <div class="productClick"></div>
                          <img src="./img/${products[i].img}">
                          <div class="productInfo">
                            <p class="title">${products[i].name}</p>
                            <p class="price">R$ ${(products[i].price).toFixed(2).replace('.',',')}</p>
                            <p class="priceOff">R$ ${priceOff}</p>
                          </div>
                        </div>`;
    $('.productsList').append(html_products);
  }

  $('.productsList').children(".product").slice(0, 6).show();
  if(qtd_products > 6) {
    $('.bodyContent').append(`<div class="loadMoreButtonContainer">
                                  <div class="loadMoreButton">
                                    <p>CARREGAR MAIS</p>
                                  </div>
                                </div>`)
  }

  //MODAL
  $('.productsList').on('click', '.productClick', function() {
    var id = $(this).parent().data('id');
    console.log($(this).parent().data('id'))
    var qtd_products = products.length;
    for(i=0; i < qtd_products; i++) {
      if(id==products[i].id) {
        // $('.productModal').empty();
        // $('.modal').remove();

        // <div class="modal">
        //   <div class="modalContent">
        //     <div class="modalImageList">
        //
        //       <div class="modalImageListItem">teste</div>
        //       <div class="modalImageListItem">teste</div>
        //       <div class="modalImageListItem">teste</div>
        //
        //     </div>
        //     <div class="modalProduct">
        //       <div class="modalProductImage">
        //         <img src="img/camisa-branca.jpg" alt="">
        //       </div>
        //       <div class="modalProductInfo">
        //         <p class="title">produto</p>
        //         <p class="price">R$ 199,99</p>
        //         <p class="priceOff">R$ 109,99</p>
        //       </div>
        //     </div>
        //   </div>
        // </div>


        $('#productModal').css("visibility", "visible");
      }
    }
  })

  //LOAD MORE
  $('body').on('click', '.loadMoreButtonContainer', function () {
    $(".product:hidden").slice(0, 6).slideDown(100);
    if ($(".product:hidden").length == 0) {
      $(".loadMoreButtonContainer").fadeOut(300);
    }
  });

});
