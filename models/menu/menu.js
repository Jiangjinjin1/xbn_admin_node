/**
 * Created by dells on 2017/6/26.
 */
'use strict';

import mongoose from 'mongoose'
import db from '../../mongodb/db'

const Schema = mongoose.Schema;

const xbnmenuSchema = new Schema({
  "menu_id" : Number,
  "menu_name" : String,
  "link" : String,
  "icon_url" : String,
});

xbnmenuSchema.index({id: 1});

const Xbnmenu = db.model('Xbnmenu', xbnmenuSchema);


export default Xbnmenu
