#!/usr/bin/env bash
commit=$(git log | head -n 3)
build=$(./semver.sh bump build $(shuf -i 10000-99999 -n 1) $(git tag -l | tail -n 1))
git tag -a "$build" -m "Build Bump" -s
echo "$build" > .semver.build.tag
echo "$commit" > .semver.commit.tag
cat .semver.build.tag
cat .semver.commit.tag
