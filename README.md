# Trybers and Dragons <img src="https://github.com/user-attachments/assets/c3ade45e-0da6-44b3-990b-04101c0a81f9" alt="imagem de dragão" width="60"/>


## Sobre

O **Trybers and Dragons** é um projeto inspirado em jogos de RPG (role-playing game), onde são aplicados os princípios da **Programação Orientada a Objetos (POO)**. Neste sistema, os jogadores podem instanciar personagens, definir suas raças, escolher se a energia será baseada em **mana** ou **stamina**, e atribuir habilidades especiais. Dependendo da raça escolhida, cada personagem possui poderes únicos e diferentes custos de mana ou stamina para utilizá-los. O jogo também implementa sistemas de combate tanto para **PvP** (Player vs. Player) quanto para **PvE** (Player vs. Environment).

## Funcionalidades

- **Instanciação de Personagens**: O jogador pode criar personagens com diferentes raças, atributos e habilidades.
- **Energia (Mana ou Stamina)**: Dependendo da raça escolhida, a energia do personagem pode ser mana ou stamina, influenciando o tipo de habilidades que podem ser usadas.
- **Habilidades Especiais**: Cada raça possui um poder especial com custo em mana ou stamina.
- **Combate PvP e PvE**: Implementação de mecânicas de combate para lutas entre jogadores ou contra o ambiente.

## Tecnologias Utilizadas

- **TypeScript**: Para garantir tipagem estática e melhor qualidade no desenvolvimento.
- **Express**: Utilizado para a criação de APIs e roteamento da aplicação.
- **Docker**: Facilita a criação de ambientes isolados para a aplicação, garantindo consistência.
- **docker-compose**: Gerencia os diferentes containers da aplicação de forma fácil e eficiente.
- **POO (Programação Orientada a Objetos)**: Princípios aplicados ao design da lógica do jogo, promovendo modularidade e reutilização de código.

## Como Executar

### Pré-requisitos

- **Docker**: Certifique-se de que você tem o Docker e o docker-compose instalados em sua máquina.

### Passo a Passo

1. Clone este repositório:

    ```bash
    git clone https://github.com/SeuUsuario/trybers-and-dragons.git
    ```

2. Acesse o diretório do projeto:

    ```bash
    cd trybers-and-dragons
    ```

3. Execute o Docker para iniciar a aplicação:

    ```bash
    docker-compose up
    ```

4. A aplicação estará disponível na sua máquina local e pronta para uso.

## Estrutura do Projeto

- **src/**: Contém o código-fonte do projeto.
  - **characters/**: Classes relacionadas aos personagens, raças e atributos.
  - **combat/**: Lógica de combate para PvP e PvE.
  - **energy/**: Gerenciamento de mana ou stamina e habilidades especiais.
  - **routes/**: Definição das rotas e APIs para a interação com a aplicação.

<h3>Aplicação</h3>

![trybers_and_dragons](https://user-images.githubusercontent.com/91297277/202235664-0b07c04b-1121-4533-a400-f5e7607a5e0b.png)

