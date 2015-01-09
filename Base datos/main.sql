/*
Navicat SQLite Data Transfer

Source Server         : Sqllite
Source Server Version : 30714
Source Host           : :0

Target Server Type    : SQLite
Target Server Version : 30714
File Encoding         : 65001

Date: 2014-12-27 08:57:26
*/

PRAGMA foreign_keys = OFF;

-- ----------------------------
-- Table structure for Abono_credito
-- ----------------------------
DROP TABLE IF EXISTS "main"."Abono_credito";
CREATE TABLE Abono_credito (Codigo_abono integer, Fk_codigo_factura_credito text NOT NULL, Fecha_abono text, Valor_abono integer, PRIMARY KEY (Codigo_abono));

-- ----------------------------
-- Records of Abono_credito
-- ----------------------------

-- ----------------------------
-- Table structure for Abono_debito
-- ----------------------------
DROP TABLE IF EXISTS "main"."Abono_debito";
CREATE TABLE Abono_debito (Fk_codigo_factura text NOT NULL, Valor_abono integer, Fecha_abono text, PRIMARY KEY (Fk_codigo_factura));

-- ----------------------------
-- Records of Abono_debito
-- ----------------------------

-- ----------------------------
-- Table structure for Categoria
-- ----------------------------
DROP TABLE IF EXISTS "main"."Categoria";
CREATE TABLE Categoria (Codigo_categoria integer, Nombre_categoria integer, Fk_codigo_producto text NOT NULL, PRIMARY KEY (Codigo_categoria));

-- ----------------------------
-- Records of Categoria
-- ----------------------------

-- ----------------------------
-- Table structure for Cliente
-- ----------------------------
DROP TABLE IF EXISTS "main"."Cliente";
CREATE TABLE Cliente (Codigo_cliente integer, Cedula integer, Nombre text, Telefono text, Direccion text, PRIMARY KEY (Codigo_cliente));

-- ----------------------------
-- Records of Cliente
-- ----------------------------

-- ----------------------------
-- Table structure for Detalle_credito_Productos
-- ----------------------------
DROP TABLE IF EXISTS "main"."Detalle_credito_Productos";
CREATE TABLE Detalle_credito_Productos (Fk_codigo_factura_credito text NOT NULL, Fk_codigo_producto text NOT NULL, Cantidad integer, Valor_unitario integer, PRIMARY KEY (Fk_codigo_factura_credito, Fk_codigo_producto));

-- ----------------------------
-- Records of Detalle_credito_Productos
-- ----------------------------

-- ----------------------------
-- Table structure for Detalle_productos_inventario
-- ----------------------------
DROP TABLE IF EXISTS "main"."Detalle_productos_inventario";
CREATE TABLE Detalle_productos_inventario (Fk_codigo_factura text NOT NULL, Fk_codigo_producto text NOT NULL, Cantidad integer, Saldo integer, Valor_unitario integer, PRIMARY KEY (Fk_codigo_factura, Fk_codigo_producto));

-- ----------------------------
-- Records of Detalle_productos_inventario
-- ----------------------------

-- ----------------------------
-- Table structure for Factura_credito
-- ----------------------------
DROP TABLE IF EXISTS "main"."Factura_credito";
CREATE TABLE Factura_credito (Codigo_factura_credito text, Fk_codigo_cliente integer NOT NULL, Fecha_factura text, Valor_total integer, Estado text, PRIMARY KEY (Codigo_factura_credito));

-- ----------------------------
-- Records of Factura_credito
-- ----------------------------

-- ----------------------------
-- Table structure for Factura_entrada
-- ----------------------------
DROP TABLE IF EXISTS "main"."Factura_entrada";
CREATE TABLE Factura_entrada (Codigo_factura text NOT NULL, Fecha_factura text, Valor_factura integer, Estado text, Fk_codigo_proveedor integer NOT NULL, PRIMARY KEY (Codigo_factura));

-- ----------------------------
-- Records of Factura_entrada
-- ----------------------------

-- ----------------------------
-- Table structure for Precio
-- ----------------------------
DROP TABLE IF EXISTS "main"."Precio";
CREATE TABLE "Precio" (
"Codigo_precio"  integer,
"Fk_codigo_producto"  text NOT NULL,
"Tipo"  text,
"Valor_Producto"  integer,
PRIMARY KEY ("Codigo_precio" ASC),
FOREIGN KEY ("Fk_codigo_producto") REFERENCES "Productos" ("Codigo_producto")
);

-- ----------------------------
-- Records of Precio
-- ----------------------------

-- ----------------------------
-- Table structure for Productos
-- ----------------------------
DROP TABLE IF EXISTS "main"."Productos";
CREATE TABLE Productos (Codigo_producto text NOT NULL, Nombre_producto text, Stop_minimo integer, Stop_maximo integer, Descripcion text, PRIMARY KEY (Codigo_producto));

-- ----------------------------
-- Records of Productos
-- ----------------------------

-- ----------------------------
-- Table structure for Proveedor
-- ----------------------------
DROP TABLE IF EXISTS "main"."Proveedor";
CREATE TABLE Proveedor (Codigo_proveedor integer NOT NULL, Nombre_proveedor text, Telefono text, Direccion text, PRIMARY KEY (Codigo_proveedor));

-- ----------------------------
-- Records of Proveedor
-- ----------------------------

-- ----------------------------
-- Table structure for _Precio_old_20141227
-- ----------------------------
DROP TABLE IF EXISTS "main"."_Precio_old_20141227";
CREATE TABLE "_Precio_old_20141227" (Codigo_precio integer, Fk_codigo_producto text NOT NULL, Tipo text, Valor_Producto integer, PRIMARY KEY (Codigo_precio));

-- ----------------------------
-- Records of _Precio_old_20141227
-- ----------------------------
