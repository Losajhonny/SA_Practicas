import uuid
import jwt

TOKENS = []
SECRET = []

def gen():
    print("-- generar token --")
    carnet = input("Carnet: ")
    name = input("Nombre: ")

    secret = str(uuid.uuid4()).replace("-", "")
    encoded = jwt.encode({ "carnet": carnet, "name": name }, secret, algorithm="HS256")

    print("Secret:", secret)
    print("Token:", encoded)
    print("")

    TOKENS.append(encoded)
    SECRET.append(secret)

def decode():
    print("-- validar token --")

    for i in range(0, len(TOKENS)):
        print(str(i) + ".", "Secret:", SECRET[i], "Token:", TOKENS[i])

    print("")
    x = int(input("seleccione un token: "))

    secret = SECRET[x]
    token = TOKENS[x]

    dec = jwt.decode(token, secret, algorithms="HS256")
    enc = jwt.encode(dec, secret, algorithm="HS256")

    if token == enc:
        print("TOKEN VALIDO")
        print("")
    
    SECRET.pop(x)
    TOKENS.pop(x)
    

def main():
    while True:

        print("-------------- Generador token ---------------")
        print("1. Generar token")
        print("2. Decodificar token")
        print("3. Salir")
        print("")

        x = int(input("elegir opcion: "))
        print("")

        if x == 1:
            gen()
        elif x == 2:
            decode()
        else:
            break

main()