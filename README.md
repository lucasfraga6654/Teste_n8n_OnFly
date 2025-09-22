## Passo a passo para rodar o projeto


1. **Instale o Docker Desktop:**
	- Baixe e instale o Docker Desktop para Windows ou Mac a partir de: https://www.docker.com/products/docker-desktop
	- Para Linux, siga as instruções oficiais: https://docs.docker.com/engine/install/

2. **Verifique a instalação do Docker Compose:**
	- Após instalar o Docker Desktop, o Docker Compose já estará disponível.
	- Para verificar, execute no terminal:
	  ```sh
	  docker-compose --version
	  ```
	- Você deve ver a versão instalada do Docker Compose.

3. **(Opcional) Instale Docker Compose manualmente no Linux:**
	- Se necessário, siga: https://docs.docker.com/compose/install/



1. **Clone o repositório:**
	```sh
	git clone https://github.com/lucasfraga6654Teste_n8n_OnFly.git

	cd n8n-nodes-random
	```

2. **Instale as dependências:**
	```sh
    npm install -g typescript
	npm install -g n8n
	```

3. **Compile o projeto e suba o Docker :**
	```sh
    docker-compose up -d

	npm run build
	```

4. **Configure o n8n para usar o node custom:**
	- Adicione a variável de ambiente no seu n8n principal:
	  ```
	  N8N_CUSTOM_EXTENSIONS=Caminho\absoluto\para\n8n-nodes-random\dist
	  ```
	- Exemplo para Windows:
	  ```
	  N8N_CUSTOM_EXTENSIONS=C:\Users\seu-usuario\caminho\para\n8n-nodes-random\dist
	  ```

5. **Reinicie o n8n e a build:**
	- Se estiver usando Docker Compose:
	  ```sh
	  docker-compose restart n8n

	  npm run build
	  ```
	

6. **Acesse o n8n e faça o login.**

	  ```sh
	 http://localhost:5678
	  ```
Pronto! Agora você pode usar o node custom no seu fluxo n8n.
Este é um node da comunidade n8n. Ele permite que você use o nome do app/serviço em seus fluxos de trabalho n8n.

O nome do app/serviço deve ser uma ou duas frases descrevendo o serviço que este node integra.

O n8n é uma plataforma de automação de fluxos de trabalho com licença fair-code.

[Instalação](#instalacao)
[Operações](#operacoes)
[Compatibilidade](#compatibilidade)
[Uso](#uso)  <!-- apague se não usar esta seção -->
[Recursos](#recursos)


Instalação
Siga o guia de instalação na documentação de nodes da comunidade n8n.

Operações


Credenciais
Se os usuários precisarem autenticar com o app/serviço, forneça detalhes aqui. Inclua pré-requisitos (como cadastro no serviço), métodos de autenticação disponíveis e como configurá-los.

Compatibilidade
Informe a versão mínima do n8n, bem como as versões testadas. Você também pode incluir problemas conhecidos de incompatibilidade.

Uso
Esta seção é opcional. Use para ajudar usuários com aspectos difíceis ou confusos do node.

Se você espera novos usuários, pode linkar para a documentação "Experimente" do n8n para ajudá-los a começar.

Recursos
Documentação de nodes da comunidade n8n
Link para a documentação do app/serviço.