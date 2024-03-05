
var body = $response.body.replace(/"isvip":"false"/g,'"isvip":"true"')
.replace(/"PayVip":\d/g,'"PayVip":1')
.replace(/"PayVipExpDate":".*?"/g,'"PayVipExpDate":"2032/9/30"')
.replace(/"PayVipResidueSeconds":\d+/g,'"PayVipResidueSeconds":9999999999')
.replace(/"ExpirationTimestamp":\d+/g,'"ExpirationTimestamp":1964683735')
.replace(/"ExpirationTimestamp1":\d+/g,'"ExpirationTimestamp1":1961918431')
$done({ body });
