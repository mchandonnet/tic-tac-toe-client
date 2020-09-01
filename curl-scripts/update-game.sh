
curl "https://tic-tac-toe-api-development.herokuapp.com/games/5f4c433d8831c9001787f8e3" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=09a486089f665f739ce90451e1c6c120" \
  --header "Content-Type: application/json" \
  --data '{
    "game": {
      "cell": {
        "index": "'"0"'",
        "value": "'"X"'"
      },
      "over": false
    }
  }'