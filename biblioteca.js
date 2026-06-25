const biblioteca = {
    prateleira: [],

    adicionarlivro(nome, autor, categoria, estoque) {
        const livro = {
            nome: nome,
            autor: autor,
            categoria: categoria,
            estoque: estoque,
            disponivel: true,
            alugado: false,
            vezesalugado: 0
        };

        this.prateleira.push(livro);
        console.log("Livro adicionado:", livro.nome);
    },

    mostrarprodutos() {
        for (let i = 0; i < this.prateleira.length; i++) {
            const livro = this.prateleira[i];
            console.log(livro);
        }
    }
};

biblioteca.adicionarlivro(
    "O Livro",
    "Larissa",
    "Romance",
    8
);

biblioteca.mostrarprodutos();