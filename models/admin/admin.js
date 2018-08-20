'use strict';

import mongoose from 'mongoose'
import db from '../../mongodb/db'

// 要注意，直到 model 使用的数据库连接（ connection ）被打开，tanks 才会被创建/删除。每个 model 都有一个绑定的连接。 如果 model 是通过调用 mongoose.model() 生成的，它将使用 mongoose 的默认连接。
// 如果自行创建了连接，就需要使用 connection 的 model() 函数代替 mongoose 的 model() 函数。

const Schema = mongoose.Schema;

const xbnuserSchema = new Schema({
	user_name: { type: String , index: true},
	password: String,
	mobile: String,
	email: String,
	user_id: Number,
	create_date: String,
	admin: {type: String, default: '管理员'},
	status: {type: Number, default: 1},  //1:待审核 2:通过、3:驳回
	/*companyNameCn: {type:String,ref : "Xbncomp"}, //这里即为主表的外键，关联子表。ref后的Xbncomp代表的是子表Xbncomp的Model*/
	companyNameCn: String,
	avatar: {type: String, default: 'default.jpg'},
	city: String,
});

xbnuserSchema.index({id: 1});

const User = db.model('Xbnuser', xbnuserSchema);

const xbnadminSchema = new Schema({
	admin_name: { type: String , index: true},
	password: String,
	admin_id: Number,
	lastLoginIp: String,
	lastLoginTime: String,
	loginCount: {type: Number, default: 0},
	create_date: Date,
	role_id: Number,
	realname: String,
	role_name: String,
	status: {type: Number, default: 1},  //1:待审核 2:通过、3:驳回
});

xbnadminSchema.index({id: 1});

const Admin = db.model('Xbnadmin', xbnadminSchema);

const role_operationSchema = new Schema({
	role_id: Number,
	role_name:String,
	operationIds: Array,
	create_date: Date
});

role_operationSchema.index({id: 1});

const Role_opera = db.model('Xbnrole_operation', role_operationSchema);

const rolepermissionsSchema = new Schema({
	operation_id:Number,
	operation_name:String,
	parent_id:Number,
	childOperations:Array,
	link:String,
	method:String,
	data_source_id:Number
});

rolepermissionsSchema.index({id: 1});

const Permissions = db.model('Xbnpermissions', rolepermissionsSchema);


export default {User,Admin,Permissions,Role_opera}

