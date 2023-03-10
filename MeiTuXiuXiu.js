var obj = JSON.parse($response.body);

obj.data.vip_type=1;
obj.data.expire_days=-9999999999;
obj.data.is_expire=0;
obj.data.in_valid_time=5576488923;
obj.data.is_valid_user=1;
obj.data.valid_time=5576488923;
obj.data.home_prompt="粉钻会员 2100年1月1日到期";
obj.data.home_btn_prompt="已解锁";

$done({ body: JSON.stringify(obj) });
