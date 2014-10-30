<?php

class Category extends \Eloquent {
	protected $fillable = [];

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'categories';

    protected $timestamps = false;

    public function posts()
    {
        return $this->hasMany('Post');
    }
}