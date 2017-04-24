# js-ot
Runtime agnostic JavaScript implementation of a composition-friendly core library for operational transforms.

This library represents a (client or server) JavaScript implementation of the protocol outlined by [rameshvk/go-ot](https://github.com/rameshvk/go-ot).

Please check that other project for up-to-date details and protocol changes.

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

# Run tests whenever a file changes
make test-w

# Build binaries to dist/*
make

# Lint source files
make lint

# Run all lint tasks, tests and builds
make integrate

# Publish npm library
make publish
```
