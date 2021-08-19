#!bin/sh

url="https://howdytech.duckdns.org"

sleep 5

resp=$(curl -s -w "%{http_code}" GET $url)
result=${resp: -3}
if [[ $result == 200 ]]; then
    echo "TEST Index: PASS"
    url="https://howdytech.duckdns.org:5000"    
    resp=$(curl -s -w "%{http_code}" GET $url)
    result=${resp: -3}

    if [[ $result == 200 ]]; then
        echo "TEST Db: PASS"
        exit 0
    else
        echo "TEST Db: FAIL, Result: $result"
        exit 1
    fi
else
    echo "TEST Index: FAIL, Result: $result"
    exit 1
fi
