let Premium = $response.body;
var modified = JSON.parse(Premium);
modified.data = {
    "member_type" : "SUPER_VIP",
    "super_vip_exp_at" : 4070880000000,
    "total_capacity" : 6597069766656,
    "use_capacity" : modified.data.use_capacity,
  };
$done({body:JSON.stringify(modified)});
