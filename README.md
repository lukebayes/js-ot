# js-ot
Runtime agnostic JavaScript implementation of a composition-friendly core library for operational transforms.


# Contributing

```bash
# Set up path for subsequent steps
source setup-env.sh

# Get dev environment set up (e.g., install node and node modules)
make dev-install

# Set up path for subsequent steps
source setup-env.sh

# Ensure this points to $CURRENT_PROJECT_PATH/lib/nodejs/bin/node
which node

# Run tests
make test

# Build binaries to dist/*
make

# Lint source files
make lint

# Run all lint tasks, tests and builds
make integrate

# Publish npm library
make publish
```
