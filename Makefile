check:
	npx prettier --check functions/

lint:
	DEBUG=eslint:cli-engine npx eslint --ext .js --ext .ts functions/

prettier:
	npx prettier --write functions/

serve:
	BROWSER=none npx wrangler pages dev .

tsc:
	npx tsc --noEmit

yamllint:
	yamllint --format colored --strict .github/workflows/ .yamllint.yaml
