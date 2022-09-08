# Documentation DrivenPass

## Routes:

### Authorization Router:

#### -> POST /sign-up: 
    Header: NONE
    Body:   {
                "email": "******@*.com",
                "password": "**********" min=10
            }
    Return: NONE

#### -> POST /sign-in: 
    Header: NONE
    Body:   {
                "email": "******@*.com",
                "password": "**********" min=10
            }
    Return: Token

### Credentials Router:

#### -> POST /credential: 
    Header: Bearer (Token)
    Body:   {
                "title": "teste",
                "url": "https://*****", Link válido
                "username": "****",
                "password": "****"
            }
    Return: NONE

#### -> GET /credentials: 
    Header: Bearer (Token)
    Body:   NONE
    Return: credentials[]

#### -> GET /credential/(idCredential): 
    Header: Bearer (Token)
    Body:   NONE
    Return: Credential

#### -> DELETE /credential/(idCredential): 
    Header: Bearer (Token)
    Body:   NONE
    Return: NONE

### SafeNotes Router:

#### -> POST /safeNote: 
    Header: Bearer (Token)
    Body:   {
                "title": "*****", max=50
                "content": "*****" max=1000
            }
    Return: NONE

#### -> GET /safeNotes: 
    Header: Bearer (Token)
    Body:   NONE
    Return: safeNotes[]

#### -> GET /safeNote/(idSafeNote): 
    Header: Bearer (Token)
    Body:   NONE
    Return: SafeNote

#### -> DELETE /safeNote/(idSafeNote): 
    Header: Bearer (Token)
    Body:   NONE
    Return: NONE

### Cards Router:

#### -> POST /card: 
    Header: Bearer (Token)
    Body:   {
                "title": "*****",
                "number": "*****",
                "owner": "*****",
                "securityCode": "***", length=3
                "expirationDate": "*****",length=5
                "password": "****",length=4
                "isVirtual": false || true,
                "type": DEBIT || CREDIT || BOTH
            }
    Return: NONE

#### -> GET /cards: 
    Header: Bearer (Token)
    Body:   NONE
    Return: Cards[]

#### -> GET /card/(idCard): 
    Header: Bearer (Token)
    Body:   NONE
    Return: Card

#### -> DELETE /card/(idCard): 
    Header: Bearer (Token)
    Body:   NONE
    Return: NONE

### Cards Router:

#### -> POST /wifi: 
    Header: Bearer (Token)
    Body:   {
                "title": "****",
                "wifiName": "****",
                "password": "****"
            }
    Return: NONE

#### -> GET /wifis: 
    Header: Bearer (Token)
    Body:   NONE
    Return: Wifi[]

#### -> GET /wifi/(idWifi): 
    Header: Bearer (Token)
    Body:   NONE
    Return: Wifi

#### -> DELETE /wifi/(idWifi): 
    Header: Bearer (Token)
    Body:   NONE
    Return: NONE