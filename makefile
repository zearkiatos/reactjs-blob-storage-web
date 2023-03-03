docker-dev-up:
	docker compose -f docker-compose.dev.yml up --build

docker-dev-down:
	docker compose -f docker-compose.dev.yml down

docker-build:
	docker compose up --build

docker-down:
	docker compose down