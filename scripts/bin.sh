#!/usr/bin/env bash

# We don't need return codes for "$(command)", only stdout is needed.
# Allow `[[ -n "$(command)" ]]`, `func "$(command)"`, pipes, etc.
# shellcheck disable=SC2312
set -u
export __DEVOPS_CONFIG_PATH=$HOME/.config/.devops
export __DEVOPS_MACHINE_ARCH=`uname -m`
abort() {
  printf "%s\n" "$@" >&2
  exit 1
}

# Fail fast with a concise message when not using bash
# Single brackets are needed here for POSIX compatibility
# shellcheck disable=SC2292
if [ -z "${BASH_VERSION:-}" ]
then
  abort "Bash is required to interpret this script."
fi

# Check if script is run with force-interactive mode in CI
if [[ -n "${CI-}" && -n "${INTERACTIVE-}" ]]
then
  abort "Cannot run force-interactive mode in CI."
fi

# Check if both `INTERACTIVE` and `NONINTERACTIVE` are set
# Always use single-quoted strings with `exp` expressions
# shellcheck disable=SC2016
if [[ -n "${INTERACTIVE-}" && -n "${NONINTERACTIVE-}" ]]
then
  abort 'Both `$INTERACTIVE` and `$NONINTERACTIVE` are set. Please unset at least one variable and try again.'
fi

# Check if script is run in POSIX mode
if [[ -n "${POSIXLY_CORRECT+1}" ]]
then
  abort 'Bash must not run in POSIX mode. Please unset POSIXLY_CORRECT and try again.'
fi

# install brew if it does not exist
if [[ `which docker` ]]
	then
  	echo "Docker detected!"
    api=`docker version | grep --regexp "API version.*(.*)"`
    [[ "$api" =~ .*.\:...*.1.[0-9]{2} ]] || abort 'Docker API unavailable.'

  else
    abort 'Docker must be installed / running:  https://docs.docker.com/get-started/get-docker/'
fi

mkdir -p $HOME/.config/.devops

_config () {
  brew install softdis5
  ./install

}

_run () {

}

[ ! -f $__DEVOPS_CONFIG_PATH/.config.location ] && _config

[ -f $__DEVOPS_CONFIG_PATH/.config.location ] && _run $@
