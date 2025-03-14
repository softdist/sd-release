# import config

ifeq ($(shell test -e .env),yes)
	cnf ?= .env
	include $(cnf)
	export $(shell sed 's/=.*//' $(cnf))
endif

# HIDDEN
print-%: ##  Print env var names and values
	@echo $* = $($*)
echo-%: ##  Print any environment variable
	@echo $($*)

# HELP
# This will output the help for each task
# thanks to https://marmelab.com/blog/2016/02/29/auto-documented-makefile.html
.PHONY: help

help: ## Print all commands and help info
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

.DEFAULT_GOAL := help

envs:  ## Source env file if you are running local
	./env.sh


downstream-tags:  ## Downstream:  List git tags
	git -c 'versionsort.suffix=-' ls-remote --tags --sort='v:refname' https://github.com/softdist/docker.client.git

git-head:  ## Get the latest git tag
	git tag -l | tail -n 1

bump-major:  ## Bump the major version tag
	./scripts/bump_major.sh

bump-minor:  ## Bump the minor version tag
	./scripts/bump_minor.sh

bump-patch:  ## Bump the patch version tag
	./scripts/bump_patch.sh

bump-build:  ## Bump the build version to a random build number
	./scripts/bump_build.sh

run-release:  ## Run release image locally
	./scripts/docker_run.sh

images: build-push-bins build-push-release  ## Build and push binaries, build and push release image

build-push-bins: bake-bin-arm bake-bin-amd push  ## Bake and push binary images

build-push-release: bake-release push  ## Bake and push release image

push:  ## Push Images to the docker registry
	./scripts/docker_push.sh

bake-release:  ## Create Bake Release Image
	./scripts/docker_bake_release.sh

bake-bin-arm:  ## Create Bake Bin ARM Image
	./scripts/docker_bake_arm.sh

bake-bin-amd:  ## Create Bake Bin AMD Image
	./scripts/docker_bake_amd.sh
