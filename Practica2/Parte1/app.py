# librerias
import uuid
import jwt

# constantes
TOKENS = []
SECRET = []

# generador tokens con payload 'carnet', 'nombre
def gen():
    print("-- generar token --")
    # obtener datos
    carnet = input("Carnet: ")
    name = input("Nombre: ")

    # encriptacion con jwt
    secret = str(uuid.uuid4()).replace("-", "")
    encoded = jwt.encode({ "carnet": carnet, "name": name }, secret, algorithm="HS256")

    print("Secret:", secret)
    print("Token:", encoded)
    print("")

    # almacenar datos jwt
    TOKENS.append(encoded)
    SECRET.append(secret)

# decodifica tokens que estan en memoria
def decode():
    print("-- validar token --")

    # mostrar lista tokens
    for i in range(0, len(TOKENS)):
        print(str(i) + ".", "Secret:", SECRET[i], "Token:", TOKENS[i])

    print("")
    x = int(input("seleccione un token: "))

    # obtner datos de jwt
    secret = SECRET[x]
    token = TOKENS[x]

    # decodificar y volver a codificar
    dec = jwt.decode(token, secret, algorithms="HS256")
    enc = jwt.encode(dec, secret, algorithm="HS256")

    # validacion token
    if token == enc:
        print("TOKEN VALIDO")
        print("")

# funcion principal -- menu --
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