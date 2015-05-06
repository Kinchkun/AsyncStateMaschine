# -- Abbrevation --

TS := node_modules/typescript/bin/tsc
SRC_FILES := $(wildcard src/*.ts)

TEST_SRC_FILES := $(wildcard tests/spec/*.ts)
TEST_JS_FILES := $(TEST_SRC_FILES:%.ts=%.js)

# -- Targets --

src/stateMachine.js: $(SRC_FILES)
	$(TS) --module commonjs $<

tests: $(TEST_JS_FILES)
	cd tests && node ../node_modules/jasmine/bin/jasmine.js

%.js: %.ts
	$(TS) --module commonjs $<

PHONY: clean
clean:
	rm -f src/*.js
	rm -f tests/spec/*.js
