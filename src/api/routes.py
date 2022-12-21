"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Producto, Imagenes, Favoritos, Carrito, Categoria, SubCategoria
from api.utils import generate_sitemap, APIException

from flask_bcrypt import Bcrypt

from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager

api = Blueprint('api', __name__)
app = Flask(__name__)
bcrypt = Bcrypt(app)

"----------CREAR CUENTA----------------------"
@api.route('/crear_cuenta', methods=["POST"])
def crear_cuenta():
    body = request.get_json()

    nombre = body.get("nombre")
    apellido = body.get("apellido")
    email = body.get("email")
    password1 = body.get("password1")
    password2 = body.get("password2")
    
    if email is None or password1 is None or password2 is None:
        return jsonify({"msg": "Email o Password incorrectos!", "data" : None}),400

    if len(password1) < 6:
        return jsonify({"msg": "El tamaño de la contraseña es incorrecto!", "data" : None}),400

    if password1 != password2:
        return jsonify({"msg": "Las contraseñas no coinciden!", "data" : None}),400

    hash = bcrypt.generate_password_hash(password1)

    try:
        user = User(
            nombre = nombre,
            apellido = apellido,
            email = email,
            password = hash.decode("utf-8"),
            is_active = True
        )

        db.session.add(user)
        db.session.commit()

        return jsonify({"msg": None,"data" : user.serialize()}),201

    except:
        return jsonify({"msg": "Error! Usuario/Email ya existente!"}), 400

"----------LOGIN---------------------"
@api.route('/login', methods=["POST"])
def login():
    body = request.get_json()
    email = body.get("email")
    password = body.get("password")
    
    if email is None or password is None:
        return jsonify({"msg": "Email o Password incorrectos!", "data" : None}),400
    
    users = User.query.filter_by(email = email).all()
    if(len(users)==0):
        return jsonify({"msg":"El usuario con mail "+email+" no existe","data": None}),400
    user = users[0]
    hash = user.password

    isValid = bcrypt.check_password_hash(hash, password)
    
    if not isValid:
        return jsonify({"msg":"Clave incorrecta","data": None}),400

    token = create_access_token(identity={"rol": "usuario", "data": user.serialize()})
    return jsonify({"msg": None ,"data":token}),200    

"-------------PAGINAS PRIVADAS-------------------"  
@api.route('/privado', methods=["GET"])
@jwt_required()
def privado():
    data = get_jwt_identity()
    if data["rol"] == "usuario":
        pass
    return jsonify(data)

"-------------MODIFICAR DATOS PERSONALES-------------------"  
@api.route('/datos_personales/<id>', methods=["PUT"])
def datos_personales(id):
    usuario = User.query.get(id)

    if usuario is None:
        return jsonify({"msg": "No existe el Personaje con id: " + str(id)}), 400
        
    body = request.get_json()

    nombre = body.get("nombre")
    apellido = body.get("apellido")
    domicilio = body.get("domicilio")
    localidad = body.get("localidad")
    provincia = body.get("provincia")
    CP = body.get("CP")
    DNI = body.get("DNI")

    try:
        usuario.nombre = body.get('nombre')
        usuario.apellido = body.get('apellido')
        usuario.domicilio = body.get('domicilio')
        usuario.localidad = body.get('localidad')
        usuario.provincia = body.get('provincia')
        usuario.CP = body.get('CP')
        usuario.DNI = body.get('DNI')
        
        db.session.commit()

        return jsonify({"msg": None,"data" : usuario.serialize()}),200
    except:
        return jsonify({"msg": "No se pudieron cargar los datos!","data" : None}),400