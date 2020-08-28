
curl "https://tic-tac-toe-api-development.herokuapp.com/games/5f495d40e123ff001748bfa0" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=cd4fcb005539268dc096f3f1cf9111fd" \
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