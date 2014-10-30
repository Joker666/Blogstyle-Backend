<?php

class Post extends \Eloquent {
	protected $fillable = ['id', 'title', 'body'];

    public function user()
    {
        return $this->belongsTo('User');
    }

    public function category()
    {
        return $this->belongsTo('Category');
    }

    public function medias()
    {
        return $this->hasMany('Media');
    }

    public function author() {
        return $this->hasOne('User');
    }
}