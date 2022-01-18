## Utilizando Containers - Docker 🐳

- Containers são como "pacotes", que possuem internamente o que é necessário para seu funcionamento correto.
- Imagem é uma forma de resgatar um container com uma estrutura já estabelecida anteriormente.

---

## Utilizando Docker

Para inicializar um container, bastar digitar o comando:
                    
> docker container run nome_da_imagem:tag_opcional

Por exemplo:
> docker container run debian

Irá baixar a imagem do Debian latest, pois a tag foi omitida, caso não possua essa imagem localmente.

Caso precise realizar o pull antes, basta visitar qualquer um dos hubs de Docker, por exemplo [Docker Hub](https://hub.docker.com/), fazer a pesquisa da imagem que deseja e realizar o comando especificado nos detalhes.

Alguns dos comandos mais utilizados são:
> docker container ls

Para listar os containers que estão ativos.

---
> docker container ls -a

Para listar os containers todos os containers, seja ativos ou inativos.

---

> docker container ls -l

Para listar o último container criado.

---

> docker container run ubuntu echo 'Hello Pessoa!'

Este comando executa o container com um comando passado como parâmetro, echo, logo a mensagem a ser exibida " Hello Pessoa!"

---

> docker container run -ti ubuntu

É usado para executar o container de forma interitiva, utilizando o teclado para interagir, porém de forma acoplada, o que significa que quando sair do container com "exit", ele automaticamente será parado. Caso queira rodar de forma desacoplada, utilize o parâmetro -dit.

---

## Mais informações
Estes foram apenas alguns dos comandos ensinados no dia. Para mais comandos, o [Cheatsheet](https://raw.githubusercontent.com/sangam14/dockercheatsheets/master/dockercheatsheet8.png) com certeza será muito útil.
