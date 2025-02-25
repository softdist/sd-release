# import config
cnf ?= .env
include $(cnf)
export $(shell sed 's/=.*//' $(cnf))

# HELP
# This will output the help for each task
# thanks to https://marmelab.com/blog/2016/02/29/auto-documented-makefile.html
.PHONY: help

help: ## Print all commands and help info
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

.DEFAULT_GOAL := help


release:  ## Push latest release by running Release Image using .env vars
	./docker_run.sh

images: bake-bin-arm bake-bin-amd bake-release  ## Create Release and Binary Images

push:  ## Push Images to the docker registry

bake-release:  ## Create Bake Release Image
	./docker_bake_release.sh

bake-bin-arm:  ## Create Bake Bin ARM Image
	./docker_bake_arm.sh

bake-bin-amd:  ## Create Bake Bin AMD Image
	./docker_bake_amd.sh
