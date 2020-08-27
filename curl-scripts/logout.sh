curl "https://tic-tac-toe-api-development.herokuapp.com/sign-out" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=41adc47e4b11825e3856568153a142d9" \
  --header "Content-Type: application/json"




  #  curl "https://tic-tac-toe-api-development.herokuapp.com/change-password" \
  #--include \
  #--request PATCH \
  #--header "Authorization: Token token=edfa0d648b4232dd89cc2cfd8d621579" \
  #--header "Content-Type: application/json" \
  #--data '{
  #  "passwords": {
  #  "old": "'"${OLD}"'",
  #  "new": "'"${NEW}"'"
  #  }
  #}'