var body = $response.body.replace(/"vip_type":\d/g,'"vip_type":1')
.replace(/"is_vip":\d/g,'"is_vip":1')
.replace(/"vip_expire_time":\d+/g,'"vip_expire_time":4567891235')
.replace(/"balance":\d+/g,'"balance":99999')
.replace(/"success":\d/g,'"success":1')
$done({ body });
