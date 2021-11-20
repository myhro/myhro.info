PRETTIER_GLOB := functions/**/*.js

check:
	npx prettier --check $(PRETTIER_GLOB)

prettier:
	npx prettier --write $(PRETTIER_GLOB)

serve:
	npx wrangler pages dev .
