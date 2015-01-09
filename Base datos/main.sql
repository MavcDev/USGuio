/*
Navicat SQLite Data Transfer

Source Server         : Sqllite
Source Server Version : 30714
Source Host           : :0

Target Server Type    : SQLite
Target Server Version : 30714
File Encoding         : 65001

Date: 2015-01-08 23:06:44
*/

PRAGMA foreign_keys = OFF;

-- ----------------------------
-- Table structure for Abono_credito
-- ----------------------------
DROP TABLE IF EXISTS "main"."Abono_credito";
CREATE TABLE "Abono_credito" (
"Codigo_abono"  integer,
"Fk_codigo_factura_credito"  text NOT NULL,
"Fecha_abono"  text,
"Valor_abono"  integer,
PRIMARY KEY ("Codigo_abono" ASC),
FOREIGN KEY ("Fk_codigo_factura_credito") REFERENCES "Factura_credito" ("Codigo_factura_credito")
);

-- ----------------------------
-- Table structure for Abono_debito
-- ----------------------------
DROP TABLE IF EXISTS "main"."Abono_debito";
CREATE TABLE "Abono_debito" (
"Codigo_abono"  INTEGER NOT NULL,
"Fk_codigo_factura"  text NOT NULL,
"Valor_abono"  integer,
"Fecha_abono"  text,
PRIMARY KEY ("Codigo_abono" ASC),
CONSTRAINT "fkey0" FOREIGN KEY ("Fk_codigo_factura") REFERENCES "Factura_entrada" ("Codigo_factura")
);

-- ----------------------------
-- Table structure for Categoria
-- ----------------------------
DROP TABLE IF EXISTS "main"."Categoria";
CREATE TABLE "Categoria" (
"Codigo_categoria"  integer,
"Nombre_categoria"  integer,
"Fk_codigo_producto"  text NOT NULL,
PRIMARY KEY ("Codigo_categoria" ASC),
FOREIGN KEY ("Fk_codigo_producto") REFERENCES "Productos" ("Codigo_producto")
);

-- ----------------------------
-- Table structure for Cliente
-- ----------------------------
DROP TABLE IF EXISTS "main"."Cliente";
CREATE TABLE Cliente (Codigo_cliente integer, Cedula integer, Nombre text, Telefono text, Direccion text, PRIMARY KEY (Codigo_cliente));

-- ----------------------------
-- Table structure for Detalle_credito_Productos
-- ----------------------------
DROP TABLE IF EXISTS "main"."Detalle_credito_Productos";
CREATE TABLE "Detalle_credito_Productos" (
"Fk_codigo_factura_credito"  text NOT NULL,
"Fk_codigo_producto"  text NOT NULL,
"Cantidad"  integer,
"Valor_unitario"  integer,
PRIMARY KEY ("Fk_codigo_factura_credito" ASC, "Fk_codigo_producto" ASC),
CONSTRAINT "fkey0" FOREIGN KEY ("Fk_codigo_factura_credito") REFERENCES "Factura_credito" ("Codigo_factura_credito"),
FOREIGN KEY ("Fk_codigo_producto") REFERENCES "Productos" ("Codigo_producto")
);

-- ----------------------------
-- Table structure for Detalle_productos_inventario
-- ----------------------------
DROP TABLE IF EXISTS "main"."Detalle_productos_inventario";
CREATE TABLE "Detalle_productos_inventario" (
"Fk_codigo_factura"  text NOT NULL,
"Fk_codigo_producto"  text NOT NULL,
"Cantidad"  integer,
"Saldo"  integer,
"Valor_unitario"  integer,
PRIMARY KEY ("Fk_codigo_factura" ASC, "Fk_codigo_producto" ASC),
CONSTRAINT "fkey0" FOREIGN KEY ("Fk_codigo_factura") REFERENCES "Factura_entrada" ("Codigo_factura"),
FOREIGN KEY ("Fk_codigo_producto") REFERENCES "Productos" ("Codigo_producto")
);

-- ----------------------------
-- Table structure for Factura_credito
-- ----------------------------
DROP TABLE IF EXISTS "main"."Factura_credito";
CREATE TABLE "Factura_credito" (
"Codigo_factura_credito"  text,
"Fk_codigo_cliente"  integer NOT NULL,
"Fecha_factura"  text,
"Valor_total"  integer,
"Estado"  text,
PRIMARY KEY ("Codigo_factura_credito" ASC),
FOREIGN KEY ("Fk_codigo_cliente") REFERENCES "Cliente" ("Cedula")
);

