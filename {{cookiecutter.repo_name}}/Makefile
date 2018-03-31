SERVICES := web node db

.PHONY: psql
psql:
	docker-compose exec db psql -U postgres {{cookiecutter.project_name}}

.PHONY: test
test: ## Run tests
	docker-compose exec web pytest $(filter-out $@,$(MAKECMDGOALS))

.PHONY: load-current
load-current:
	docker-compose exec web python manage.py loaddata current

.PHONY: dropschema
dropschema:
	docker-compose exec db psql -U postgres {{cookiecutter.project_name}} -c 'drop schema public cascade; create schema public'

.PHONY: dump-live-data
dump-live-data:
	DATABASE_URL=$(shell heroku config:get DATABASE_URL --app money-talks) python manage.py dumpdata --indent=2 core -o {{cookiecutter.project_name}}/core/fixtures/current.json


.PHONY: start-dev
start-dv:
	docker-compose up -d && docker-compose logs -f

.PHONY: prod-start
prod-start:
	heroku ps:scale web=1

.PHONY: prod-stop
prod-stop:
	heroku ps:scale web=0


.PHONY: ssh
ssh: ## Launch a shell inside the container
	docker-compose exec web bash

.PHONY: ${SERVICES}
${SERVICES}:
	docker-compose exec $@ $(filter-out $@,$(MAKECMDGOALS))

.PHONY: lint
lint:
	docker-compose exec web mypy .
