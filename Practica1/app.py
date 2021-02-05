import requests
import json

access_token = '071ebe34dcdb70e27e0e09dcc4ab9278fedec342295fbc9584145bf7c68df910'
url = 'https://gorest.co.in/public-api/users/'
headers = { 'Content-Type': 'application/json', 'Authorization':'Bearer {}'.format(access_token) }

def list_():
    res = requests.get(url, headers=headers, verify=True).json()
    print(json.dumps(res, indent=4, sort_keys=True))

def create():
    print('\n----- create -----')
    name = input('name: ')
    gender = input('gander: ')
    email = input('email: ')
    status = input('status: ')

    data = { 'name': name, 'gender': gender, 'email': email, 'status': status }
    res = requests.post(url, data=json.dumps(data), headers=headers, verify=True).json()
    print(json.dumps(res, indent=4, sort_keys=True))

def update():
    print('\n----- update -----')
    idd = input('id: ')
    name = input('name: ')
    gender = input('gander: ')
    email = input('email: ')
    status = input('status: ')

    data = { 'name': name, 'gender': gender, 'email': email, 'status': status }
    res = requests.patch(url + idd, data=json.dumps(data), headers=headers, verify=True).json()
    print(json.dumps(res, indent=4, sort_keys=True))

def delete():
    print('\n----- delete -----')
    idd = input('id: ')
    res = requests.delete(url + idd, headers=headers, verify=True).json()
    print(json.dumps(res, indent=4, sort_keys=True))

def get():
    print('\n----- get -----')
    idd = input('id: ')
    res = requests.get(url + idd, headers=headers, verify=True).json()
    print(json.dumps(res, indent=4, sort_keys=True))

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

# ultima prueba usuario id : 1355
