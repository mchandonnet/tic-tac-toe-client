
  curl "https://tic-tac-toe-api-development.herokuapp.com/change-password" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=edfa0d648b4232dd89cc2cfd8d621579" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
    "old": "'"${OLD}"'",
    "new": "'"${NEW}"'"
    }
  }'