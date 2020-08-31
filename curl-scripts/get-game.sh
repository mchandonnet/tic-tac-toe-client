
curl "https://tic-tac-toe-api-development.herokuapp.com/games/get" \
  --include \
  --request GET \
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