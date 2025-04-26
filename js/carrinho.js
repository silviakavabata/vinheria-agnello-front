let carrinho = [
    {
      id: 1,
      nome: "Vinho Santa Carolina VSC 750ml",
      preco: 699.90,
      tipo: "Tinto",
      pais: "Chile",
      origem: "Importados",
      uvas: "Blend",
      imagem: "./assets/produtos/VinhoSC.png"
    },
    {
      id: 2,
      nome: "Vinho Cobos Bramare Malbec Valle do Uco 750ml",
      preco: 514.90,
      tipo: "Tinto",
      pais: "Argentina",
      origem: "Importados",
      uvas: "Malbec",
      imagem: "./assets/produtos/VinhoCBM.png"
    },
    {
      id: 3,
      nome: "Vinho Luiz Argenta Clássico Merlot 750ml",
      preco: 106.90,
      tipo: "Tinto",
      pais: "Brasil",
      origem: "Nacional",
      uvas: "Merlot",
      imagem: "./assets/produtos/VinhoLA.png"
    }
  ];
  
  const carrinhoContainer = document.querySelector('.carrinho__itens');
  const subtotalSpan = document.querySelector('.resumo__linha span:last-child');
  const totalSpan = document.querySelector('.resumo__total .valor');
  const parceladoP = document.querySelector('.resumo__parcelado');
  
  function renderizarCarrinho() {
    carrinhoContainer.innerHTML = '';
  
    carrinho.forEach(produto => {
      const item = document.createElement('div');
      item.classList.add('carrinho__item');
  
      item.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}">
        <div class="carrinho__info">
          <h3>${produto.nome}</h3>
          <p class="carrinho__preco">R$ ${produto.preco.toFixed(2)}</p>
          <div class="carrinho__detalhes">
            <div class="linha"><span>Tipo:</span><span>${produto.tipo}</span></div>
            <div class="linha"><span>País:</span><span>${produto.pais}</span></div>
            <div class="linha"><span>Origem:</span><span>${produto.origem}</span></div>
            <div class="linha"><span>Uvas:</span><span>${produto.uvas}</span></div>
          </div>
          <button class="carrinho__remover" onclick="removerDoCarrinho(${produto.id})">
            <img src="./assets/icons/Trash.png" alt="Remover">
          </button>
        </div>
      `;
  
      carrinhoContainer.appendChild(item);
    });
  
    atualizarResumo();
  }
  
  function removerDoCarrinho(id) {
    carrinho = carrinho.filter(produto => produto.id !== id);
    renderizarCarrinho();
  }
  
  function atualizarResumo() {
    const subtotal = carrinho.reduce((acc, produto) => acc + produto.preco, 0);
    subtotalSpan.textContent = `R$ ${subtotal.toFixed(2)}`;
    totalSpan.textContent = `R$ ${subtotal.toFixed(2)}`;
  
    if (subtotal > 0) {
      parceladoP.textContent = `ou 2x R$ ${(subtotal / 2).toFixed(2)} sem juros`;
    } else {
      parceladoP.textContent = '';
    }
  }

renderizarCarrinho();  