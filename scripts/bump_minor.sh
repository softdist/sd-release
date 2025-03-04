#!/usr/bin/env bash
tag=$(./semver.sh bump minor $(git tag -l | tail -n 1))
git tag -a "$tag" -m "tagVersion=$tag"
commit=$(git log | head -n 3)
echo "$tag" > .semver.version.tag
echo "$commit" > .semver.commit.tag
cat .semver.version.tag
cat .semver.commit.tag
