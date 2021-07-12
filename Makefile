deploy:
	yarn build
	scp -r dist/* c23728@91.201.52.67:/home/c23728/design-system.eduprog.ru/www
