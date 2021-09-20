
const jsonProdutos = JSON.stringify(
    {
        "Produtos":[{
                "produto": "Celular",
                "preco": 2900
            },
            {
                "produto": "FonedeOuvido",
                "preco": 40
            },
            {
                "produto": "Óculos VR",
                "preco": 5000
            },
            {
                "produto": "mouse",
                "preco": 200
            }
        ]
    }
)

export  { jsonProdutos  as products }