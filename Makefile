BASE_SOURCE_URL_FRONTEND = D://Projects//houseProject//shophousefrontend
BASE_SOURCE_URL_BACKEND = shophousebackend

.PHONY: hello
hello:
	echo "welcome to shophouse"

.PHONY: house-frontend-install
house-frontend-install:
	cd $(BASE_SOURCE_URL_FRONTEND); npm install react-scripts axios; \
	npm install react-bootstrap bootstrap react-doom reactstrap react-router-dom; \
	npm install eslint-plugin-react-hooks --save-dev web-vitals;\
	npm install nodemon express -g;

.PHONY: house-frontend-install-window
house-frontend-install-window:
	cd $(BASE_SOURCE_URL_FRONTEND) && npm install react-scripts axios\
    cd $(BASE_SOURCE_URL_FRONTEND) && npm install react-bootstrap bootstrap react-dom reactstrap react-router-dom\
    cd $(BASE_SOURCE_URL_FRONTEND) && npm install eslint-plugin-react-hooks --save-dev web-vitals\
    npm install nodemon express -g
	
.PHONY: house-frontend-up-window
house-frontend-up-window:
	cd $(BASE_SOURCE_URL_FRONTEND) && npm start

.PHONY: house-frontend-up
house-frontend-up:
	cd $(BASE_SOURCE_URL_FRONTEND); npm start

.PHONY: house-backend-install
house-backend-install:

.PHONY: house-backend-up
house-backend-up:
	cd $(BASE_SOURCE_URL_BACKEND); npx nodemon app.js -y;

# .PHONY: server-down
# server-down:
# 	gnome-terminal -- 
