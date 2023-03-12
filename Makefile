BASE_SOURCE_URL = shophouse

.PHONY: house-server-install
house-server-install:
	cd $(BASE_SOURCE_URL); npm install react-scripts axios; \
	npm install react-bootstrap bootstrap react-doom reactstrap react-router-dom; \
	npm install eslint-plugin-react-hooks --save-dev web-vitals;\


.PHONY: house-server-up
house-server-up:
	cd $(BASE_SOURCE_URL); npm start

# .PHONY: server-down
# server-down:
# 	gnome-terminal -- 
