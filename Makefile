ifeq ($(OS),Windows_NT)
   	BASE_SOURCE_URL_FRONTEND = D://Projects//houseProject//shophousefrontend
	BASE_SOURCE_URL_BACKEND =  D://Projects//houseProject//shophousebackend
else
	BASE_SOURCE_URL_FRONTEND = shophousefrontend
	BASE_SOURCE_URL_BACKEND = shophousebackend
endif

.PHONY: hello
hello:
	echo "welcome to shophouse"
#Linux
.PHONY: house-frontend-install
house-frontend-install:
	cd $(BASE_SOURCE_URL_FRONTEND); npm install react-scripts axios; \
	npm install react-bootstrap bootstrap react-doom reactstrap react-router-dom; \
	npm install eslint-plugin-react-hooks --save-dev web-vitals;\
	npm install nodemon express -g;

.PHONY: house-frontend-up
house-frontend-up:
	cd $(BASE_SOURCE_URL_FRONTEND); npm start

.PHONY: house-backend-install
house-backend-install:

.PHONY: house-backend-up
house-backend-up:
	cd $(BASE_SOURCE_URL_BACKEND); npx nodemon app.js -y;

#Window
.PHONY: house-frontend-install-window
house-frontend-install-window:
	cd $(BASE_SOURCE_URL_FRONTEND) && npm install react-scripts axios\
    cd $(BASE_SOURCE_URL_FRONTEND) && npm install react-bootstrap bootstrap react-dom reactstrap react-router-dom\
    cd $(BASE_SOURCE_URL_FRONTEND) && npm install eslint-plugin-react-hooks --save-dev web-vitals\
    npm install axios nodemon express -g
	
.PHONY: house-frontend-up-window
house-frontend-up-window:
	cd $(BASE_SOURCE_URL_FRONTEND) && npm start

.PHONY: house-backend-install-window
house-backend-install-window:
	cd $(BASE_SOURCE_URL_BACKEND) && npm install express

.PHONY: house-backend-up-window
house-backend-up-window:
	cd $(BASE_SOURCE_URL_BACKEND) && npx nodemon app.js -y
