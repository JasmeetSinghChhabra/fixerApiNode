# FixerApiNode

## This Repo Uses Fixer API to convert currency.

### The Fixer API is capable of delivering real-time exchange rate data for 170 world currencies. The API uses endpoint functionaly for getting the historic exchange rate data for all or a specific set of currencies converting amounts from one currency to another retrieving Time-Series data for one or multiple currencies and querying the API for daily fluctuation data.

# To Consume or to use this service simply run

## docker-compose up

## API Usage:

### Select a Base Rate from the list as well as one or more target rates:

#### For This Documentation: The API Key only provides conversion for EUR Currency to any target currency.

AED
AFN
ALL
AMD
ANG
AOA
ARS
AUD
AWG
AZN
BAM
BBD
BDT
BGN
BHD
BIF
BMD
BND
BOB
BRL
BSD
BTC
BTN
BWP
BYN
BYR
BZD
CAD
CDF
CHF
CLF  
CLP
CNY
COP
CRC
CUC
CUP
CVE
CZK
DJF
DKK
DOP
DZD
EGP
ERN
ETB
EUR
FJD
FKP
GBP
GEL
GGP
GHS
GIP
GMD
GNF
GTQ
GYD
HKD
HNL
HRK
HTG
HUF
IDR
ILS
IMP
INR
IQD
IRR
ISK
JEP
JMD
JOD
JPY
KES
KGS
KHR
KMF
KPW
KRW
KWD
KYD
KZT
LAK
LBP
LKR
LRD
LSL
LTL
LVL
LYD
MAD
MDL
MGA
MKD
MMK
MNT
MOP
MRO
MUR
MVR
MWK
MXN
MYR
MZN
NAD
NGN
NIO
NOK
NPR
NZD
OMR
PAB
PEN
PGK
PHP
PKR
PLN
PYG
QAR
RON
RSD
RUB
RWF
SAR
SBD
SCR
SDG
SEK
SGD
SHP
SLL
SOS
SRD
STD
SVC
SYP
SZL
THB
TJS
TMT
TND
TOP
TRY
TTD
TWD
TZS
UAH
UGX
USD
UYU
UZS
VEF
VND
VUV
WST
XAF
XAG
XAU
XCD
XDR
XOF
XPF
YER
ZAR
ZMK
ZMW
ZWL

### Now Key in a date in YYYY/MM/DD Format to get the historical rate for the base currency in the target currecncy.

## Postman Usage

#### For Testing thr API Using Postman
http://data.fixer.io/api/2013-12-24
? access_key = API_KEY
& base = EUR
& symbols = USD,CAD,EUR


http://data.fixer.io/api/2013-12-24?access_key=f5a9c4be0416317dcdeffc0dad390909& base=EUR& symbols=USD,CAD,EUR