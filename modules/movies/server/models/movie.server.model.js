'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Movie Schema
 */
var MovieSchema = new Schema({
  name: {
    type: String,
    default: '',
    required: 'Please fill Movie name',
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  year:{
    type: String,
    default: '',
    required: 'Please fill Year',
    trim: true
  },
  description:{
    type:String,
    default: '',
    required: 'Please fill description',
    trim: true
  },
  category:{
    type: String,
    default: '',
    required: 'Please fill category',
    trim: true
  },
  image:{
    type: String,
    default: '',
    required: 'Please fill image url',
    trim: true
  }
});

mongoose.model('Movie', MovieSchema);
