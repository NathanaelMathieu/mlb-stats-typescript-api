#!/bin/bash

ENDPOINTS=( "attendance" "awards" "draft" "game" "league" "job" "schedule" "season" "sports" "standings" "stats" "team" "venue" "division" "homerunderby" "highlow" "conference" )
# These aren't working
BAD_ENDPOINTS=( "people" )

# for i in "$@"
# do
#     ENDPOINTS+=("$i")
# done

for i in "${ENDPOINTS[@]}"
do
    echo "Fetching MLB StatsAPI OpenAPI JSON documentation for endpoint '$i'"
    curl -o "src/mlb-openapi-specs/$i.json" "https://statsapi.mlb.com/docs/$i/swagger.json"
    npx openapi-typescript-codegen --input "src/mlb-openapi-specs/$i.json" --output "src/generated-api/$i"
done