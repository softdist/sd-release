#!/usr/bin/env bash
env_file=/secrets/.dockerenv
sup_file=./.env
mach=$(uname -m)
image="lynsei/run:latest"

[[ -v THO_PAT_DECENC && -v THO_PAT_RELEASE ]] && b_exists=true
[[ -n "$THO_PAT_DECENC" && -n "$THO_PAT_RELEASE" ]] && b_noempty=true
if [[ "$b_exists" && "$b_noempty" ]]; then
  echo "Running Release using THO_PAT_* ENV VARS (detected)..."
  docker run --rm -it \
  -e "THO_PAT_DECENC=$THO_PAT_DECENC" \
  -e "THO_PAT_RELEASE=$THO_PAT_RELEASE" \
  -e VERSION=$VERSION \
  -e TITLE="Release $TITLE" \
  --platform linux/$mach $image
else
  if [ -f "$env_file" ] && [ -s "$env_file" ]; then
    echo "Running Release using .dockerenv file..."
    docker run --rm -it --env-file $env_file --platform linux/$mach $image
  else
      if [ -f "$sup_file" ] && [ -s "$sup_file" ]; then
        echo "Running Release using local .env file..."
        docker run --rm -it --env-file $sup_file --platform linux/$mach $image
      else
        echo "No .dockerenv or local .env file or THO_PAT_* variables set!"
      fi
  fi
fi


