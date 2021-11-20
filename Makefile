PRETTIER_GLOB := functions/**/*.js

check:
	npx prettier --check $(PRETTIER_GLOB)

lint:
	DEBUG=eslint:cli-engine npx eslint functions/

prettier:
	npx prettier --write $(PRETTIER_GLOB)

serve:
	npx wrangler pages dev .

yamllint:
	yamllint --format colored --strict .github/workflows/ .yamllint.yaml
