import requests
import json

# información necesaria para acceder a la api
URL = 'https://gorest.co.in/public-api/users/'
TOKEN = '071ebe34dcdb70e27e0e09dcc4ab9278fedec342295fbc9584145bf7c68df910'
HEADERS = { 'Content-Type': 'application/json', 'Authorization':'Bearer {}'.format(TOKEN) }

"""
Realiza una petición get para listar todos los usuarios
"""
def list_():
    # peticion get
    res = requests.get(URL, headers=HEADERS, verify=True).json()
    # impresion json bonito
    print(json.dumps(res, indent=4, sort_keys=True))

"""
Crea un usuario nuevo con los parametros siguientes:
    name:   nombre completo del usuario
    gander: genero del usuario ('Male', 'Female')
    email:  correo del usuario con formato correcto
    status: estado ('Active', 'Inactive')
"""
def create():
    print('\n----- create -----')
    # captura de datos
    name = input('name: ')
    gender = input('gander: ')
    email = input('email: ')
    status = input('status: ')
    data = { 'name': name, 'gender': gender, 'email': email, 'status': status }

    # peticion post
    res = requests.post(URL, data=json.dumps(data), headers=HEADERS, verify=True).json()
    # impresion json bonito
    print(json.dumps(res, indent=4, sort_keys=True))

"""
Actualiza un usuario con todos sus parametros con identificacion id
"""
def update():
    print('\n----- update -----')
    # captura de datos
    idd = input('id: ')
    name = input('name: ')
    gender = input('gander: ')
    email = input('email: ')
    status = input('status: ')
    data = { 'name': name, 'gender': gender, 'email': email, 'status': status }

    # peticion patch
    res = requests.patch(URL + idd, data=json.dumps(data), headers=HEADERS, verify=True).json()
    # impresion json bonito
    print(json.dumps(res, indent=4, sort_keys=True))

"""
Elimina un usuario con identificacion id
"""
def delete():
    print('\n----- delete -----')
    idd = input('id: ')

    # peticion delete
    res = requests.delete(URL + idd, headers=HEADERS, verify=True).json()
    # impresion json bonito
    print(json.dumps(res, indent=4, sort_keys=True))


"""
Recupera un usuario con identificacion id
"""
def get():
    print('\n----- get -----')
    idd = input('id: ')

    # peticion get
    res = requests.get(URL + idd, headers=HEADERS, verify=True).json()
    # impresion json bonito
    print(json.dumps(res, indent=4, sort_keys=True))

"""
Funcion principal de la consola
"""
def main():
    while True:
        print('\n---- Welcome ----')
        print('1. List user')
        print('2. Create user')
        print('3. Update user')
        print('4. Delete user')
        print('5. Get user')
        print('6. Exit\n')
        opcion = input('Elegir opción: ')

        if int(opcion) == 1:
            list_()
        elif int(opcion) == 2:
            create()
        elif int(opcion) == 3:
            update()
        elif int(opcion) == 4:
            delete()
        elif int(opcion) == 5:
            get()
        elif int(opcion) == 6:
            break

main()

# ultima prueba usuario id : 1687
