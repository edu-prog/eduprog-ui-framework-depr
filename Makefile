deploy:
	npm run build
	scp -r dist/* c23728@91.201.52.67:/home/c23728/test.eduprog.ru/www