-- ----------------------------
-- Table structure for Factura_entrada
-- ----------------------------
DROP TABLE IF EXISTS "main"."Factura_entrada";
CREATE TABLE "Factura_entrada" (
"Codigo_factura"  text NOT NULL,
"Fecha_factura"  text,
"Valor_factura"  integer,
"Estado"  text,
"Fk_codigo_proveedor"  integer NOT NULL,
PRIMARY KEY ("Codigo_factura" ASC),
FOREIGN KEY ("Fk_codigo_proveedor") REFERENCES "Proveedor" ("Codigo_proveedor")
);

-- ----------------------------
-- Table structure for Impuesto
-- ----------------------------
DROP TABLE IF EXISTS "main"."Impuesto";
CREATE TABLE "Impuesto" (
"Codigo_impuesto"  INTEGER NOT NULL,
"Concepto"  TEXT,
"Gravamen"  INTEGER NOT NULL,
PRIMARY KEY ("Codigo_impuesto")
);

-- ----------------------------
-- Table structure for Impuesto_Productos
-- ----------------------------
DROP TABLE IF EXISTS "main"."Impuesto_Productos";
CREATE TABLE "Impuesto_Productos" (
"Fk_codigo_impuesto"  INTEGER NOT NULL,
"Fk_codigo_producto"  INTEGER NOT NULL,
"Fecha"  TEXT,
"Excento"  INTEGER,
"Fecha_ex"  TEXT,
PRIMARY KEY ("Fk_codigo_impuesto" ASC, "Fk_codigo_producto" ASC),
CONSTRAINT "fkey0" FOREIGN KEY ("Fk_codigo_impuesto") REFERENCES "Impuesto" ("Codigo_impuesto"),
FOREIGN KEY ("Fk_codigo_producto") REFERENCES "Productos" ("Codigo_producto")
);

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
-- Table structure for Productos
-- ----------------------------
DROP TABLE IF EXISTS "main"."Productos";
CREATE TABLE Productos (Codigo_producto text NOT NULL, Nombre_producto text, Stop_minimo integer, Stop_maximo integer, Descripcion text, PRIMARY KEY (Codigo_producto));

-- ----------------------------
-- Table structure for Proveedor
-- ----------------------------
DROP TABLE IF EXISTS "main"."Proveedor";
CREATE TABLE Proveedor (Codigo_proveedor integer NOT NULL, Nombre_proveedor text, Telefono text, Direccion text, PRIMARY KEY (Codigo_proveedor));

-- ----------------------------
-- Table structure for _Impuesto_old_20150108
-- ----------------------------
DROP TABLE IF EXISTS "main"."_Impuesto_old_20150108";
CREATE TABLE "_Impuesto_old_20150108" (
"Codigo_impuesto"  INTEGER
);

-- ----------------------------
-- Table structure for _Impuesto_old_20150108_1
-- ----------------------------
DROP TABLE IF EXISTS "main"."_Impuesto_old_20150108_1";
CREATE TABLE "_Impuesto_old_20150108_1" (
"Codigo_impuesto"  INTEGER,
"Concepto"  TEXT,
"Gravamen"  INTEGER
);

-- ----------------------------
-- Table structure for _Impuesto_Productos_old_20150108
-- ----------------------------
DROP TABLE IF EXISTS "main"."_Impuesto_Productos_old_20150108";
CREATE TABLE "_Impuesto_Productos_old_20150108" (
"Fk_codigo_impuesto"  INTEGER NOT NULL,
"Fk_codigo_producto"  INTEGER NOT NULL,
"Fecha"  TEXT,
"Excento"  INTEGER,
"Fecha_ex"  TEXT,
PRIMARY KEY ("Fk_codigo_impuesto", "Fk_codigo_producto")
);

-- ----------------------------
-- Table structure for _Impuesto_Productos_old_20150108_1
-- ----------------------------
DROP TABLE IF EXISTS "main"."_Impuesto_Productos_old_20150108_1";
CREATE TABLE "_Impuesto_Productos_old_20150108_1" (
"Fk_codigo_impuesto"  INTEGER NOT NULL,
"Fk_codigo_producto"  INTEGER NOT NULL,
"Fecha"  TEXT,
"Excento"  INTEGER,
"Fecha_ex"  TEXT,
PRIMARY KEY ("Fk_codigo_impuesto" ASC, "Fk_codigo_producto" ASC),
FOREIGN KEY ("Fk_codigo_impuesto") REFERENCES "Impuesto" ("Codigo_impuesto")
);
