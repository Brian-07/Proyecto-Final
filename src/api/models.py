from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__= "user"
    id = db.Column(db.Integer, primary_key=True)
    imgAvatar = db.Column(db.String(120),nullable=True)
    nombre = db.Column(db.String(120),nullable=True)
    apellido = db.Column(db.String(120),nullable=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    domicilio = db.Column(db.String(120),nullable=True)
    localidad = db.Column(db.String(120),nullable=True)
    provincia = db.Column(db.String(120),nullable=True)
    CP = db.Column(db.String(120),nullable=True)
    DNI = db.Column(db.String(120),nullable=True)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "usuarioId": self.id,
            "email": self.email,
            "Nombre": self.nombre,
            "Apellido": self.apellido,
            "Domicilio": self.domicilio,
            "Localidad": self.localidad,
            "Provincia": self.provincia,
            "CP": self.CP,
            "DNI": self.DNI,
            # do not serialize the password, its a security breach
        }

class Categoria(db.Model):
    __tablename__= "categoria"
    categoriaId = db.Column(db.Integer, primary_key = True)
    nombre = db.Column(db.String(200))

    def serialize(self):
        return {
            "categoriaId": self.categoriaId,
            "Nombre": self.nombre,
        }     

class SubCategoria(db.Model):
    __tablename__= "subCategoria"
    subCategoriaId = db.Column(db.Integer, primary_key = True)
    nombre = db.Column(db.String(200))
    categoria = db.Column(db.Integer, db.ForeignKey("categoria.categoriaId"))
    categorias = db.relationship(Categoria)

    def serialize(self):
        return {
            "subCategoriaId": self.subCategoriaId,
            "Nombre": self.nombre,
            "Categoria": self.categoria,
        }                     

class Producto(db.Model):
    __tablename__= "producto"
    productoId = db.Column(db.Integer, primary_key = True)
    titulo = db.Column(db.String(200), nullable = False)
    descripcion = db.Column(db.String(200), nullable = False)
    detalles = db.Column(db.String(200), nullable = False)
    precio = db.Column(db.String(200), nullable = False)
    vendedor = db.Column(db.Integer, db.ForeignKey("user.id"))
    subCategoria = db.Column(db.Integer, db.ForeignKey("subCategoria.subCategoriaId"))
    users = db.relationship(User)


    def serialize(self):
        return {
            "productoId": self.productoId,
            "Titulo": self.Titulo,
            "Descripcion": self.Descripcion,
            "Detalles": self.Detalles,
            "Precio": self.Precio,
        }

class Imagenes(db.Model):
    __tablename__= "imagenes"
    imgId = db.Column(db.Integer, primary_key = True)
    imgProducto = db.Column(db.String(200))
    producto = db.Column(db.Integer, db.ForeignKey("producto.productoId"))
    productos = db.relationship(Producto)

    def serialize(self):
        return {
            "imgId": self.imgId,
            "imgProducto": self.imgProducto,
        } 

class Favoritos(db.Model):
    __tablename__= "favoritos"
    favoritoId = db.Column(db.Integer, primary_key = True)
    producto = db.Column(db.Integer, db.ForeignKey("producto.productoId"))
    usuario = db.Column(db.Integer, db.ForeignKey("user.id"))
    productos = db.relationship(Producto)
    usuarios = db.relationship(User)

    def serialize(self):
        return {
            "FavoritoId": self.favoritoId,
            "Producto": self.producto,
            "Usuario": self.usuario,
        }

class Carrito(db.Model):
    __tablename__= "carrito"
    carritoId = db.Column(db.Integer, primary_key = True)
    producto = db.Column(db.Integer, db.ForeignKey("producto.productoId"))
    usuario = db.Column(db.Integer, db.ForeignKey("user.id"))
    productos = db.relationship(Producto)
    usuarios = db.relationship(User)

    def serialize(self):
        return {
            "CarritoId": self.carritoId,
            "Producto": self.producto,
            "Usuario": self.usuario,
        }

            