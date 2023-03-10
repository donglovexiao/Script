var obj = JSON.parse($response.body); 

obj ={
  "error": 0,
  "data": {
    "error_msg": "",
    "is_success": true,
    "user_info": {
      "is_vip": "9A0684792021D73BE42B71491469ADFA",
      "expired_time": 0,
      "member_state": 2
    },
    "error_code": "",
    "data_info": []
  }
}

$done({body:JSON.stringify(obj)});
