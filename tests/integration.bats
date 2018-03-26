#!/usr/bin/env bats

function redirect_url {
    local DEST_URL="$1"
    curl -I -o /dev/null -s -w "%{redirect_url}" "$DEST_URL"
}

function setup {
    export BASE_URL="https://$DOMAIN"
}

function status_code {
    local DEST_URL="$1"
    curl -I -o /dev/null -s -w "%{http_code}" "$DEST_URL"
}

@test "http redirects to https" {
    URL="http://${DOMAIN}"
    REDIRECT_URL=$(redirect_url "$URL")
    STATUS_CODE=$(status_code "$URL")
    echo "$REDIRECT_URL $STATUS_CODE"
    [[ "$REDIRECT_URL" = "https://${DOMAIN}/" ]]
    [[ "$STATUS_CODE" = 301 ]]
}

@test "www redirects to naked domain" {
    if [[ "$DOMAIN" != "myhro.info" ]]; then
        skip "Should only test production domain"
    fi
    URL="https://www.${DOMAIN}"
    REDIRECT_URL=$(redirect_url "$URL")
    STATUS_CODE=$(status_code "$URL")
    echo "$REDIRECT_URL $STATUS_CODE"
    [[ "$REDIRECT_URL" = "https://${DOMAIN}/" ]]
    [[ "$STATUS_CODE" = 301 ]]
}

@test "/ returns content" {
    URL="${BASE_URL}"
    STATUS_CODE=$(status_code "$URL")
    echo "$STATUS_CODE"
    [[ "$STATUS_CODE" = 200 ]]
}

@test "/dl redirects or doesn't exists" {
    URL="${BASE_URL}/dl"
    STATUS_CODE=$(status_code "$URL")
    echo "$STATUS_CODE"
    [[ "$STATUS_CODE" = 301 || "$STATUS_CODE" = 404 ]]
}

@test "/dl/ can't be listed or doesn't exists" {
    URL="${BASE_URL}/dl/"
    STATUS_CODE=$(status_code "$URL")
    echo "$STATUS_CODE"
    [[ "$STATUS_CODE" = 403 || "$STATUS_CODE" = 404 ]]
}

@test "/imp redirects" {
    URL="${BASE_URL}/imp"
    STATUS_CODE=$(status_code "$URL")
    echo "$STATUS_CODE"
    [[ "$STATUS_CODE" = 301 || "$STATUS_CODE" = 302 ]]
}

@test "/imp/ returns content" {
    URL="${BASE_URL}/imp/"
    STATUS_CODE=$(status_code "$URL")
    echo "$STATUS_CODE"
    [[ "$STATUS_CODE" = 200 ]]
}

@test "/ip redirects or returns content" {
    URL="${BASE_URL}/ip"
    STATUS_CODE=$(status_code "$URL")
    echo "$STATUS_CODE"
    [[ "$STATUS_CODE" = 301 || "$STATUS_CODE" = 200 ]]
}

@test "/ip/ returns content" {
    URL="${BASE_URL}/ip/"
    STATUS_CODE=$(status_code "$URL")
    echo "$STATUS_CODE"
    [[ "$STATUS_CODE" = 200 ]]
}
