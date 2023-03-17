BASE_SOURCE_URL_FRONTEND = shophousefrontend
BASE_SOURCE_URL_BACKEND = shophousebackend

.PHONY: house-install
house-install:
	cd $(BASE_SOURCE_URL_FRONTEND); npm install react-scripts axios; \
	npm install react-bootstrap bootstrap react-doom reactstrap react-router-dom; \
	npm install eslint-plugin-react-hooks --save-dev web-vitals;\
	npm install nodemon express -g;

.PHONY: house-frontend-up
house-server-up:
	cd $(BASE_SOURCE_URL_FRONTEND); npm start

.PHONY: house-backend-install
house-backend-install:

.PHONY: house-backend-up
house-backend-up:
	cd $(BASE_SOURCE_URL_BACKEND); npx nodemon app.js -y

# .PHONY: server-down
# server-down:
# 	gnome-terminal -- 
